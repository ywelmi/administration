import { Card, Col, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { Badges } from '../../../../../AbstractElements'
import { withoutBorderDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'

const WithoutBordersStyleForm = () => {
  return (
    <Form className="mega-inline plain-style">
      <Row>
        {withoutBorderDataList.map(({ id, color, badgeTitle, digits, plansText, check }) => (
          <Col sm="6" key={id}>
            <Card>
              <Media className="p-20">
                <FormGroup className={`checkbox checkbox-${color} m-0`} check>
                  <Input id={`checkbox${id}`} type="checkbox" defaultChecked={check} />
                  <Label for={`checkbox${id}`} check>
                    <Media body className="megaoption-space">
                      <span className="mt-0 mega-title-badge">{badgeTitle}
                        <Badges color={color} className="pull-right digits">{digits}</Badges>
                      </span>
                      <span> {plansText}</span>
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

export default WithoutBordersStyleForm