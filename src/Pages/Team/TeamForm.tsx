import {
  Button,
  ButtonGroup,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { TTeam } from "../../type/team";
import { useFormik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCompetitionStore } from "../../store/competition";
import { useOrgStore } from "../../store/org";
import { useSportStore } from "../../store/sport";
import { InputSelect } from "../../Component/InputSelect";
import { TTeammember } from "../../type/teammember";
import { ListTeammember } from "../Teammember/ListTeammember";
import { DGender, DRank } from "../../type/enum";
import { convertToDate } from "../../utils/date";
import { N } from "../../name-conversion";
import { getFilterByValue } from "../../Service/_getParams";
import { teammembersGet } from "../../Service/teammember";
import { ColumnDef } from "@tanstack/react-table";
import { useConfigStore } from "../../store/config";

interface ITeamForm {
  team?: TTeam;
  onSubmit: (team: TTeam) => void;
  onCancel?: () => void;
}

interface ITeamModal extends ITeamForm {}

const tableTeammemberColumns: ColumnDef<TTeammember>[] = [
  {
    accessorKey: "name",
    footer: (props) => props.column.id,
    header: N["name"],
    cell: (props) => props.getValue() as string,
  },
  {
    accessorKey: "rank",
    footer: (props) => props.column.id,
    header: N["rank"],
    cell: (props) => DRank[props.getValue() as number],
  },
  {
    accessorKey: "gender",
    footer: (props) => props.column.id,
    header: N["gender"],
    cell: (props) => {
      return DGender[parseInt(props.getValue() as string)];
    },
    meta: { custom: { gender: true } },
  },
  {
    accessorKey: "created",
    footer: (props) => props.column.id,
    header: N["created"],
    cell: (props) => convertToDate(props.getValue() as string),
  },
  {
    accessorKey: "dob",
    footer: (props) => props.column.id,
    header: N["dob"],
    cell: (props) => convertToDate(props.getValue() as string),
    meta: { custom: { date: true } },
    filterFn: "dateFilter",
  },
  {
    accessorKey: "date_join_army",
    footer: (props) => props.column.id,
    header: N["date_join_army"],
    cell: (props) => convertToDate(props.getValue() as string),
  },
  {
    accessorKey: "org_name",
    footer: (props) => props.column.id,
    header: N["org_name"],
    cell: (props) => props.getValue() as string,
  },
  {
    accessorKey: "weights",
    footer: (props) => props.column.id,
    header: N["weights"],
    cell: (props) => props.getValue() as string,
  },
  {
    accessorKey: "competition_name",
    footer: (props) => props.column.id,
    header: N["competition_name"],
    cell: (props) => props.getValue() as string,
  },
];

const TeamForm = ({ team: initTeam, onSubmit, onCancel }: ITeamForm) => {
  const { unitType } = useConfigStore();
  const team: Partial<TTeam> = initTeam
    ? initTeam
    : {
        id: "",
        competition_id: "",
        org_id: "",
        has_militia: unitType === "DQTV" ? true : false,
        has_army: unitType === "LLTT" ? true : false,
        sport_id: "",
        org_name: "",
        list_team_member: [], // list of teammembers' ids
      };

  const { competitions } = useCompetitionStore();
  const { orgs } = useOrgStore();
  const { sportSelector } = useConfigStore();
  const { sports } = useSportStore(sportSelector());
  // const { teammembers } = useTeammemberStore();

  const { t } = useTranslation();
  const formik = useFormik<Partial<TTeam>>({
    initialValues: { ...team },
    onSubmit: (value) => {
      console.log({ submitAddTeamValue: value });
      let submitValue = {
        ...value,
      } as TTeam;
      if (submitValue) onSubmit(submitValue);
    },
  });

  const [orgMembers, setOrgMembers] = useState<TTeammember[]>([]);

  useEffect(() => {
    (async () => {
      const { org_id: f_org_id } = formik.values;
      if (f_org_id) {
        const memberFilter = getFilterByValue("org_id", "=", f_org_id);
        const members = await teammembersGet({
          filter: memberFilter,
        }).then((res) => {
          const {
            data: { data },
          } = res;
          return data;
        });
        setOrgMembers(members);
      }
    })();
  }, [formik.values.org_id]);

  const displayedListTeammember = useMemo(() => {
    const availMembers: TTeammember[] = [];
    if (!orgMembers?.length) {
      // availMembers.push(...teammembers);
    } else {
      availMembers.push(...orgMembers);
    }
    return [
      // ...newListMember,
      ...availMembers,
    ];
  }, [
    // teammembers,
    // newListMember,
    orgMembers,
  ]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        {competitions?.length ? (
          <Col md="12">
            <InputSelect
              title={t("competition_id")}
              data={competitions}
              k="name"
              name="competition_id"
              v="id"
              handleChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.competition_id}
            />
          </Col>
        ) : null}
        {orgs?.length ? (
          <Col md="12">
            <InputSelect
              title={t("org_id")}
              data={orgs}
              k="name"
              name="org_id"
              v="id"
              handleChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.org_id}
            />
          </Col>
        ) : null}

        {sports?.length ? (
          <Col md="12">
            <InputSelect
              title={t("sport_id")}
              data={sports}
              k="name"
              name="sport_id"
              v="id"
              handleChange={(e) => {
                formik.handleChange(e);
              }}
              value={formik.values.sport_id}
            />
          </Col>
        ) : null}
        <Col md="12" className="form-check checkbox-primary">
          <Label for="list_team_member" check>
            {t("teammember")}
          </Label>

          <ListTeammember
            data={displayedListTeammember}
            columns={tableTeammemberColumns}
            onSelectedRowsChange={({ selectedRows }) => {
              if (
                selectedRows.length ===
                  formik.values.list_team_member?.length ||
                selectedRows.length === formik.values.list_member_id?.length
              ) {
                return;
              }
              // Add new
              formik.setFieldValue(
                "list_team_member",
                selectedRows.map((row) => row.id)
              );
              // Update
              formik.setFieldValue(
                "list_member_id",
                selectedRows.map((row) => row.id)
              );
            }}
            selectableRowSelected={(r) => {
              return (
                !!team.list_member_id?.includes(r.id) ||
                !!team.list_team_member?.includes(r.id)
              );
            }}
          />
        </Col>

        {/* <TeammemberPopover target="PopoverAddUser"> */}
        {/*   <Btn */}
        {/*     type="button" */}
        {/*     color="secondary" */}
        {/*     id="PopoverAddUser" */}
        {/*     onClick={handleToggle} */}
        {/*   > */}
        {/*     Bật/Tắt thêm vận động viên */}
        {/*   </Btn> */}
        {/* </TeammemberPopover> */}

        <Col xs="12" className="gap-2" style={{ display: "flex" }}>
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
          {onCancel ? (
            <Btn color="primary" type="button" onClick={onCancel}>
              Đóng
            </Btn>
          ) : null}
        </Col>
      </Row>
    </form>
  );
};

const useTeamModal = ({ onSubmit, ...rest }: ITeamModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (team: TTeam) => {
    onSubmit(team);
    setOpened(false);
  };
  const TeamModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <TeamForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { TeamModal, handleToggle };
};

export { TeamForm, useTeamModal };
