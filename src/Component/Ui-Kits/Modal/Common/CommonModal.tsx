import { Modal, ModalBody } from "reactstrap";
import { Btn, H1, H4, H5 } from "../../../../AbstractElements";
import { CommonModalType } from "../../../../Types/Ui-Kits/UiKitsTypes";

const CommonModal: React.FC<CommonModalType> = ({
  backdrop,
  centered,
  size = "xl",
  isOpen,
  toggle,
  title,
  onClosed,
  sizeTitle,
  fullTitle,
  modalBodyClassName,
  children,
  fullscreen,
}) => {
  return (
    <Modal
      backdrop={backdrop}
      centered={centered}
      size={size}
      isOpen={isOpen}
      toggle={toggle}
      onClosed={onClosed}
      fullscreen={fullscreen}
      fade={false}
      style={{ pointerEvents: "none" }}
    >
      {(title || sizeTitle || fullTitle) && (
        <div className="modal-header">
          {title && <H5 className="f-w-600">{title}</H5>}
          {sizeTitle && <H4>{sizeTitle}</H4>}
          {fullTitle && <H1 className="fs-5">{fullTitle}</H1>}
          <Btn close onClick={toggle}></Btn>
        </div>
      )}
      <ModalBody
        className={modalBodyClassName ? modalBodyClassName : ""}
        style={{ pointerEvents: "unset" }}
      >
        {children}
      </ModalBody>
      {/* {(title || fullTitle) && (
        <ModalFooter>
          <Btn color="secondary" onClick={toggle}>{Close}</Btn>
          <Btn color="primary">{SaveChanges}</Btn>
        </ModalFooter>
      )} */}
    </Modal>
  );
};

export default CommonModal;
