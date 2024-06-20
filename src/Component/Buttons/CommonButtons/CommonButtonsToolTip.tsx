import { useState } from 'react';
import { CommonButtonsToolTips } from '../../../Types/Buttons/ButtonsTypes'
import { ToolTip } from '../../../AbstractElements';

const CommonButtonsToolTip:React.FC<CommonButtonsToolTips> = ({ id, toolTipText }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <ToolTip isOpen={tooltipOpen} target={id} toggle={toggle}>{toolTipText}</ToolTip>
  )
}

export default CommonButtonsToolTip