import { Fragment, useState } from 'react'
import { Btn } from '../../../../AbstractElements'
import { CheckCircle } from 'react-feather'
import { AddNewTask, Cancel, Collection, Description, NewTask, Save, TaskTitle } from '../../../../utils/Constant'
import { Col, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks'
import { SubmitHandler, useForm } from 'react-hook-form'
import { setAllTasks } from '../../../../ReduxToolkit/Reducer/TasksSlice'
import { FormDataTypes } from '../../../../Types/Application/Tasks/Tasks'

const NewTaskClass = () => {
    const {allTasks} = useAppSelector((state)=>state.tasks)
    const dispatch = useAppDispatch()
    const { register, handleSubmit,reset, formState: { errors } } = useForm<FormDataTypes>();
  
    const [addModal, setAddModal] = useState(false);
    const addToggle = () => {
      setAddModal(!addModal);
      reset({
        description:"",
        title:""
      })
    };
  
    const addTask:SubmitHandler<FormDataTypes>= (data) => {
      if (data.description !== "" && data.title !== "") {
        const taskTemp = {
          id:allTasks.length + 1,
          title: data.title,
          collection: "General",
          description: data.description,
        };
        dispatch(setAllTasks([...allTasks,taskTemp]))
        setAddModal(false);
        reset({
          description:"",
          title:""
        })
      }
    };
  return (
    <Fragment>
      <Btn block color='primary' className='btn-mail w-100' onClick={addToggle}>
        <CheckCircle className="me-2" /> {NewTask}
      </Btn>
      <Modal isOpen={addModal} toggle={addToggle} size="lg">
        <ModalHeader onClick={addToggle}>{AddNewTask}</ModalHeader>
        <ModalBody>
          <form className="form-bookmark needs-validation" onSubmit={handleSubmit(addTask)}>
            <Row>
              <Col md="12">
                <FormGroup className="create-group">
                  <Label>{TaskTitle}</Label>
                  <input className="form-control" type="text" {...register('title', { required: true })} />
                  <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup className="create-group">
                  <Label>{Collection}</Label>
                  <Input className="js-example-disabled-results" name="collection" type="select" >
                    <option value="general">{'General'}</option>
                    <option value="fs">{'Fs'}</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup className="create-group">
                  <Label>{Description}</Label>
                  <input className="form-control" type="textarea" {...register('description', { required: true })} />
                  <span style={{ color: 'red' }}>{errors.description && 'Description is required'}</span>
                </FormGroup>
              </Col>
            </Row>
            <Btn color='secondary' className='me-1' >{Save}</Btn>
            <Btn color='primary' onClick={addToggle} >{Cancel}</Btn>
          </form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default NewTaskClass