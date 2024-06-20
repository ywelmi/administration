import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { HTMLElementsWithHoverEffect, NotificationsReceived } from '../../../../utils/Constant';
import CommonTooltip from '../Common/CommonTooltip';
import { hoverTooltipData, hoverTooltipList } from '../../../../Data/Ui-Kits/Tooltip/Tooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const ElementsWithHoverEffect = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={HTMLElementsWithHoverEffect} span={hoverTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Btn id="Tooltip-12" className="bg-primary mb-0 me-0">{NotificationsReceived}</Btn>
            <ToolTip isOpen={tooltip} toggle={toggle} placement="top" target="Tooltip-12"><i>Thank </i> <u>you</u></ToolTip>
            {hoverTooltipList.map((data) => (
              <CommonTooltip key={data.id} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ElementsWithHoverEffect