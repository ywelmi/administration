import { Tooltip } from "reactstrap";
import { SVG } from "../../../../../AbstractElements";
import { mailHeader } from "../../../../../Data/Application/LetterBox/LetterBox";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { InterviewMail } from "../../../../../utils/Constant";
import { Fragment, useState } from "react";
import { handleInterview } from "../../../../../ReduxToolkit/Reducer/LetterBoxSlice";

const InterviewMailHeader = () => {
  const dispatch = useAppDispatch();
  const [tooltipOpen, setTooltipOpen] =  useState<number | null>(null);
  const toggle = (index: number) => {
    setTooltipOpen(tooltipOpen !== index ? index : null);
  };
  return (
    <div className="mail-header-wrapper header-wrapper1">
      <div className="mail-header1">
        <div
          className="light-square"
          onClick={() => dispatch(handleInterview(false))}
        >
          <SVG className="btn-email" iconId="back-arrow" />
        </div>
        <span>{InterviewMail}</span>
      </div>
      <div className="mail-body1">
        {mailHeader.map((data, i) => (
          <Fragment key={i}>
            <div className="light-square" id={`light-${data.icon}`}>
              <SVG iconId={data.icon} className={data.className ? data.className : ""} />
            </div>
            <Tooltip placement="top" isOpen={tooltipOpen === i} target={`light-${data.icon}`} toggle={() => toggle(i)}>{data.tooltip}</Tooltip>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default InterviewMailHeader;
