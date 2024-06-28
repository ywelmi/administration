import { Col, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { TOrg } from "../../type/org";
import { Field, Form, Formik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";
import { useGroupStore } from "../../store/group";
import { hasOwnProperty } from "react-bootstrap-typeahead/types/utils";

interface IOrgForm {
  org?: TOrg;
  onSubmit: (org: TOrg) => void;
}

interface IOrgModal extends IOrgForm {
}

const OrgForm = ({ org: initOrg, onSubmit }: IOrgForm) => {
  const org = initOrg ? initOrg : { name: "", group_id: null };
  const { groups } = useGroupStore();

  return (
    <Formik
      initialValues={{ ...org }}
      onSubmit={(value) => {
        console.log({ submitValue: value });

        let submitValue = { ...value } as TOrg;
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
                placeholder={org.name}
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

const useOrgModal = ({ onSubmit, ...rest }: IOrgModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (org: TOrg) => {
    onSubmit(org);
    setOpened(false);
  };
  const OrgModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <OrgForm onSubmit={handleSubmit} {...rest} />
    </CommonModal>
  );

  return { OrgModal, handleToggle };
};

export { OrgForm, useOrgModal };
