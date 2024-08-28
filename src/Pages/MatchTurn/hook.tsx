import { useContext, useRef } from "react";
import { IMatchTurnModalProps, ListMatchTurnModal } from "./ListMatchTurnModal";
import { MatchTurnContext } from "./matchTurnContext";

const useMatchTurnContext = () => {
  return useContext({ ...MatchTurnContext });
};

const useMatchTurnModal = () => {
  const ref = useRef<IMatchTurnModalProps>(null);
  const props = {
    toggle: () => ref.current?.toggle(),
    close: () => ref.current?.close(),
    open: () => ref.current?.open(),
  };

  const ListMatchTurn = () => <ListMatchTurnModal ref={ref} />;
  return {
    ListMatchTurn,
    ...props,
  };
};

export { useMatchTurnContext, useMatchTurnModal };
