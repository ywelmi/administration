import React from 'react'
import { H4, LI, P, UL } from '../../../../../AbstractElements'
import { CommonRihoModalTitleType } from '../../../../../Types/Ui-Kits/UiKitsTypes'

const CommonRihoModalTitle: React.FC<CommonRihoModalTitleType> = ({ heading, subHeading, text }) => {
  return (
    <>
      <UL className="simple-list flex-row d-flex dot-group pb-3 pt-0">
        <LI></LI>
        <LI></LI>
        <LI></LI>
      </UL>
      <div className="title-wrapper pb-3 modal-heading">
        <H4 className="theme-name mb-0">
          <span>{heading}</span>
          {subHeading}
        </H4>
        <P>{text}</P>
      </div>
    </>
  )
}

export default CommonRihoModalTitle