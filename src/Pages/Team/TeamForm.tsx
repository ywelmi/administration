import { Col, Input, Label, Row } from "reactstrap";
import { TTeam } from "../../type/team";
import { useFormik } from "formik";
import { Btn, Popovers } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCompetitionStore } from "../../store/competition";
import { useOrgStore } from "../../store/org";
import { useSportStore } from "../../store/sport";
import { InputSelect } from "../../Component/InputSelect";
import { useTeammemberStore } from "../../store/teammember";
import { useTeammemberPopover } from "../Teammember/TeammemberForm";
import { TTeammember } from "../../type/teammember";
import { teammemberCreate } from "../../Service/teammember";
import { toast } from "react-toastify";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import DataTable from "react-data-table-component";
import { ListTeam } from "./ListTeam";

interface ITeamForm {
  team?: TTeam;
  onSubmit: (team: TTeam) => void;
}

interface ITeamModal extends ITeamForm {
}

const TeamForm = ({ team: initTeam, onSubmit }: ITeamForm) => {
  const team: TTeam = initTeam ? initTeam : {
    id: "",
    competition_id: "",
    org_id: "",
    has_militia: false,
    has_army: false,
    sport_id: "",
    org_name: "",
    list_member_id: [], // list of teammembers' ids
  };
  const { competitions } = useCompetitionStore();
  const { orgs } = useOrgStore();
  const { sports } = useSportStore();
  const { teammembers, addTeammember } = useTeammemberStore();

  const { t } = useTranslation();
  const formik = useFormik<TTeam>({
    initialValues: { ...team },
    onSubmit: (value) => {
      console.log({ submitAddTeamValue: value });

      let submitValue = { ...value } as TTeam;
      // if (hasOwnProperty(value, "id")) {
      //   submitValue["id"] = value.id as string;
      // }

      if (submitValue) onSubmit(submitValue);
    },
  });

  const [newMember, setNewmember] = useState<{ label: string; value: string }>(
    { label: "", value: "" },
  );

  const handleAddTeammember = (teammember: TTeammember) => {
    const { id, ...rests } = teammember;

    // test when no api works
    // const _id = Date.now().toString();
    // if (formik.values.lst_member_id) {
    //   formik.setFieldValue("lst_member_id", [
    //     ...formik.values.lst_member_id,
    //     _id,
    //   ]);
    // }
    // setNewmember({ value: _id, label: teammember.name });

    teammemberCreate(rests).then((res) => {
      const { status, data } = res;
      if (status === 200) {
        const resData = data as TTeammember;
        addTeammember(resData);
        if (formik.values.list_member_id) {
          formik.setFieldValue("lst_member_id", [
            ...formik.values.list_member_id,
            resData.id,
          ]);
        }
        setNewmember({ value: resData.id, label: resData.name });
        toast.info(t("success"));
        return;
      }
      return Promise.reject(status);
    }).catch((err) => {
      toast.error(t("error"));
      console.log({ err });
    });
  };

  const { TeammemberPopover, handleToggle } = useTeammemberPopover({
    onSubmit: handleAddTeammember,
  });

  // const selectableMembers = useMemo(() => {
  //   const members = teammembers.filter(({ id }) =>
  //     // !formik.values.lst_member_id?.includes(id)
  //     id
  //   ).map(({ id, name }) => ({
  //     label: name,
  //     value: id,
  //   }));
  //
  //   members.push({ ...newMember });
  //   return members;
  // }, [newMember]);

  // console.log({ selectableMembers });
  // console.log({ formik: formik.values.list_member_id });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12" className="form-check checkbox-primary">
          <Label for="has_militia" check>{t("has_militia")}</Label>
          <Input
            id="has_militia"
            type="checkbox"
            defaultChecked
            value={formik.values.has_militia}
            onChange={formik.handleChange}
          />
        </Col>
        <Col md="12" className="form-check checkbox-primary">
          <Label for="has_army" check>{t("has_army")}</Label>
          <Input
            id="has_army"
            type="checkbox"
            defaultChecked
            value={formik.values.has_army}
            onChange={formik.handleChange}
          />
        </Col>
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
          <Label for="list_member_id" check>{t("teammember")}</Label>

          <ListTeam
            onSelectedRowsChange={({ selectedRows }) => {
              formik.setFieldValue(
                "list_member_id",
                selectedRows.map(({ id }) => id),
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
              <TeammemberPopover target="add_user">
                <Btn
                  type="button"
                  color="secondary"
                  id="add_user"
                  onClick={handleToggle}
                >
                  Thêm vận động viên
                </Btn>
              </TeammemberPopover>
            </div>
          )
          : null}

        <Col xs="12">
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
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
      <TeamForm onSubmit={handleSubmit} {...rest} />
    </CommonModal>
  );

  return { TeamModal, handleToggle };
};

export { TeamForm, useTeamModal };
