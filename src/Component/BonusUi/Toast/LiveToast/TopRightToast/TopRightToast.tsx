import { useState } from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { TopRightToasts } from '../../../../../utils/Constant';
import { Btn, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';

const TopRightToast = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <Btn color="primary" onClick={toggle}>{TopRightToasts}</Btn>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <ToastHeader className="toast-img">
            <Image className="rounded me-2" src={dynamicImage(`dashboard-3/profile.png`)} alt="profile" />
            <strong className="me-auto">Riho theme</strong>
            <small>5 min ago</small>
            <Btn  close onClick={() => setOpen(false)}></Btn>
          </ToastHeader>
          <ToastBody className="toast-dark">Hello, I'm a web-designer.</ToastBody>
        </Toast>
      </div>
    </>
  )
}

export default TopRightToast