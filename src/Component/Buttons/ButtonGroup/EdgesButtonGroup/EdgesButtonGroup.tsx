import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { EdgesButtonGroups, Left, Middle, Right } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import CommonGroupButton from '../Common/CommonGroupButton'
import { buttonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const EdgesButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={EdgesButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-pill">
                <Btn color="primary">{Left}</Btn>
                <Btn color="primary">{Middle}</Btn>
                <Btn color="primary">{Right}</Btn>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={buttonGroupData}  buttonClass="btn-group-pill" />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default EdgesButtonGroup