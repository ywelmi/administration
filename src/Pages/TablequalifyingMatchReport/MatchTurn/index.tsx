import { useState } from "react";
import { Popovers } from "../../../AbstractElements";
import { TMatchTurn } from "../../../type/matchTurn";
import { MatchTurnForm } from "./MatchTurnForm";
import "./style.css";

interface IMatchTurnPopover {
  setReport?: TMatchTurn;
  onSubmit: (v: TMatchTurn) => void;
  onCancel?: () => void;
}

export const useMatchTurnPopover = ({
  onSubmit,
  ...rest
}: IMatchTurnPopover) => {
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened((s) => !s);
  };

  // const handleSubmit = (teammember: TMatchTurn) => {
  //   onSubmit(teammember);
  //   setOpened(false);
  // };

  const MatchTurnPopover = ({
    children,
    target,
  }: React.PropsWithChildren<{ target: string }>) => (
    <div>
      {children}
      <Popovers isOpen={opened} placement="top" target={target} trigger="click">
        <MatchTurnForm
          // onSubmit={handleSubmit}
          {...rest}
          onCancel={() => setOpened(false)}
        />
      </Popovers>
    </div>
  );

  return { MatchTurnPopover, handleToggle };
};
