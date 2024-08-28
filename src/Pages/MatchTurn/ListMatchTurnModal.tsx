import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import CommonModal from "../../Component/Ui-Kits/Modal/Common/CommonModal";
import { ListMatchTurn } from "./ListMatchTurn";

export interface IMatchTurnModalProps {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

interface IMatchTurnModal {
  onClose?: () => void;
}

const ListMatchTurnModal = forwardRef<IMatchTurnModalProps>(
  ({ onClose }: IMatchTurnModal, ref) => {
    const [opened, setOpened] = useState(false);

    const handleToggle = useCallback(() => {
      setOpened((s) => {
        s && onClose && onClose();
        return !s;
      });
    }, [onClose]);

    useImperativeHandle<IMatchTurnModalProps, IMatchTurnModalProps>(
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
        modalBodyClassName="social-profile text-start"
        isOpen={opened}
        toggle={handleToggle}
        title="Trận đấu nhỏ"
      >
        <ListMatchTurn />
      </CommonModal>
    );
  }
);

export { ListMatchTurnModal };
