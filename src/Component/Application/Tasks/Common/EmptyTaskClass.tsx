import { Card, CardBody, CardHeader } from 'reactstrap'
import { H6 } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href, NoTaskDueToday, Print } from '../../../../utils/Constant'
import { Printer } from 'react-feather'
import { EmptyPropsType } from '../../../../Types/Application/Tasks/Tasks'

const EmptyTaskClass = ({ title }: EmptyPropsType) => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <H6 className="mb-0">{title}</H6>
        <Link to={Href}>
          <Printer className="me-2" />{Print}
        </Link>
      </CardHeader>
      <CardBody>
        <div className="details-bookmark text-center">
          <div className="no-favourite">
            <span>{NoTaskDueToday}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default EmptyTaskClass