import { Card, CardBody, Col } from 'reactstrap'
import { fullScreenModalData } from '../../../../Data/Ui-Kits/Modal/Modal'
import { FullScreenModal } from '../../../../utils/Constant'
import FullModal from './FullModal/FullModal'
import FullScreenBelowSm from './FullScreenBelowSm/FullScreenBelowSm'
import FullScreenBelowMd from './FullScreenBelowMd/FullScreenBelowMd'
import FullScreenBelowLg from './FullScreenBelowLg/FullScreenBelowLg'
import FullScreenBelowXl from './FullScreenBelowXl/FullScreenBelowXl'
import FullScreenBelowXxl from './FullScreenBelowXxl/FullScreenBelowXxl'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const FullScreenModals = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={FullScreenModal} span={fullScreenModalData} />
        <CardBody className="badge-spacing">
          <FullModal />
          <FullScreenBelowSm />
          <FullScreenBelowMd />
          <FullScreenBelowLg />
          <FullScreenBelowXl />
          <FullScreenBelowXxl />
        </CardBody>
      </Card>
    </Col>
  )
}

export default FullScreenModals