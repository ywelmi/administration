import { PlusCircle } from 'react-feather'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { CreateNewProjects } from '../../../../utils/Constant'

const CreateNewProject = () => {
  return (
    <Col md="6">
      <div className="text-end">
        <Link className="btn btn-primary text-white" to={`${process.env.PUBLIC_URL}/project/createnew`} >
          <PlusCircle />
          {CreateNewProjects}
        </Link>
      </div>
    </Col>
  )
}

export default CreateNewProject