import { Col, Label, Row } from "reactstrap";
import { TTeam } from "../../type/team";
import { useFormik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCompetitionStore } from "../../store/competition";
import { useOrgStore } from "../../store/org";
import { useSportStore } from "../../store/sport";
import { InputSelect } from "../../Component/InputSelect";
import { useTeammemberStore } from "../../store/teammember";
import { useTeammemberPopover } from "../Teammember/TeammemberForm";
import { TKeyTeammember, TTeammember } from "../../type/teammember";
import { ListTeammember } from "../Teammember/ListTeammember";
import { DGender, DRank } from "../../type/enum";
import { convertToDate } from "../../utils/date";
import { N } from "../../name-conversion";
import { getFilterByValue } from "../../Service/_getParams";
import { teammembersGet } from "../../Service/teammember";

interface ITeamForm {
  team?: TTeam;
  onSubmit: (team: TTeam) => void;
  onCancel?: () => void;
}

interface ITeamModal extends ITeamForm {
}

const tableTeammemberColumns = ([
  "name",
  "rank",
  "gender",
  "dob",
  "date_join_army",
  // "org_name",
  "weights",
] as TKeyTeammember[]).map((c) => ({
  "name": N[c],
  sortable: true,
  selector: (row: TTeammember) => {
    const v = row?.[c as TKeyTeammember];
    if (v == null) return "";
    switch (c) {
      case "gender" as TKeyTeammember: {
        return DGender[parseInt(v as string)];
      }
      case "rank": {
        return DRank[parseInt(v as string)];
      }
      case "created": {
        return convertToDate(v);
      }
      case "dob": {
        return convertToDate(v);
      }
      case "date_join_army": {
        return convertToDate(v);
      }
      default:
        return row[c as TKeyTeammember] || "";
    }
  },
}));

const TeamForm = ({ team: initTeam, onSubmit, onCancel }: ITeamForm) => {
  const team: Partial<TTeam> = initTeam ? initTeam : {
    id: "",
    competition_id: "",
    org_id: "",
    // has_militia: false,
    // has_army: false,
    sport_id: "",
    org_name: "",
    list_team_member: [], // list of teammembers' ids
  };

  const { competitions } = useCompetitionStore();
  const { orgs } = useOrgStore();
  const { sports } = useSportStore();
  const { teammembers } = useTeammemberStore();

  const { t } = useTranslation();
  const formik = useFormik<Partial<TTeam>>({
    initialValues: { ...team },
    onSubmit: (value) => {
      const { list_team_member } = value;
      console.log({ submitAddTeamValue: value });
      let submitValue = {
        ...value,
        // list_team_member: list_team_member?.map((
        //   { gender, name, rank, id },
        // ) => id),
      } as TTeam;
      if (submitValue) onSubmit(submitValue);
    },
  });

  // const [newListMember, setNewListMember] = useState<TTeammember[]>([]);

  const [orgMembers, setOrgMembers] = useState<TTeammember[]>([]);

  // const handleAddTeammember = useCallback((newTeammember: TTeammember) => {
  //   setNewListMember((prev) => [...prev, newTeammember]);
  //   const newTeammembers = formik.values.list_team_member || [];
  //   formik.setFieldValue("list_team_member", [
  //     ...newTeammembers,
  //     newTeammember,
  //   ]);
  // }, []);

  useEffect(() => {
    (async () => {
      const { org_id: f_org_id } = formik.values;
      if (f_org_id) {
        const memberFilter = getFilterByValue("org_id", "=", f_org_id);
        const members = await teammembersGet({ filter: memberFilter }).then(
          (res) => {
            const { data: { data } } = res;
            return data;
          },
        );
        setOrgMembers(members);
      }
    })();
  }, [formik.values.org_id]);

  const displayedListTeammember = useMemo(() => {
    let availMembers: TTeammember[] = [];
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
    teammembers,
    // newListMember,
    orgMembers,
  ]);

  // const { TeammemberPopover, handleToggle } = useTeammemberPopover({
  //   onSubmit: handleAddTeammember,
  //   omitColumns: ["teams", "competitions", "orgs"],
  // });
  //
  console.log({ form: formik.values, displayedListTeammember });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        {(competitions?.length)
          ? (
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
          )
          : null}
        {(orgs?.length)
          ? (
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
          )
          : null}
        {(sports?.length)
          ? (
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
          )
          : null}
        <Col md="12" className="form-check checkbox-primary">
          <Label for="list_team_member" check>{t("teammember")}</Label>

          <ListTeammember
            data={displayedListTeammember}
            columns={tableTeammemberColumns}
            onSelectedRowsChange={({ selectedRows }) => {
              if (
                selectedRows.length ===
                  formik.values.list_team_member?.length
              ) {
                return;
              }
              // Add new
              formik.setFieldValue(
                "list_team_member",
                selectedRows.map((row) => row.id),
              );
              // Update
              formik.setFieldValue(
                "list_member_id",
                selectedRows.map((row) => row.id),
              );
            }}
            selectableRowSelected={(r) => {
              return !!formik.values.list_member_id?.includes(
                r.id,
              ) || !!formik.values.member_ids?.includes(r.id);
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
          {onCancel
            ? <Btn color="primary" type="button" onClick={onCancel}>Hủy</Btn>
            : null}
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
