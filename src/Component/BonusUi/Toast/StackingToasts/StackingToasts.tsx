import { useEffect, useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { StackingToast } from '../../../../utils/Constant';
import { Bell } from 'react-feather';
import { stackingToastData, stackingToastDataList } from '../../../../Data/BonusUi/Toast/Toast';
import CommonToast from '../Common/CommonToast';
import { Btn } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const StackingToasts = () => {
    const [open, setOpen] = useState<boolean>(true);
    useEffect (()=>{
      setTimeout(()=>{
        setOpen(false)
      },2000)
    },[])
    return (
      <Col md="6">
        <Card>
          <CardHeaderCommon title={StackingToast} span={stackingToastData} />
          <CardBody className="toast-rtl">
            <div className="toast-container position-static">
              <Toast isOpen={open}>
                <ToastHeader>
                  <Bell className="toast-icons toast-primary" />
                  <strong className="me-auto">Riho theme</strong>
                  <small className="txt-danger">just now</small>
                  <Btn close className="p-0" onClick={() => setOpen(false)}></Btn>
                </ToastHeader>
                <ToastBody className="toast-dark">Hello, I'm a web-designer.</ToastBody>
              </Toast>
              {stackingToastDataList.map((data, index) => (
                <CommonToast item={data} key={index} />
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    );
}

export default StackingToasts