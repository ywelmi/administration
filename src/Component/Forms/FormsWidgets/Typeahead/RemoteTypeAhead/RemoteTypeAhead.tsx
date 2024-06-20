import { Card, CardBody, Col, Form } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { moviesList, remoteTypeHeadData } from '../../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead'
import { RemotelyAheadHeading } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const RemoteTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={RemotelyAheadHeading} span={remoteTypeHeadData} />
        <CardBody>
          <div>
            <Form className="theme-form">
              <div>
                <Typeahead options={moviesList} placeholder="Choose Option" id="Remote TypeAhead"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RemoteTypeAhead