import { Card, CardBody, Col, Form } from 'reactstrap'
import { basicTypeHeadData, stateOfUsa } from '../../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead'
import { BasicTypeaheadHeading } from '../../../../../utils/Constant'
import { Typeahead } from 'react-bootstrap-typeahead'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BasicTypeAhead = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={BasicTypeaheadHeading} span={basicTypeHeadData} />
        <CardBody>
          <div>
            <Form className="theme-form">
              <div>
                <Typeahead options={stateOfUsa} placeholder="States of USA" id="Basic TypeAhead"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicTypeAhead