import { useState } from 'react'
import { Btn, H5, P, ToolTip } from '../../../../AbstractElements';
import { ButtonSmall, Href, InlineTooltipContent, TooltipSmall } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';

const InlineTooltip = () => {
  const [basicTooltip, setBasicTooltip] = useState<boolean>(false);
  const toggle = () => setBasicTooltip(!basicTooltip);
  return (
    <div>
      <H5 className="mb-1 py-4 pb-0">{InlineTooltipContent}</H5>
      <P>
        Here, is some content about tooltips that you can set the
        <Link id="Tooltip-2" className="txt-primary fw-bold ms-1 me-1" to={Href}>{TooltipSmall}</Link>
        inside the content with help of tooltip and also you can add
        <Btn id="Tooltip-2" color="success" className="text-white border-0 px-3 py-1 me-1 ms-1 mb-0">{ButtonSmall}</Btn>.  Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element
      </P>
      <ToolTip target="Tooltip-2" placement="top" isOpen={basicTooltip} toggle={toggle}>tooltip</ToolTip>
      <ToolTip target="Tooltip-2" placement="top" isOpen={basicTooltip} toggle={toggle}>button</ToolTip>
    </div>
  )
}

export default InlineTooltip