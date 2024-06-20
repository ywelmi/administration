import { Card, CardBody, Col } from 'reactstrap'
import { ProgressWithNumberSteps } from '../../../../utils/Constant'
import { progressNumberData } from '../../../../Data/Ui-Kits/Progress/Progress'
import DynamicProgressWithNumberSteps from './DynamicProgressWithNumberSteps'
import { Btn, Progressbar } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const ProgressWithNumberStepsCart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={ProgressWithNumberSteps} span={progressNumberData} />
        <CardBody className="mb-1">
          <div className="position-relative m-3 progress-number">
            <Progressbar value="50" className="progress-wrapper" />
            <Btn size="sm" color="primary" className="position-absolute top-0 start-0 p-0 translate-middle rounded-circle txt-light">1</Btn>
            <DynamicProgressWithNumberSteps />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ProgressWithNumberStepsCart