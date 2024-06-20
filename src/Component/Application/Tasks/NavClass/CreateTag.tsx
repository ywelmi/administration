import { Col, Form, FormGroup, Label, Modal, ModalBody, Row } from 'reactstrap'
import { Btn, H4 } from '../../../../AbstractElements'
import { Cancel, CreateTagHeading, Save, TagColor, TagName } from '../../../../utils/Constant'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { CreatePropsTypes } from '../../../../Types/Application/Tasks/Tasks'

const CreateTag = ({ tagCallback, tagModal }: CreatePropsTypes) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const tagToggle = () => {
    tagCallback(false);
  };
  const AddTag = () => { 
    toast.success("Your Form Submitted")
  };
  return (
    <Modal className="modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
      <div className='modal-header'>
        <H4 className='modal-title'>{CreateTagHeading}</H4>
        <Btn color='transparent' onClick={tagToggle} ></Btn>
      </div>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTag)}>
          <Row>
            <Col md="12" className='mt-0'>
              <FormGroup>
                <Label>{TagName}</Label>
                <input className="form-control" type="text" {...register('name', { required: true })} />
              </FormGroup>
            </Col>
            <Col md="12" className='mt-0'>
              <FormGroup>
                <Label>{TagColor}</Label>
                <input className="form-color d-block" type="color" {...register('color', { required: true })} defaultValue="#006666" />
              </FormGroup>
            </Col>
          </Row>
          <Btn color='secondary'>{Save}</Btn>
          <Btn color='primary' onClick={tagToggle}>{Cancel}</Btn>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default CreateTag