import React from 'react'
import CommonModal from '../Common/CommonModal';
import { Cancel, ConnectNewAccount, ParentToggleTitle } from '../../../../utils/Constant';
import { Btn, H6, Image, LI, UL } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { ToggleModalType } from '../../../../Types/Ui-Kits/UiKitsTypes';
import ToggleChildModal from './ToggleChildModal';

const ToggleParentModal:React.FC<ToggleModalType> = ({ nestedModal, closeAll, toggle, toggleNested, toggleAll } ) => {
    return (
      <div className="modal-toggle-wrapper">
        <UL className="modal-img simple-list flex-row">
          <LI><Image src={dynamicImage(`gif/whatapp.gif`)} alt="whatsapp" /></LI>
          <LI><Image src={dynamicImage(`gif/instagram.gif`)} alt="instagram" /></LI>
          <LI><Image src={dynamicImage(`gif/facebook.gif`)} alt="facebook" /></LI>
        </UL>
        <H6>{ParentToggleTitle}</H6>
        <Btn color="dark" className="rounded-pill w-100 mt-4" onClick={toggleNested}>{ConnectNewAccount}</Btn>
        <CommonModal centered isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
          <ToggleChildModal toggleAll={toggleAll}/>
        </CommonModal>
        <Btn color="white" className="rounded-pill w-100 dark-toggle-btn" onClick={toggle}>{Cancel}</Btn>
      </div>
    );
  };

export default ToggleParentModal