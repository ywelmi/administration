import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { DefaultInputMask, FormControls, InputMasks } from '../../../../utils/Constant'
import { H6 } from '../../../../AbstractElements'
import DateFormat from './DateFormat/DateFormat'
import TimeFormat from './TimeFormat/TimeFormat'
import DefaultInputMaskForm from './DefaultInputMaskForm/DefaultInputMaskForm'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { inputMaskData } from '../../../../Data/Forms/FormsControl/InputMask/InputMask'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const InputMaskContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={InputMasks} parent={FormControls} />
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card>
              <CommonCardHeader title={InputMasks} span={inputMaskData} />
              <CardBody>
                <Row className="g-3">
                  <DateFormat />
                  <TimeFormat />
                  <Col xs="12">
                    <div className="card-wrapper border rounded-3 light-card checkbox-checked">
                      <H6 className="pb-3 f-w-500">{DefaultInputMask}</H6>
                      <DefaultInputMaskForm />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default InputMaskContainer