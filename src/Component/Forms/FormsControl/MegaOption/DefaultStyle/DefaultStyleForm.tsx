import { Card, Col, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { Badges } from '../../../../../AbstractElements'
import { defaultFormData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const DefaultStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {defaultFormData.map(({ id, color, badgeTitle, digits, shippingText: shippingText },index) => (
          <Col sm="6" key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup className={`radio radio-${color} m-0"`} check>
                  <Input id={`radio${id}`} type="radio" name="radio1" value="option1" />
                  <Label for={`radio${id}`} check>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {badgeTitle}
                        <Badges color={color} className="pull-right digits">{digits}</Badges>
                      </span>
                      <span>{shippingText}</span>
                    </Media>
                  </Label>
                </FormGroup>
              </Media>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>
  )
}

export default DefaultStyleForm