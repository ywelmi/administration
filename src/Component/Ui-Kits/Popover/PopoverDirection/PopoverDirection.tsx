import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { PopoverDirections, PopoverOnTop } from '../../../../utils/Constant';
import { directionData, directionList } from '../../../../Data/Ui-Kits/Popover/Popover';
import CommonPopover from '../Common/CommonPopover';
import { Btn, Popovers } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const PopoverDirection = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={PopoverDirections} span={directionData} />
        <CardBody className="common-flex popover-wrapper">
          <Btn color="warning" className="example-popover mb-0 me-0" id="Popover-4">{PopoverOnTop}</Btn>
          <Popovers isOpen={popover} toggle={toggle} placement="top" target="Popover-4" trigger="click" title={PopoverOnTop}>
            Popovers need the tooltip plugin considering that a dependency.
          </Popovers>
          {directionList.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default PopoverDirection