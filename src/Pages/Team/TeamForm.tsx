import { Col, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { TTeam } from "../../type/team";
import { Field, Form, Formik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { useGroupStore } from "../../store/group";
import { hasOwnProperty } from "react-bootstrap-typeahead/types/utils";

interface ITeamForm {
  team?: TTeam;
  onSubmit: (team: TTeam) => void;
}

interface ITeamModal extends ITeamForm {
}

const TeamForm = ({ team: initTeam, onSubmit }: ITeamForm) => {
  const team = initTeam ? initTeam : { name: "", group_id: null };
  const { groups } = useGroupStore();
  // const groups = [
  //   {
  //     "id": 1,
  //     "name": "Quân khu",
  //   },
  //   {
  //     "id": 2,
  //     "name": "Quân doàn, quân chủng, Bộ đội biên phòng",
  //   },
  //   {
  //     "id": 3,
  //     "name": "Binh chủng, Bộ Tư lệnh",
  //   },
  //   {
  //     "id": 4,
  //     "name": "Học viện, nhà trường",
  //   },
  //   {
  //     "id": 5,
  //     "name": "Cơ quan, trung tâm, viện, bệnh viện",
  //   },
  // ];

  return (
    <Formik
      initialValues={{ ...team }}
      onSubmit={(value) => {
        console.log({ submitValue: value });

        let submitValue = { ...value } as TTeam;
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
              <Label>Tên đơn vị</Label>
              <Field
                className="form-control"
                name="name"
                type="text"
                placeholder={team.name}
              />
            </Col>
            {(groups?.length)
              ? (
                <Col md="12">
                  <InputGroup>
                    <InputGroupText>Nhóm</InputGroupText>
                    <Field name="group_id" as="select">
                      {groups.map(({ id, name }) => (
                        <option value={id}>{name}</option>
                      ))}
                    </Field>
                  </InputGroup>
                </Col>
              )
              : null}

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
