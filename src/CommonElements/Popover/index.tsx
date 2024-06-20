import type { Placement } from '@popperjs/core';
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";

interface PropsTypes{
  title?: string;
  children: React.ReactNode;
  placement: Placement;
  isOpen: boolean;
  target: string;
  toggle?: () => void;
  trigger?: string;
}

const Popovers = (props: PropsTypes) => {
  const { title , children , placement , isOpen , target , toggle   } = props;
  return (
    <Popover placement={placement} isOpen={isOpen} target={target} toggle={toggle}>
      {title ? <PopoverHeader>{title}</PopoverHeader> : ""}
      <PopoverBody>{children}</PopoverBody>
    </Popover>
  );
};

export default Popovers;