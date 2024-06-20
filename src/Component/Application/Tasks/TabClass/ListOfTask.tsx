import { Card, CardHeader } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { CreatedByMeHeading, Href, Print } from '../../../../utils/Constant'
import { Printer } from 'react-feather'
import { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import CreatedByMe from './CreatedByMe'

const ListOfTask = () => {
  const componentRef = useRef();
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <H4 className="mb-0 f-w-600">{CreatedByMeHeading}</H4>
        <ReactToPrint
          trigger={() => (
            <Link to={Href}>
              <Printer className="me-2" />{Print}
            </Link>
          )}
          content={() => componentRef.current || null}
        />
      </CardHeader>
      <CreatedByMe />
    </Card>
  )
}

export default ListOfTask