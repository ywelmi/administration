import { Col, Input, Label } from 'reactstrap'
import { H6, Image } from '../../../../../AbstractElements'
import { Custom } from '../../../../../utils/Constant'
import { dynamicImage } from '../../../../../Service'

const CustomImagesWithCheckbox = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{Custom}</H6>
        <div className="img-checkbox">
          <Input className="main-img-cover form-check-input" id="img-check-1" type="checkbox" />
          <Label for='img-check-1' className="form-check-label mb-0">
            <Image src={dynamicImage(`switch/1.jpg`)} alt="coffee-beans" />
          </Label>
        </div>
      </div>
    </Col>
  )
}

export default CustomImagesWithCheckbox