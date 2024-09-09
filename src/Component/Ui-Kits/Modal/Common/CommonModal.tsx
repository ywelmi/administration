import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { Btn, H1, H4, H5 } from "../../../../AbstractElements";
import { CommonModalType } from "../../../../Types/Ui-Kits/UiKitsTypes";
import "./style.css";

const OriginalCommonModal: React.FC<CommonModalType> = ({
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

const CommonModal: React.FC<CommonModalType> = ({
  backdrop,
  centered,
  size = "xl",
  isOpen: opened,
  toggle,
  title,
  onClosed,
  sizeTitle,
  fullTitle,
  modalBodyClassName,
  children,
  fullscreen,
}) => {
  const [isOpen, setIsOpen] = useState(opened);
  useEffect(() => {
    setIsOpen(opened);
  }, [opened]);
  return (
    <Dialog.Root open={isOpen} onOpenChange={toggle}>
      <Dialog.Trigger asChild>
        <button hidden onClick={toggle}></button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content
          className="DialogContent"
          onPointerDownOutside={(e) => {
            e.preventDefault();
          }}
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          {title && (
            <Dialog.Title className="DialogTitle">{title}</Dialog.Title>
          )}
          {children}
          <Dialog.Close asChild>
            <button
              className="IconButton"
              aria-label="Close"
              onClick={() => {
                setIsOpen(false);
                toggle?.();
                onClosed?.();
              }}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default OriginalCommonModal;
// export default CommonModal;
