import { useState } from 'react'
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { ImNotSure, RemoveMyAccount, UniqueToasts, YourAccountWillBePermanentlyDeleted } from '../../../../utils/Constant';
import { Btn, H6, Image, P } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { uniqueToastData } from '../../../../Data/BonusUi/Toast/Toast';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const UniqueToast = () => {
    const [open, setOpen] = useState<boolean>(true);
  
    return (
      <Col md="6">
        <Card className="height-equal">
          <CardHeaderCommon title={UniqueToasts} span={uniqueToastData} />
          <CardBody className="toast-rtl">
            <Toast fade isOpen={open}>
              <ToastHeader className="toast-img">
                <Image className="rounded me-2" src={dynamicImage(`dashboard-3/profile.png`)} alt="profile" />
                <strong className="me-auto">Riho theme</strong>
                <Btn close className="p-0" onClick={() => setOpen(false)}></Btn>
              </ToastHeader>
              <ToastBody className="toast-dark">
                <H6 className="mb-2">{YourAccountWillBePermanentlyDeleted}</H6>
                <P className="mb-0">Do you intend to continue?</P>
                <div className="mt-2 pt-2 border-top d-flex gap-2">
                  <Btn color="dark" size="sm">{ImNotSure}</Btn>
                  <Btn color="danger" size="sm" onClick={() => setOpen(false)}>{RemoveMyAccount}</Btn>
                </div>
              </ToastBody>
            </Toast>
          </CardBody>
        </Card>
      </Col>
    );
}

export default UniqueToast