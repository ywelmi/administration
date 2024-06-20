import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { VariationRadios } from '../../../../../utils/Constant'
import { H6, Image, SVG } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { variationRadioData, variationRadioDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import { VariationRadioProp } from '../../../../../Types/Forms/FormControls/FormsControls'

const VariationRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={VariationRadios} span={variationRadioData} />
        <CardBody>
          <Row className="g-3">
            {variationRadioDataList.map(({ colClass, title, child }, index) => (
              <Col xl="4" className={colClass ? colClass : ""} key={index}>
                <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                  <H6 className="sub-title">{title}</H6>
                  {child.map(({ id, labelText, image, icon, name, defaultChecked, iconColor }:VariationRadioProp) => (
                    <div className="payment-wrapper" key={id}>
                      <div className="payment-first">
                        <FormGroup className="radio radio-primary" check>
                          <Input id={`ptm-${id}`} type="radio" name={name} value="option1" defaultChecked={defaultChecked} />
                          <Label for={`ptm-${id}`} className="mb-0">{labelText}</Label>
                        </FormGroup>
                      </div>
                      {(image || icon) && (
                        <div className="payment-second">
                          {image && <Image className="img-fluid" src={dynamicImage(`${image}`)} alt="ecommerce" />}
                          {icon && <SVG className={`mega-icons stroke-${iconColor}`} iconId={icon} />}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VariationRadio