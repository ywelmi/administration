import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useState,
} from "react";
import CommonModal from "./Common/CommonModal";

interface IHocModal extends PropsWithChildren {
  title: string;
  onClose?: () => void;
}

export interface IHocModalRef {
  handleToggle: () => void;
}

const HocModal = forwardRef<IHocModalRef, IHocModal>(
  ({ title, onClose, children }: IHocModal, ref) => {
    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
      setOpened((s) => !s);
    };

    useImperativeHandle(
      ref,
      () => ({
        handleToggle,
      }),
      []
    );

    return (
      <CommonModal
        backdrop="static"
        modalBodyClassName="social-profile text-start"
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
