import { ButtonGroup, Card, CardBody, Col } from 'reactstrap'
import { Buttons, VerticalGroupButton } from '../../../../utils/Constant'
import { verticalButtonGroup } from '../../../../Data/Buttons/ButtonGroup'
import { Btn } from '../../../../AbstractElements'
import CommonDropDown from './Common/CommonDropDown'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const Vertical = () => {
  return (
    <Col lg="6">
      <Card className="height-equal">
        <CommonCardHeader title={VerticalGroupButton} span={verticalButtonGroup} />
        <CardBody className="btn-group-wrapper">
          <ButtonGroup vertical>
            <Btn color="primary">{Buttons}</Btn>
            <Btn color="secondary">{Buttons}</Btn>
           <CommonDropDown color="success" />
            <Btn color="info">{Buttons}</Btn>
            <Btn color="warning">{Buttons}</Btn>
            <CommonDropDown color="danger" />
            <CommonDropDown color="light" dark />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Vertical