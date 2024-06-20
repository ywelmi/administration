import { Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { Cancel, Collection, Description, Group, MyBookmark, Save, Title, WebUrl } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import { EditBookmarkModalFormType } from '../../../../Types/Application/Bookmark/Bookmark'

const EditBookmarkModalForm = ({ register, errors, editToggle, handleSubmit, updateBookMarkData }: EditBookmarkModalFormType) => {
    return (
      <form className="form-bookmark needs-validation" onSubmit={handleSubmit(updateBookMarkData)}>
        <Row className="g-2">
          <Col md="12" className="mt-0">
            <FormGroup>
              <Label check>{WebUrl}</Label>
              <input className="form-control" type="text" {...register("url", {required: true,})}/>
              {errors.url && <span className="text-danger">Url is required</span>}
            </FormGroup>
          </Col>
          <Col md="12" className="mt-0">
            <FormGroup>
              <Label check>{Title}</Label>
              <input className="form-control" type="text" {...register("title", {required: true,})}/>
              {errors.title && <span className="text-danger">Title is required</span>}
            </FormGroup>
          </Col>
          <Col md="12" className="mt-0">
            <FormGroup>
              <Label check>{Description}</Label>
              <input className="form-control" type="textarea" {...register("desc", {required: true,})}/>
              {errors.desc && <span className="text-danger">Description is required</span>}
            </FormGroup>
          </Col>
          <Col md="6" className="mt-0">
            <FormGroup>
              <Label check>{Group}</Label>
              <Input type='select' name="group">
                <option>{MyBookmark}</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="6" className="mt-0">
            <FormGroup>
              <Label check>{Collection}</Label>
              <Input type='select' name="collection">
                <option>General</option>
                <option>Fs</option> 
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Btn color="primary" type="submit" className="me-1">{Save}</Btn>
        <Btn color="secondary" onClick={editToggle}>{Cancel}</Btn>
      </form>
    )
}

export default EditBookmarkModalForm