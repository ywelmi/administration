import { Col, Row } from 'reactstrap'
import { CommonProjectInterFace } from '../../../../../Types/Application/ProjectList/ProjectList'
import { Comment, Issues, Resolved } from '../../../../../utils/Constant'

const ProjectDetails = ({ item }: CommonProjectInterFace) => {
  return (
    <Row className='details'>
        <Col xs="6">
            <span>{Issues} </span>
        </Col>
        <Col xs="6" className={item.badge === 'Done' ? 'font-success' : 'font-primary'}>
            {item.issue}
        </Col>
        <Col xs="6">
            <span>{Resolved}</span>
        </Col>
        <Col xs="6" className={item.badge === 'Done' ? 'font-success' : 'font-primary'}>
            {item.resolved}
        </Col>
        <Col xs="6">
            <span>{Comment}</span>
        </Col>
        <Col xs="6" className={item.badge === 'Done' ? 'font-success' : 'font-primary'}>
            {item.comment}
        </Col>
    </Row>
  )
}

export default ProjectDetails