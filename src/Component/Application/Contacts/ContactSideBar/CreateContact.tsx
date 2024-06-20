import { Users } from 'react-feather';
import { Btn } from '../../../../AbstractElements';
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { SubmitHandler, useForm } from 'react-hook-form'
import { AddContacts, Cancel, EmailAddress, FirstName, LastName, Mobile, Name, NewContacts, Phone, Save } from '../../../../utils/Constant';
import { Col, Form, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { createUser, setContactValidation, setModal } from '../../../../ReduxToolkit/Reducer/ContactSlice';
import { ContactUsersType } from '../../../../Types/Application/Contacts/Contacts';

const CreateContact = () => {
  const { modal,contactValidation } = useAppSelector((state) => state.contact);
  const {register,formState: { errors },handleSubmit, reset} = useForm<ContactUsersType>();
  const dispatch = useAppDispatch();
  const toggle = () => dispatch(setModal());

  const AddContact: SubmitHandler<ContactUsersType> = (data) => {
    if (data !== undefined) {
      dispatch(createUser(data));
      dispatch(setModal());
      reset();
    }
  };
  return (
    <>
      <Btn block className="w-100 btn-mail" color="primary" onClick={toggle}>
        <Users className="me-2" />{NewContacts}
      </Btn>
      <Modal className="modal-bookmark" isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{AddContacts}</ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
            <Row className="g-3">
              <Col md="12">
                <Row>
                  <Col sm="6">
                    <Label check>{Name}</Label>
                    <input className={`form-control ${contactValidation && `${errors.name ? "is-invalid" : "is-valid"}`}`} type="text" {...register("name", { required: true })} placeholder={FirstName} />
                  </Col>
                  <Col sm="6">
                    <input className={`form-control ${contactValidation && `${errors.sureName ? "is-invalid" : "is-valid"}`}`} type="text" {...register("sureName", { required: true })} placeholder={LastName} />
                  </Col>
                </Row> 
              </Col>
              <Col md="12">
                <Label check>{EmailAddress}</Label>
                <input className={`form-control ${contactValidation && `${errors.email ? "is-invalid" : "is-valid"}`}`} type="text" {...register("email", { required: true })} />
              </Col>
              <Col md="12"> 
                <Label check>{Phone}</Label>
                <Row>
                  <Col sm="6">  
                    <input className={`form-control ${contactValidation && `${errors.mobile ? "is-invalid" : "is-valid"}`}`} type="number" {...register("mobile", { required: true })} />
                  </Col>
                  <Col sm="6">
                    <Label check>{Mobile}</Label>
                    <Input type="select">
                      <option>{'Mobile'}</option>
                      <option>{'Work'}</option>
                      <option>{'Other'}</option>
                    </Input>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Btn color="secondary" className='me-3' type="submit" onClick={() => dispatch(setContactValidation(true))}>{Save}</Btn>
            <Btn color="primary" onClick={toggle}>{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default CreateContact