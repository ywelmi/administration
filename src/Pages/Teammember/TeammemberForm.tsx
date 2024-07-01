import { Col, Input, Label, Row } from "reactstrap";
import { TTeammember } from "../../type/teammember";
import { useFormik } from "formik";
import { Btn, Popovers } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { hasOwnProperty } from "react-bootstrap-typeahead/types/utils";
import { useTeamStore } from "../../store/team";
import { DGender, DRank } from "../../type/enum";
import { InputSelect } from "../../Component/InputSelect";

interface ITeammemberForm {
  omitColumns?: ("teams" | "gender")[];
  teammember?: TTeammember;
  onSubmit: (teammember: TTeammember) => void;
}

interface ITeammemberModal extends ITeammemberForm {
}

interface ITeammemberPopover extends ITeammemberForm {
}
const TeammemberForm = (
  { teammember: initTeammember, onSubmit, omitColumns }: ITeammemberForm,
) => {
  const teammember: Partial<TTeammember> = initTeammember
    ? initTeammember
    : { name: "", team_id: undefined, gender: 0, rank: 0 };
  const { teams } = useTeamStore();
  console.log({ teams });

  const formik = useFormik({
    initialValues: { ...teammember },
    onSubmit: (value) => {
      console.log({ submitValue: value });

      let submitValue = { ...value } as TTeammember;
      if (hasOwnProperty(value, "id")) {
        submitValue["id"] = value.id as string;
      }

      if (submitValue) onSubmit(submitValue);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-3">
        <Col md="12">
          <Label>Tên</Label>
          <Input
            className="form-control"
            name="name"
            type="text"
            placeholder={teammember.name}
            onChange={formik.handleChange}
          />
        </Col>
        {(teams?.length && !omitColumns?.includes("teams"))
          ? (
            <Col md="12">
              <InputSelect
                title="Đội"
                data={teams}
                k="org_name"
                name="team_id"
                v="id"
                handleChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.team_id}
              />
            </Col>
          )
          : null}

        <Col md="12">
          <InputSelect
            title="Cấp bậc"
            data={DRank.map((item, i) => ({ item, i }))}
            k="item"
            name="rank"
            v="i"
            handleChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.rank}
          />
        </Col>
        <Col md="12">
          <InputSelect
            title="Giới tính"
            data={DGender.map((item, i) => ({ item, i }))}
            k="item"
            name="gender"
            v="i"
            handleChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.gender}
          />
        </Col>
        <Col xs="12">
          <Btn color="primary" type="submit">
            Xác nhận
          </Btn>
        </Col>
      </Row>
    </form>
  );
};

const useTeammemberModal = ({ onSubmit, ...rest }: ITeammemberModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (teammember: TTeammember) => {
    onSubmit(teammember);
    setOpened(false);
  };
  const TeammemberModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <TeammemberForm onSubmit={handleSubmit} {...rest} />
    </CommonModal>
  );

  return { TeammemberModal, handleToggle };
};

const useTeammemberPopover = ({ onSubmit, ...rest }: ITeammemberPopover) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (teammember: TTeammember) => {
    onSubmit(teammember);
    setOpened(false);
  };

  const TeammemberPopover = (
    { children, target }: React.PropsWithChildren<{ target: string }>,
  ) => (
    <div>
      {children}
      <Popovers
        isOpen={opened}
        placement="auto"
        target={target}
        trigger="click"
      >
        <TeammemberForm onSubmit={handleSubmit} {...rest} />
      </Popovers>
    </div>
  );

  return { TeammemberPopover, handleToggle };
};

export { TeammemberForm, useTeammemberModal, useTeammemberPopover };
