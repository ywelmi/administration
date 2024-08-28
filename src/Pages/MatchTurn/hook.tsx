import { useContext, useRef } from "react";
import { IMatchTurnModalProps, ListMatchTurnModal } from "./ListMatchTurnModal";
import { MatchTurnContext } from "./matchTurnContext";

const useMatchTurnContext = () => {
  return useContext({ ...MatchTurnContext });
};

interface IMatchTurnModal {
  onClose?: () => void;
}
const useMatchTurnModal = ({ onClose }: IMatchTurnModal) => {
  const ref = useRef<IMatchTurnModalProps>(null);
  const props = {
    toggle: () => ref.current?.toggle(),
    close: () => ref.current?.close(),
    open: () => ref.current?.open(),
  };

  const ListMatchTurn = () => (
    <ListMatchTurnModal ref={ref} onClose={onClose} />
  );
  return {
    ListMatchTurn,
    ...props,
  };
};

export { useMatchTurnContext, useMatchTurnModal };
