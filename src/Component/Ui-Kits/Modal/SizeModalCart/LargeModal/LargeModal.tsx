import { useState } from 'react'
import { LargeModals, StartWithYourGoals } from '../../../../../utils/Constant';
import CommonModal from '../../Common/CommonModal';
import { ChevronsRight, CornerUpRight } from 'react-feather';
import { Btn, H5, P } from '../../../../../AbstractElements';
import { largeData } from '../../../../../Data/Ui-Kits/Modal/Modal';

const LargeModal = () => {
  const [largeScreen, setLargeScreen] = useState<boolean>(false);
  const largeScreenToggle = () => setLargeScreen(!largeScreen);
  return (
    <>
      <Btn color="success" onClick={largeScreenToggle}>{LargeModals}</Btn>
      <CommonModal size="lg" isOpen={largeScreen} toggle={largeScreenToggle} sizeTitle="Large modal" modalBodyClassName="dark-modal">
        <div className="large-modal-header mb-2">
          <ChevronsRight />
          <H5 className="f-w-600">{StartWithYourGoals}</H5>
        </div>
        <P className="modal-padding-space mb-0">No matter how talented you are as a content writer or creator, you will always fail if you don't have a clear set of goals.</P>
        <P className="modal-padding-space mb-0">First of all, without goals, there is no way to determine your success. Additionally, you lack direction.</P>
        <P className="modal-padding-space mb-2">Together with your team, respond to the following questions to make sure they are:</P>
        <div className="large-modal-body">
          <CornerUpRight />
          <P className="ps-1 mb-2">What must you achieve, and by when?</P>
        </div>
        {largeData.map((item, index) => (
          <div className="large-modal-body mb-2" key={index}><CornerUpRight />
            <P className="ps-1 mb-0">{item}</P>
          </div>
        ))}
      </CommonModal>
    </>
  )
}

export default LargeModal