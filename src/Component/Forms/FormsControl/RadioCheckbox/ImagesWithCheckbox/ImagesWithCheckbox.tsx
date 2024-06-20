import { Card, CardBody, Col, Row } from 'reactstrap'
import { ImagesWithCheckboxs } from '../../../../../utils/Constant'
import CustomImagesWithCheckbox from './CustomImagesWithCheckbox'
import DynamicImagesWithCheckbox from './DynamicImagesWithCheckbox'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { imageWithCheckboxData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const ImagesWithCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ImagesWithCheckboxs} span={imageWithCheckboxData} />
        <CardBody>
          <div className="main-img-checkbox">
            <Row className="g-3">
              <CustomImagesWithCheckbox />
              <DynamicImagesWithCheckbox />
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ImagesWithCheckbox