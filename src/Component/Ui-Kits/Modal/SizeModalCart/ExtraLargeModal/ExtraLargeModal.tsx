import { Fragment, useState } from 'react'
import CommonModal from '../../Common/CommonModal';
import { fullScreenData } from '../../../../../Data/Ui-Kits/Modal/Modal';
import { ChevronsRight } from 'react-feather';
import { ExtraLargeModals, WebDesign } from '../../../../../utils/Constant';
import { Btn, H5, P } from '../../../../../AbstractElements';

const ExtraLargeModal = () => {
  const [extraLargeScreen, setExtraLargeScreen] = useState(false);
  const extraLargeScreenToggle = () => setExtraLargeScreen(!extraLargeScreen);
  return (
    <>
      <Btn color="info" onClick={extraLargeScreenToggle}>{ExtraLargeModals}</Btn>
      <CommonModal size="xl" isOpen={extraLargeScreen} toggle={extraLargeScreenToggle} sizeTitle="Extra Large modal">
        <div className="large-modal-header">
          <ChevronsRight />
          <H5 className="f-w-600">{WebDesign}</H5>
        </div>
        <P className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</P>
        {fullScreenData.map(({ title, text }, index) => (
          <Fragment key={index}>
            <div className="large-modal-header">
              <ChevronsRight />
              <H5 className="f-w-600">{title}</H5>
            </div>
            <P className="modal-padding-space">{text}</P>
          </Fragment>
        ))}
      </CommonModal>
    </>
  )
}

export default ExtraLargeModal