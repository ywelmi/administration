import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { FilledTooltips, TooltipPrimary } from '../../../../utils/Constant';
import CommonTooltip from '../Common/CommonTooltip';
import { fillTooltipData, fillTooltipList } from '../../../../Data/Ui-Kits/Tooltip/Tooltip';
import { Btn, ToolTip } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const FilledTooltip = () => {
  const [tooltip, setTooltip] = useState<boolean>(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={FilledTooltips} span={fillTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Btn outline color="primary" id="Tooltip-16" className="mb-0 me-0">{TooltipPrimary}</Btn>
            <ToolTip isOpen={tooltip} toggle={toggle} placement="top" target="Tooltip-16">Tooltip Primary</ToolTip>
            {fillTooltipList.map((data) => (
              <CommonTooltip key={data.id} outline={true} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FilledTooltip