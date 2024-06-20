import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { Close, SaveChanges } from "../../../../utils/Constant";
import { CommonModalType } from "../../../../Types/Ui-Kits/UiKitsTypes";
import { Btn, H1, H4, H5 } from "../../../../AbstractElements";

const CommonModal:React.FC<CommonModalType> = ({backdrop, centered, size, isOpen, toggle, title, onClosed, sizeTitle, fullTitle, modalBodyClassName, children } ) => {
  return (
    <Modal backdrop={backdrop} centered={centered} size={size} isOpen={isOpen} toggle={toggle} onClosed={onClosed}>
      {(title || sizeTitle || fullTitle) && (
        <div className="modal-header" onClick={toggle}>
          {title && <H5 className="f-w-600">{title}</H5>}
          {sizeTitle && <H4>{sizeTitle}</H4>}
          {fullTitle && <H1 className="fs-5">{fullTitle}</H1>}
          <Btn close></Btn>
        </div>
      )}
      <ModalBody className={modalBodyClassName ? modalBodyClassName : ""}>{children}</ModalBody>
      {(title || fullTitle) && (
        <ModalFooter>
          <Btn color="secondary" onClick={toggle}>{Close}</Btn>
          <Btn color="primary">{SaveChanges}</Btn>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default CommonModal;