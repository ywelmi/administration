import { Field, Form, Formik } from "formik";
import React from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { CheckMeOut, Email, EmailPlaceHolder, Password, PasswordPlaceholder, SignIn } from "../../../../utils/Constant";
import { StaticModalToggleProp } from "../../../../Types/Ui-Kits/UiKitsTypes";
import { Btn } from "../../../../AbstractElements";

const StaticForm: React.FC<StaticModalToggleProp> = ({ staticModalToggle }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(value) => console.log(value)}
    >
      {() => (
        <Form>
          <Row className="g-3">
            <Col md="12">
              <Label>{Email}</Label>
              <Field className="form-control" name="email" type="email" placeholder={EmailPlaceHolder} />
            </Col>
            <Col md="12">
              <Label>{Password}</Label>
              <Field className="form-control" name="password" type="password" placeholder={PasswordPlaceholder}/>
            </Col>
            <Col xs="12">
              <div className="form-check">
                <Input type="checkbox" />
                <Label className="form-check-label" for="gridCheck">
                  {CheckMeOut}
                </Label>
              </div>
            </Col>
            <Col xs="12">
              <Btn color="primary" onClick={staticModalToggle}>
                {SignIn}
              </Btn>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default StaticForm;
