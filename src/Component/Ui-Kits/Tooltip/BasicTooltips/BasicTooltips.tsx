import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { BasicTooltip, MagicPleaseHoverMe } from '../../../../utils/Constant';
import { basicTooltipData } from '../../../../Data/Ui-Kits/Tooltip/Tooltip';
import InlineTooltip from './InlineTooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const BasicTooltips = () => {
  const [basicTooltip, setBasicTooltip] = useState<boolean>(false);
  const toggle = () => setBasicTooltip(!basicTooltip);

  return (  
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={BasicTooltip} span={basicTooltipData} />
        <CardBody>
          <Btn color="primary" className="example-popover mb-0 me-0" id="Tooltip-1">{MagicPleaseHoverMe}</Btn>
          <ToolTip target="Tooltip-1" placement="top" isOpen={basicTooltip} toggle={toggle}>
            Surprise!!! Thank you for hovering...
          </ToolTip>
          <InlineTooltip />
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicTooltips