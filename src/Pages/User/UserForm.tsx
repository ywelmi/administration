import { Col, Label, Row } from "reactstrap";
import { TUser } from "../../type/user";
import { Field, Form, Formik } from "formik";
import { Btn } from "../../AbstractElements";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { useState } from "react";

interface IUserForm {
  user?: Partial<TUser>;
  onSubmit: (user: TUser) => void;
  onCancel?: () => void;
}

interface IUserModal extends IUserForm {
}

const UserForm = ({ user, onSubmit, onCancel }: IUserForm) => {
  if (!user) user = { username: "", fullname: "", password: "" };

  return (
    <Formik
      initialValues={{ ...user }}
      onSubmit={(value) => {
        console.log(value);
        if (value) onSubmit(value as TUser);
      }}
    >
      {() => (
        <Form>
          <Row className="g-3">
            <Col md="12">
              <Label>Tên đăng nhập</Label>
              <Field
                className="form-control"
                name="username"
                type="text"
                placeholder={user.username}
              />
            </Col>
            <Col md="12">
              <Label>Tên đầy đủ</Label>
              <Field
                className="form-control"
                name="fullname"
                type="text"
                placeholder={user.fullname}
              />
            </Col>
            <Col md="12">
              <Label>Mật khẩu</Label>
              <Field
                className="form-control"
                name="password"
                type="password"
                placeholder={user.password}
              />
            </Col>
            <Col xs="12" className="gap-2" style={{ display: "flex" }}>
              <Btn color="primary" type="submit">
                Xác nhận
              </Btn>
              {onCancel
                ? (
                  <Btn color="primary" type="button" onClick={onCancel}>
                    Hủy
                  </Btn>
                )
                : null}
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

const useUserModal = ({ onSubmit, ...rest }: IUserModal) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  const handleSubmit = (user: TUser) => {
    onSubmit(user);
    setOpened(false);
  };
  const UserModal = () => (
    <CommonModal
      backdrop="static"
      modalBodyClassName="social-profile text-start"
      isOpen={opened}
      toggle={handleToggle}
    >
      <UserForm
        onSubmit={handleSubmit}
        {...rest}
        onCancel={() => setOpened(false)}
      />
    </CommonModal>
  );

  return { UserModal, handleToggle };
};

export { UserForm, useUserModal };
