import { Card, CardBody, Col } from 'reactstrap'
import { NestingButton } from '../../../../utils/Constant'
import { nestingData } from '../../../../Data/Buttons/ButtonGroup'
import StaticNesting from './StaticNesting'
import DynamicNesting from './DynamicNesting'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const Nesting = () => {
  return (
    <>
      <Col lg="6">
        <Card className="height-equal">
          <CommonCardHeader title={NestingButton} span={nestingData} />
          <CardBody className="btn-group-wrapper">
            <StaticNesting />
            <DynamicNesting />
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default Nesting