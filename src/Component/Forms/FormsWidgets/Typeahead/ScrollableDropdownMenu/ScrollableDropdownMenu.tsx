import { Card, CardBody, Col, Form } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { countryDataList, scrollableDropdownData } from '../../../../../Data/Forms/FormsWidgets/Typeahead/Typeahead'
import { ScrollableDropDownMenuHeading } from '../../../../../utils/Constant'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const ScrollableDropdownMenu = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ScrollableDropDownMenuHeading} span={scrollableDropdownData} />
        <CardBody>
          <div>
            <Form className="theme-form">
              <div>
                <Typeahead options={countryDataList} placeholder="Countries" id="Scrollable DropdownMenu"/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ScrollableDropdownMenu