import {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import CommonModal from "./Common/CommonModal";

interface IHocModal extends PropsWithChildren {
  title: string;
  onClose?: () => void;
}

export interface IHocModalRef {
  toggle: () => void;
  close: () => void;
  open: () => void;
}

const HocModal = forwardRef<IHocModalRef, IHocModal>(
  ({ title, onClose, children }: IHocModal, ref) => {
    const [opened, setOpened] = useState(false);

    const handleToggle = useCallback(() => {
      setOpened((s) => {
        s && onClose && onClose();
        return !s;
      });
      // onClose?.();
    }, [onClose]);

    useImperativeHandle<IHocModalRef, IHocModalRef>(
      ref,
      () => ({
        toggle: handleToggle,
        close: () => setOpened(false),
        open: () => setOpened(true),
      }),
      [handleToggle]
    );

    return (
      <CommonModal
        backdrop="static"
        // modalBodyClassName="social-profile text-start"
        isOpen={opened}
        toggle={handleToggle}
        title={title}
        onClosed={() => onClose?.()}
      >
        {children}
      </CommonModal>
    );
  }
);

export { HocModal };
