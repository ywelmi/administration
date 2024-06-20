import { useState } from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { TopLeftToasts } from '../../../../../utils/Constant';
import { Btn, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';

const TopLeftToast = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);}
  return (
    <>
      <Btn color="warning" onClick={toggle}>{TopLeftToasts}</Btn>
      <div className="toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <ToastHeader className="toast-img">
            <Image className="rounded me-2" src={dynamicImage(`dashboard-3/profile.png`)} alt="profile" />
            <strong className="me-auto">Riho theme</strong>
            <small className="d-sm-block d-none">10 min ago</small>
            <Btn close onClick={() => setOpen(false)}></Btn>
          </ToastHeader>
          <ToastBody className="toast-dark">
            <strong className="txt-success">Well done!</strong> You successfully read this important message.
          </ToastBody>
        </Toast>
      </div>
    </>
  )
}

export default TopLeftToast