import { Container, Row } from 'reactstrap'
import BasicModalCart from './BasicModalCart/BasicModalCart'
import SizeModalCart from './SizeModalCart/SizeModalCart'
import FullScreenModals from './FullScreenModals/FullScreenModals'
import CenteredModal from './CenteredModal/CenteredModal'
import ToggleBetweenModals from './ToggleBetweenModals/ToggleBetweenModals'
import StaticBackdropModal from './StaticBackdropModal/StaticBackdropModal'
import RihoCustomModals from './RihoCustomModals/RihoCustomModals'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Modal, UiKits } from '../../../utils/Constant'

const ModalContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Modal} parent={UiKits} />
      <Container fluid>
        <Row>
          <BasicModalCart />
          <SizeModalCart />
          <FullScreenModals />
          <CenteredModal />
          <ToggleBetweenModals />
          <StaticBackdropModal />
          <RihoCustomModals />
        </Row>
      </Container>
    </>
  )
}

export default ModalContainer