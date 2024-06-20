import { Card, CardBody, Col, Form } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { bloodHoundData, stateOfUsa } from '../../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead'
import { BloodHoundHeading } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BloodHound = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={BloodHoundHeading} span={bloodHoundData} />
        <CardBody>
          <div>
            <Form className="theme-form">
              <div>
                <Typeahead options={stateOfUsa} placeholder="States of USA" id="BloodHound" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BloodHound