import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { Cancel, CreateTag, Save, TagColor, TagName } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks'
import { setTagModal } from '../../../../ReduxToolkit/Reducer/BookmarkTabSlice'

const ModalTag = () => {
    const { tagModal } = useAppSelector((state) => state.bookmarkTab);
    const dispatch = useAppDispatch();
    const tagToggle = () => dispatch(setTagModal());
  return (
    <Modal fade className="modal-bookmark" size="lg" isOpen={tagModal} toggle={tagToggle}>
      <ModalHeader toggle={tagToggle}>{CreateTag}</ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation">
          <Row>
            <Col md="12" className="mt-0">
              <FormGroup>
                <Label check>{TagName}</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="12" className="mt-0">
              <FormGroup>
                <Label check>{TagColor}</Label>
                <Input type="color" className="d-block form-color" defaultValue="#006666" />
              </FormGroup>
            </Col>
          </Row>
          <Btn color="secondary" className="me-1" onClick={tagToggle}>{Save}</Btn>
          <Btn color="primary" onClick={tagToggle}>{Cancel}</Btn>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default ModalTag