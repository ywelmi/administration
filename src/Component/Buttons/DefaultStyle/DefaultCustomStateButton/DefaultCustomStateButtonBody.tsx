import React, { Fragment, useState } from 'react'
import { Btn, ToolTip } from '../../../../AbstractElements';
import { CommonCustomStateButtonsProp } from '../../../../Types/Buttons/ButtonsTypes';
import { Href } from '../../../../utils/Constant';

const DefaultCustomStateButtonBody:React.FC<CommonCustomStateButtonsProp> = ({ data }) => {
    const [buttonATooltip, setButtAtooltip] = useState(false);
    const buttonAToggle = () => setButtAtooltip(!buttonATooltip);
  
    return (
      <Fragment>
        <Btn as={data.as} tag={data.tag} href={Href} color={data.color} value={data.value} id={`Tooltip-${data.id}`} type={data.type}>
          {data.text}
        </Btn>
        <ToolTip target={`Tooltip-${data.id}`} isOpen={buttonATooltip} toggle={buttonAToggle}>
          {data.toolText}
        </ToolTip>
      </Fragment>
    );
}

export default DefaultCustomStateButtonBody