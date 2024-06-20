import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { Left, Middle, OutlineEdgeButton, Right } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import CommonGroupButton from '../Common/CommonGroupButton'
import { buttonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const OutlineEdgesButton = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OutlineEdgeButton} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-pill">
                <Btn outline color="primary">{Left}</Btn>
                <Btn outline color="primary">{Middle}</Btn>
                <Btn outline color="primary">{Right}</Btn>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={buttonGroupData}  buttonClass="btn-group-pill" outline={true} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineEdgesButton