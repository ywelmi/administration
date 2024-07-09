import { Col, Label, Row } from "reactstrap";
import { TTeam } from "../../type/team";
import { useFormik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCompetitionStore } from "../../store/competition";
import { useOrgStore } from "../../store/org";
import { useSportStore } from "../../store/sport";
import { InputSelect } from "../../Component/InputSelect";
import { useTeammemberStore } from "../../store/teammember";
import { useTeammemberPopover } from "../Teammember/TeammemberForm";
import { TTeammember } from "../../type/teammember";
import { ListTeammember } from "../Teammember/ListTeammember";

interface ITeamForm {
  team?: TTeam;
  onSubmit: (team: TTeam) => void;
  onCancel?: () => void;
}

interface ITeamModal extends ITeamForm {
}

const TeamForm = ({ team: initTeam, onSubmit, onCancel }: ITeamForm) => {
  const team: TTeam = initTeam ? initTeam : {
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
  const formik = useFormik<TTeam>({
    initialValues: { ...team },
    onSubmit: (value) => {
      const { list_team_member } = value;
      console.log({ submitAddTeamValue: value });
      let submitValue = {
        ...value,
        list_team_member: list_team_member?.map(({ gender, name, rank }) => ({
          gender,
          name,
          rank,
        })),
      } as TTeam;
      if (submitValue) onSubmit(submitValue);
    },
  });

  const [newListMember, setNewListMember] = useState<TTeammember[]>([]);

  const handleAddTeammember = useCallback((newTeammember: TTeammember) => {
    setNewListMember((prev) => [...prev, newTeammember]);
    const newTeammembers = formik.values.list_team_member || [];
    formik.setFieldValue("list_team_member", [
      ...newTeammembers,
      newTeammember,
    ]);
  }, []);

  const displayedListTeammember: TTeammember[] = useMemo(() => [
    ...newListMember,
    ...teammembers,
  ], [teammembers, newListMember]);

  const { TeammemberPopover, handleToggle } = useTeammemberPopover({
    onSubmit: handleAddTeammember,
    omitColumns: ["teams"],
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        {/* <Col md="12" className="form-check checkbox-primary"> */}
        {/*   <Label for="has_militia" check>{t("has_militia")}</Label> */}
        {/*   <Input */}
        {/*     id="has_militia" */}
        {/*     type="checkbox" */}
        {/*     defaultChecked */}
        {/*     value={formik.values.has_militia} */}
        {/*     onChange={formik.handleChange} */}
        {/*   /> */}
        {/* </Col> */}
        {/* <Col md="12" className="form-check checkbox-primary"> */}
        {/*   <Label for="has_army" check>{t("has_army")}</Label> */}
        {/*   <Input */}
        {/*     id="has_army" */}
        {/*     type="checkbox" */}
        {/*     defaultChecked */}
        {/*     value={formik.values.has_army} */}
        {/*     onChange={formik.handleChange} */}
        {/*   /> */}
        {/* </Col> */}
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
            onSelectedRowsChange={({ selectedRows }) => {
              console.log({ selectedRows });
              console.log({ formikMembers: formik.values.list_team_member });
              if (
                selectedRows.length === formik.values.list_team_member?.length
              ) {
                return;
              }
              formik.setFieldValue(
                "list_team_member",
                selectedRows.map((row) => row),
              );
            }}
            selectableRowSelected={(r) => {
              return !r?.id ||
                !!formik.values.list_team_member?.map(({ id }) => id).includes(
                  r.id,
                );
            }}
          />
        </Col>
        {![4, 5].includes(
            sports.find(({ id }) => formik.values.sport_id === id)
              ?.point_unit || -999,
          )
          ? (
            <div>
              <TeammemberPopover target="PopoverAddUser">
                <Btn
                  type="button"
                  color="secondary"
                  id="PopoverAddUser"
                  onClick={handleToggle}
                >
                  Bật/Tắt thêm vận động viên
                </Btn>
              </TeammemberPopover>
            </div>
          )
          : null}

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
