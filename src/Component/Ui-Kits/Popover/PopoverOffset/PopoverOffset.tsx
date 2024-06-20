import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { PopoverOffset50, PopoverOffsets, PopoverTitle } from '../../../../utils/Constant';
import { offsetData, offsetList } from '../../../../Data/Ui-Kits/Popover/Popover';
import CommonPopover from '../Common/CommonPopover';
import { Btn, Popovers } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const PopoverOffset = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={PopoverOffsets} span={offsetData} />
        <CardBody className="common-flex popover-wrapper">
          <Btn color="secondary" className="example-popover mb-0 me-0" id="Popover-8">{PopoverOffset50}</Btn>
          <Popovers placement="right-start" isOpen={popover} target="Popover-8" toggle={toggle} title={PopoverTitle}>
            And here's some amazing content. It's very engaging. Right?
          </Popovers>
          {offsetList.map((data, index) => (
            <CommonPopover key={index} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default PopoverOffset