import { Col, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { Btn } from "../../../../../AbstractElements";
import { Add, AddLabelHeading, Cancel, Email, LabelColor, LabelName } from "../../../../../utils/Constant";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setModal } from "../../../../../ReduxToolkit/Reducer/LetterBoxSlice";

const AddLabelModal = () => {
  const {modal} = useAppSelector((state)=>state.letterBox)
  const dispatch = useAppDispatch()
  return (
    <Modal isOpen={modal} size="lg" className={`${modal ? "show" : ""}`} id="label-pill-modal" >
      <ModalHeader toggle={()=>dispatch(setModal(false))}>{AddLabelHeading}</ModalHeader>
      <ModalBody>
        <Form>
          <Row className="g-sm-3 g-2 custom-input">
            <Col sm="2">
              <Label className="col-form-label" for="LabelName_modal" >{LabelName} : </Label>
            </Col>
            <Col sm="10">
              <Input id="Email_Modal" type="email"  />
            </Col>
            <Col sm="2">
              <Label className="col-form-label" for="LabelName_modal" > {Email} : </Label>
            </Col>
            <Col sm="10">
              <Input id="Color_Modal" type="email" />
            </Col>
            <Col sm="2">
              <Label for="exampleColorInput" >
                {LabelColor} :
              </Label>
            </Col>
            <Col sm="2" xs="2">
              <Input className="form-control-color" id="exampleColorInput" type="color" defaultValue="#006666" title="Choose your color" />
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Btn color="light" onClick={()=>dispatch(setModal(false))}> {Cancel} </Btn>
        <Btn color="primary" onClick={()=>dispatch(setModal(false))}> {Add}</Btn>
      </ModalFooter>
    </Modal>
  );
};

export default AddLabelModal;
