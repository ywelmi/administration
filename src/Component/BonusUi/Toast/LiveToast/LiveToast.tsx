import { Card, CardBody, Col } from 'reactstrap'
import { LiveToasts } from '../../../../utils/Constant'
import TopRightToast from './TopRightToast/TopRightToast'
import BottomRightToast from './BottomRightToast/BottomRightToast'
import TopLeftToast from './TopLeftToast/TopLeftToast'
import BottomLeftToast from './BottomLeftToast/BottomLeftToast'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { liveToastData } from '../../../../Data/BonusUi/Toast/Toast'

const LiveToast = () => {
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={LiveToasts} span={liveToastData} />
        <CardBody className="position-relative common-flex">
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />
        </CardBody>
      </Card>
    </Col>
  )
}

export default LiveToast