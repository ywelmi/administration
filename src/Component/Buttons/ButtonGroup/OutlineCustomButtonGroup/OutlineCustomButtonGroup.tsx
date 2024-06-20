import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { Left, Middle, OutlineCustomButtonGroupHeading, Right } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import { buttonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const OutlineCustomButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OutlineCustomButtonGroupHeading} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-pill">
                <Btn outline color="primary">{Left}</Btn>
                <Btn color="primary">{Middle}</Btn>
                <Btn outline color="primary">{Right}</Btn>
              </ButtonGroup>
            </Col>
            {buttonGroupData.map((item, index) => (
              <Col xl="4" md="6" sm="12" key={index}>
                <ButtonGroup className="btn-group-pill">
                  <Btn outline color={item}>{Left}</Btn>
                  <Btn color={item}>{Middle}</Btn>
                  <Btn outline color={item}>{Right}</Btn>
                </ButtonGroup>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineCustomButtonGroup