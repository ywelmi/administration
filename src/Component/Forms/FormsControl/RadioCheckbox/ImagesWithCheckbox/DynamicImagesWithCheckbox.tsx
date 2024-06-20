import { Col, Input, Label } from 'reactstrap'
import { H6, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { imageWithCheckboxDataList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const DynamicImagesWithCheckbox = () => {
  return (
    <>
      {imageWithCheckboxDataList.map(({ src, label, id, defaultChecked, disabled, alt }, index) => (
        <Col xxl="3" sm="6" key={index}>
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <H6 className="sub-title">{label}</H6>
            <div className="img-checkbox">
              <Input className="main-img-cover form-check-input" id={id} type="checkbox" name="radio6" defaultChecked={defaultChecked} disabled={disabled} />
              <Label for={id} className="form-check-label mb-0">
                <Image src={dynamicImage(`switch/${src}.jpg`)} alt={alt} />
              </Label>
            </div>
          </div>
        </Col>
      ))}
    </>
  )
}

export default DynamicImagesWithCheckbox