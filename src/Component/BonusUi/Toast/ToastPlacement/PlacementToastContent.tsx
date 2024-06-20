import { Toast, ToastBody, ToastHeader } from 'reactstrap'
import { Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { PlacementToastContentProp } from '../../../../Types/BonusUi/BonusUiTypes'

const PlacementToastContent:React.FC<PlacementToastContentProp> = ({ data }) => {
  return (
    <div className="bg-light position-relative bd-example-toasts">
      <div className={`toast-container p-3 position-absolute ${data}`}>
        <Toast fade>
          <ToastHeader className="toast-img">
            <Image className="rounded me-2" src={dynamicImage(`dashboard-3/profile.png`)} alt="profile" />
            <strong className="me-auto">Riho theme</strong>
            <small className="d-sm-block d-none">25 min ago</small>
          </ToastHeader>
          <ToastBody className="toast-dark txt-dark">
            <P className="toast-content"><em className="txt-danger">Attackers</em> on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.</P>
          </ToastBody>
        </Toast>
      </div>
    </div>
  )
}

export default PlacementToastContent