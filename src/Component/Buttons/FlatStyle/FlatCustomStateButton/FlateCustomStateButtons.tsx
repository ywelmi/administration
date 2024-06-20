import React, { Fragment, useState } from 'react'
import { CommonCustomStateButtonsProp } from '../../../../Types/Buttons/ButtonsTypes';
import { Btn, ToolTip } from '../../../../AbstractElements';
import { Href } from '../../../../utils/Constant';

const FlateCustomStateButtons:React.FC<CommonCustomStateButtonsProp> = ({ data }) => {
    const [buttonATooltip, setButtonATooltip] = useState(false);
    const buttonAToggle = () => setButtonATooltip(!buttonATooltip);
  
    return (
      <Fragment>
        <Btn className="btn-square" as={data.as} tag={data.tag} href={Href} color={data.color} value={data.value} id={`Tooltip-${data.id}`} type={data.type}>
          {data.text}
        </Btn>
        <ToolTip target={`Tooltip-${data.id}`} isOpen={buttonATooltip} toggle={buttonAToggle}>
          {data.toolText}
        </ToolTip>
      </Fragment>
    );
  };

export default FlateCustomStateButtons