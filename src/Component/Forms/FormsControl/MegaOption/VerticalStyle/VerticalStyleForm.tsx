import { Card, Col, Form, FormGroup, Input, Label, Media, Row } from 'reactstrap'
import { Fragment } from 'react'
import { Badges, P } from '../../../../../AbstractElements'
import { verticalStyleDataList } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import { VerticalStyleFormProp } from '../../../../../Types/Forms/FormControls/FormsControls'

const VerticalStyleForm = () => {
  return (
    <Form className="mega-vertical">
      <Row>
        {verticalStyleDataList.map(({ megaTitle, child }, index) => (
          <Fragment key={index}>
            <Col sm="12">
              <P className="mega-title m-b-5">{megaTitle}</P>
            </Col>
            {child.map(({ id, color, cardClass, name, badgeTitle, mediaBodyClass, digits, spanText, check, spanClass, star }: VerticalStyleFormProp) => (
              <Col sm="6" key={id}>
                <Card className={cardClass}>
                  <Media className="p-20">
                    <FormGroup className={`radio radio-${color} m-0 w-100`} check>
                      <Input id={`radios${id}`} type="radio" name={name} value="option1" defaultChecked={check} />
                      <Label for={`radios${id}`} className="mb-0 w-100" check>
                        <Media body className={`${mediaBodyClass}`}>
                          <span className="mt-0 mega-title-badge">
                            {badgeTitle}
                            <Badges color={color} className="pull-right digits">{digits}</Badges>
                          </span>
                          <span className={spanClass}>
                            {star && star.map(({ id, starClass }) => <i key={id} className={`icofont icofont-star ${starClass}`}></i>)}
                            {spanText}
                          </span>
                        </Media>
                      </Label>
                    </FormGroup>
                  </Media>
                </Card>
              </Col>
            ))}
          </Fragment>
        ))}
      </Row>
    </Form>
  )
}

export default VerticalStyleForm