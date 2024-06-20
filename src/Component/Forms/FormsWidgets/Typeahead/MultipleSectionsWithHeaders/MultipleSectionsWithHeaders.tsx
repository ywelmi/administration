import { Card, CardBody, Col, Form } from 'reactstrap'
import { MultipleSectionWithHeader } from '../../../../../utils/Constant'
import { multiWithHeaderData, multipleSectionHeaderData } from '../../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead'
import { Typeahead } from 'react-bootstrap-typeahead'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const MultipleSectionsWithHeaders = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader  title={MultipleSectionWithHeader} span={multipleSectionHeaderData}/>
        <CardBody>
          <div>
            <Form className="theme-form">
              <div>
                <Typeahead options={multiWithHeaderData} multiple clearButton placeholder="NBA and NHL teams" labelKey="name" id="selectTwo" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default MultipleSectionsWithHeaders