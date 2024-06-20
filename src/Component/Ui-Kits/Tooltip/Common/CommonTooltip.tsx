import React, { useState } from 'react'
import { CommonTooltipProp } from '../../../../Types/Ui-Kits/UiKitsTypes';
import { Btn, ToolTip } from '../../../../AbstractElements';

const CommonTooltip:React.FC<CommonTooltipProp> = ({ item,outline }) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  return (
    <>
      <Btn outline={outline} color={item.btnColor? item.btnColor:""} id={"Tooltip-" + item.id} className="mb-0 me-0">{item.btnText}</Btn>
      <ToolTip placement={item.placement} isOpen={tooltip} target={"Tooltip-" + item.id} toggle={toggle}>{item.tooltip}</ToolTip>
    </>
  )
}

export default CommonTooltip