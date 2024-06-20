import { Card, CardBody, Col, Row } from 'reactstrap'
import { RihoCustomModal } from '../../../../utils/Constant'
import { customModalData } from '../../../../Data/Ui-Kits/Modal/Modal'
import ModalOne from './ModalOne/ModalOne'
import ModalTwo from './ModalTwo/ModalTwo'
import ModalThird from './ModalThird/ModalThird'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const RihoCustomModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={RihoCustomModal} span={customModalData} />
        <CardBody>
          <Row className="g-3">
            <ModalOne />
            <ModalTwo />
            <ModalThird />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RihoCustomModals