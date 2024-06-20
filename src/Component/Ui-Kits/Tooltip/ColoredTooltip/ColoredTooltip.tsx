import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { ColoredTooltips, Primary } from '../../../../utils/Constant';
import { colorTooltipData, colorTooltipList } from '../../../../Data/Ui-Kits/Tooltip/Tooltip';
import CommonTooltip from '../Common/CommonTooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const ColoredTooltip = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={ColoredTooltips} span={colorTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Btn color="primary" className="mb-0 me-0" id="Tooltip-3">{Primary}</Btn>
            <ToolTip target="Tooltip-3" placement="top" isOpen={tooltip} toggle={toggle}>{Primary}</ToolTip>
            {colorTooltipList.map((item, index) => (
              <CommonTooltip key={index} item={item} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>

  )
}

export default ColoredTooltip