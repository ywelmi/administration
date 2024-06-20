import { useState } from 'react'
import { ButtonSmall, Href, PopoverModal, TooltipPopoverModal, TooltipsAndPopovers, TooltipsModal } from '../../../../../utils/Constant';
import CommonModal from '../../Common/CommonModal';
import { Btn, H5, P } from '../../../../../AbstractElements';
import { Link } from 'react-router-dom';
import ToolTip from '../../../../../CommonElements/Tooltip';

const ToolTipAndPopover = () => {
  const [toolAndPopover, setToolAndPopover] = useState(false);
  const tooltipsAndPopoversToggle = () => setToolAndPopover(!toolAndPopover);
  const [tooltipLinkOne, setTooltipLinkOne] = useState(false);
  const toggleLinkOne = () => setTooltipLinkOne(!tooltipLinkOne);

  return (
    <>
      <Btn color="info" onClick={tooltipsAndPopoversToggle}>{TooltipsAndPopovers}</Btn>
      <CommonModal isOpen={toolAndPopover} toggle={tooltipsAndPopoversToggle} title={TooltipPopoverModal}>
        <H5>{PopoverModal}</H5>
        <P className="mt-2">{`This `}
          <Btn color="success" className="popover-test" title="this is amazing content">{ButtonSmall}</Btn>{` triggers a popover on click.`}
        </P>
        <hr />
        <H5>{TooltipsModal}</H5>
        <P className="mt-2">
          <Link className="tooltip-test text-info" to={Href} id="TooltipExample">{` This link `}</Link>
          <ToolTip autohide placement="top" target="TooltipExample" isOpen={tooltipLinkOne} toggle={toggleLinkOne}>Tooltip</ToolTip>and
          <Link className="tooltip-test text-info" to={Href} id="TooltipExample">{` that link `}</Link>
          <ToolTip placement="top" target="TooltipExample" isOpen={tooltipLinkOne} toggle={toggleLinkOne}>Tooltip</ToolTip>have tooltips on hover.
        </P>
      </CommonModal>
    </>
  )
}

export default ToolTipAndPopover