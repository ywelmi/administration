import { Fragment, useState } from 'react'
import { SmallModals } from '../../../../../utils/Constant';
import CommonModal from '../../Common/CommonModal';
import { ChevronsRight } from 'react-feather';
import { smallData } from '../../../../../Data/Ui-Kits/Modal/Modal';
import { Btn, H5, P } from '../../../../../AbstractElements';

const SmallModal = () => {
  const [smallScreen, setSmallScreen] = useState<boolean>(false);
  const smallScreenToggle = () => setSmallScreen(!smallScreen);
  return (
    <>
      <Btn color="primary" onClick={smallScreenToggle}>{SmallModals}</Btn>
      <CommonModal size="sm" isOpen={smallScreen} toggle={smallScreenToggle} sizeTitle="Small modal" modalBodyClassName="dark-modal">
        <div className="large-modal-header">
          <ChevronsRight />
          <H5 className="f-w-600">Web Design </H5>
        </div>
        <P className="modal-padding-space mb-2">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</P>
        {smallData.map(({ title, text }, index) => (
          <Fragment key={index}>
            <div className="large-modal-header"><ChevronsRight />
              <H5 className="f-w-600">{title}</H5>
            </div>
            <P className="modal-padding-space">{text}</P>
          </Fragment>
        ))}
      </CommonModal>
    </>
  )
}

export default SmallModal