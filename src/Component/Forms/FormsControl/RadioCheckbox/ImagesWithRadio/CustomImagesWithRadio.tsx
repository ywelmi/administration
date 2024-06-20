import { Col, Input, Label } from 'reactstrap'
import { H6, Image } from '../../../../../AbstractElements'
import { Custom } from '../../../../../utils/Constant'
import { dynamicImage } from '../../../../../Service'

const CustomImagesWithRadio = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{Custom}</H6>
        <div className="img-checkbox">
          <Input className="main-img-cover" id="img-radio-1" type="radio" name="radio6"/>
          <Label for='img-radio-1' className="form-check-label mb-0">
            <Image src={dynamicImage(`switch/5.jpg`)} alt="coffee-beans" />
          </Label>
        </div>
      </div>
    </Col>
  )
}

export default CustomImagesWithRadio