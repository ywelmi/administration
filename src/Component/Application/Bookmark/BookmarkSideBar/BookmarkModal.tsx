import { Col, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { AddBookmark, Cancel, Collection, Description, Group, Save, Title, WebUrl } from '../../../../utils/Constant'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks'
import { AddNewBookMarkInterFace } from '../../../../Types/Application/Bookmark/Bookmark'
import { addNewBookmark, setAddModal, setBookmarkValidation } from '../../../../ReduxToolkit/Reducer/BookmarkTabSlice';

const BookmarkModal = () => {
  const { addModal,bookmarkValidation } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const addToggle = () => dispatch(setAddModal());
  const {register,handleSubmit,formState: { errors },reset,} = useForm<AddNewBookMarkInterFace>();

  const onSubmit:SubmitHandler<AddNewBookMarkInterFace> = (data) => {
    dispatch(addNewBookmark(data));
    dispatch(setBookmarkValidation(false));
    dispatch(setAddModal());
    reset();
  };
  return (
    <Modal fade isOpen={addModal} toggle={addToggle} size="lg" className="modal-bookmark">
      <ModalHeader toggle={addToggle}>{AddBookmark}</ModalHeader>
      <ModalBody>
        <form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md="12" className="mt-0">
              <FormGroup>
                <Label check>{WebUrl}</Label>
                <input className={`form-control ${bookmarkValidation && `${errors.url ? "is-invalid":"is-valid"}`}`} type="text" {...register("url", { required: true })} autoComplete="off" />
              </FormGroup>
            </Col>
            <Col md="12" className="mt-0">
              <FormGroup>
                <Label check>{Title}</Label>
                <input className={`form-control ${bookmarkValidation && `${errors.title ? "is-invalid":"is-valid"}`}`} type="text" {...register("title", { required: true })} autoComplete="off"/>
              </FormGroup>
            </Col>
            <Col md="12" className="mt-0">
              <FormGroup>
                <Label check>{Description}</Label>
                <input className={`form-control ${bookmarkValidation && `${errors.desc ? "is-invalid":"is-valid"}`}`} type="textarea" {...register("desc", { required: true })} autoComplete="off" />
              </FormGroup>
            </Col>
            <Col md="6" className="mt-0">
              <FormGroup>
                <Label check>{Group}</Label>
                <Input type='select' name="group" className="js-example-basic-single">
                  <option>My bookmark</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6" className="mt-0">
              <FormGroup>
                <Label check>{Collection}</Label>
                <Input type='select' name="collection" className="js-example-disabled-results">
                  <option>General</option>
                  <option>Fs</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Btn color="secondary" className="me-1" type="submit" onClick={()=>dispatch(setBookmarkValidation(true))}>{Save}</Btn>
          <Btn color="primary" onClick={addToggle}>{Cancel}</Btn>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default BookmarkModal