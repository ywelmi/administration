import { useEffect, useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { DefaultToasts } from '../../../../utils/Constant';
import { Btn, Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { defaultToastData } from '../../../../Data/BonusUi/Toast/Toast';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const DefaultToast = () => {
    const [open, setOpen] = useState(true);
    useEffect (()=>{
      setTimeout(()=>{
        setOpen(false)
      },10000)
    },[])
    return (
      <Col md="6">
        <Card className="height-equal">
          <CardHeaderCommon title={DefaultToasts} span={defaultToastData} />
          <CardBody className="toast-rtl">
            <Toast className="default-show-toast" isOpen={open}>
              <ToastHeader className="toast-img">
                <Image className="rounded me-2" src={dynamicImage(`dashboard-3/profile.png`)} alt="profile" />
                <strong className="me-auto">Mofi theme</strong>
                <small className="d-sm-block d-none">10 min ago</small>
                <Btn close className="p-0" onClick={() => setOpen(false)}></Btn>
              </ToastHeader>
              <ToastBody className="toast-dark">
                <strong className="txt-success">Well done!</strong> You successfully read this important message.
              </ToastBody>
            </Toast>
          </CardBody>
        </Card>
      </Col>
    );
}

export default DefaultToast