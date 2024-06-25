import { Col, Label, Row } from "reactstrap";
import { TOrg } from "../../type/org";
import { Field, Form, Formik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";

interface IOrgForm {
  org?: Partial<TOrg>;
  onSubmit: (org: TOrg) => void;
}

interface IOrgModal extends IOrgForm {
}

const OrgForm = ({ org, onSubmit }: IOrgForm) => {
  if (!org) org = { name: "", group_id: -1 };

  return (
    <Formik
      initialValues={{ ...org }}
      onSubmit={(value) => {
        console.log(value);
        if (value) onSubmit(value as TOrg);
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
            {/* <Col md="12"> */}
            {/*   <Label>Nhóm</Label> */}
            {/*   <Field */}
            {/*     className="form-control" */}
            {/*     name="group_id" */}
            {/*     type="number" */}
            {/*     placeholder={org.group_id} */}
            {/*   /> */}
            {/* </Col> */}
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
