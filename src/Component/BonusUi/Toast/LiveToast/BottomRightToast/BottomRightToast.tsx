import { useState } from 'react'
import { Toast, ToastBody } from 'reactstrap';
import { BottomRightToasts } from '../../../../../utils/Constant';
import { Btn } from '../../../../../AbstractElements';

const BottomRightToast = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <Btn color="secondary" onClick={toggle}>{BottomRightToasts}</Btn>
      <div className="toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <div className="d-flex justify-content-between alert-secondary align-items-center">
            <ToastBody>Your time over after 5 minute.</ToastBody>
            <Btn close className="btn-close-white me-2 m-auto" onClick={()=>setOpen(false)}></Btn>
          </div>
        </Toast>
      </div>
    </>
  )
}

export default BottomRightToast