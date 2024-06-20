import { Card, Col, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { Badges } from '../../../../../AbstractElements'
import { inlineStyeDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const InlineStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {inlineStyeDataList.map(({id,color,badgeTitle,digits,shippingText: shippingText},index) => (
          <Col sm="6" key={index}>
            <Card>
              <Media className="p-20">
                <FormGroup className={`radio radio-${color} m-0 w-100`} check>
                  <Input id={`radio=${id}`} type="radio" name="radio1" value="option1" />
                  <Label for={`radio=${id}`} className="mb-0 w-100" check>
                    <Media body>
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

export default InlineStyleForm