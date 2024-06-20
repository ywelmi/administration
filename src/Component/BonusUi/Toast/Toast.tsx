import { Container, Row } from 'reactstrap'
import LiveToast from './LiveToast/LiveToast'
import ColorsSchemes from './ColorsSchemes/ColorsSchemes'
import StackingToasts from './StackingToasts/StackingToasts'
import TranslucentToasts from './TranslucentToasts/TranslucentToasts'
import DefaultToast from './DefaultToast/DefaultToast'
import UniqueToast from './UniqueToast/UniqueToast'
import ToastPlacement from './ToastPlacement/ToastPlacement'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BonusUi, Toasts } from '../../../utils/Constant'

const ToastContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Toasts} parent={BonusUi} />
      <Container fluid>
        <Row>
          <LiveToast />
          <ColorsSchemes />
          <StackingToasts />
          <TranslucentToasts />
          <DefaultToast />
          <UniqueToast />
          <ToastPlacement />
        </Row>
      </Container>
    </>
  )
}

export default ToastContainer