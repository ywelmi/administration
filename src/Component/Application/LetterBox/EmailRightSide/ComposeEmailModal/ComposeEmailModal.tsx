import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { Btn } from "../../../../../AbstractElements";
import { ComposeMessage, EnterYourMessages, FromHeading, Href, SaveAsDraft, Send, Subject } from "../../../../../utils/Constant";
import { Link } from "react-router-dom";
import SimpleMdeReact from "react-simplemde-editor";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddNewEmailInterFace } from "../../../../../Types/Application/LetterBox/LetterBox";
import EmailSubInput from "./EmailSubInput";
import { addNewEmail, setComposeEmail, setEmailValidation } from "../../../../../ReduxToolkit/Reducer/LetterBoxSlice";

const ComposeEmailModal = () => {
  const [ccShow,setCcShow] = useState(false);
  const [bccShow,setBccShow] = useState(false)
  const {composeEmail,emailValidation} = useAppSelector((state)=>state.letterBox)
  const dispatch = useAppDispatch();
  const {register,handleSubmit,formState: { errors },reset} = useForm<AddNewEmailInterFace>();
  const onSubmit:SubmitHandler<AddNewEmailInterFace> = (data) => {
    dispatch(addNewEmail(data));
    dispatch(setEmailValidation(false));
    dispatch(setComposeEmail(false));
    reset();
  };
  return (
    <Modal isOpen={composeEmail} className={`${composeEmail ? "show" : ""}`} size="lg"  id="compose_mail" >
      <ModalHeader toggle={()=>dispatch(setComposeEmail(false))}> {ComposeMessage} </ModalHeader>
      <ModalBody className="compose-modal">
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Row>
              <Col sm="2">
                <Label className="col-form-label" for="composeFrom" check >{FromHeading} :</Label>
              </Col>
              <Col sm="10">
                <Input id="composeFrom" type="email"/>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="2">
                <Label className="col-form-label" for="composeTo" check>To :</Label>
              </Col>
              <Col sm="10">
                <input className={`form-control ${emailValidation && `${errors.userEmail ? "is-invalid":"is-valid"}`}`} type="email" {...register("userEmail", { required: true })} autoComplete="off"/>
                <div className="add-bcc">
                  <div className="d-flex gap-2">
                    <Link className="btn" to={Href} onClick={()=>setCcShow(!ccShow)} > Cc</Link>
                    <Link className="btn" to={Href} onClick={()=>setBccShow(!bccShow)}> Bcc </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </FormGroup>
          <EmailSubInput ccShow={ccShow} bccShow={bccShow} />
          <FormGroup>
            <Row>
              <Col sm="2">
                <Label className="col-form-label" for="composeSubject" check >{Subject} :</Label>
              </Col>
              <Col sm="10">
                <input className={`form-control ${emailValidation && `${errors.subject ? "is-invalid":"is-valid"}`}`} type="textarea" {...register("subject", { required: true })} autoComplete="off"/>
              </Col>
            </Row>
          </FormGroup>
          <div className="toolbar-box">
            <div id="editor">
              <SimpleMdeReact id="editor_container" placeholder={EnterYourMessages} options={{ autofocus: true, spellChecker: false }} />
            </div>
          </div>
          <ModalFooter>
            <Btn color="light" onClick={()=>dispatch(setComposeEmail(false))}>{SaveAsDraft}</Btn>
            <Btn color="primary" type="submit" onClick={()=>dispatch(setEmailValidation(true))}> {Send} </Btn>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ComposeEmailModal;
