import { Col, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { TTeammember } from "../../type/teammember";
import { Field, Form, Formik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { hasOwnProperty } from "react-bootstrap-typeahead/types/utils";
import { useTeamStore } from "../../store/team";
import { DGender, DRank } from "../../type/enum";

interface ITeammemberForm {
  teammember?: TTeammember;
  onSubmit: (teammember: TTeammember) => void;
}

interface ITeammemberModal extends ITeammemberForm {
}

const TeammemberForm = (
  { teammember: initTeammember, onSubmit }: ITeammemberForm,
) => {
  const teammember: Partial<TTeammember> = initTeammember
    ? initTeammember
    : { name: "", team_id: undefined, gender: 0, rank: "0" };
  const { teams } = useTeamStore();

  return (
    <Formik
      initialValues={{ ...teammember }}
      onSubmit={(value) => {
        console.log({ submitValue: value });

        let submitValue = { ...value } as TTeammember;
        if (hasOwnProperty(value, "id")) {
          submitValue["id"] = value.id as string;
        }

        if (submitValue) onSubmit(submitValue);
      }}
    >
      {() => (
        <Form>
          <Row className="g-3">
            <Col md="12">
              <Label>Tên</Label>
              <Field
                className="form-control"
                name="name"
                type="text"
                placeholder={teammember.name}
              />
            </Col>
            {(teams?.length)
              ? (
                <Col md="12">
                  <InputGroup>
                    <InputGroupText>Đội</InputGroupText>
                    <Field name="team_id" as="select">
                      {teams.map(({ id, org_name }) => (
                        <option value={id}>{org_name}</option>
                      ))}
                    </Field>
                  </InputGroup>
                </Col>
              )
              : null}

            <Col md="12">
              <InputGroup>
                <InputGroupText>Cấp bậc</InputGroupText>
                <Field name="rank" as="select">
                  {DRank.map((item, i) => {
                    return <option value={i}>{item}</option>;
                  })}
                </Field>
              </InputGroup>
            </Col>
            <Col md="12">
              <InputGroup>
                <InputGroupText>Giới tính</InputGroupText>
                <Field name="gender" as="select">
                  {DGender.map((item, i) => {
                    return <option value={i}>{item}</option>;
                  })}
                </Field>
              </InputGroup>
            </Col>
            <Col xs="12">
              <Btn color="primary" type="submit">
                Xác nhận
              </Btn>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
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

export { TeammemberForm, useTeammemberModal };
