import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { BasicPopovers, HurryUps } from '../../../../utils/Constant';
import { basicPopoverData, basicPopoverList } from '../../../../Data/Ui-Kits/Popover/Popover';
import CommonPopover from '../Common/CommonPopover';
import { Btn, Popovers } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const BasicPopover = () => {
  const [basicPopover, setBasicPopover] = useState(false);
  const basicToggle = () => setBasicPopover(!basicPopover);
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={BasicPopovers} span={basicPopoverData} />
        <CardBody className="common-flex popover-wrapper">
          <Btn id="Popover-1" color="primary" className="example-popover mb-0 me-0" onClick={basicToggle}>{HurryUps}</Btn>
          <Popovers isOpen={basicPopover} placement="left" target="Popover-1" trigger="click" title={BasicPopovers} >
            If the package restore doesn't help, you can look at the Output window in the Visual Studio.
          </Popovers>
          {basicPopoverList.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicPopover