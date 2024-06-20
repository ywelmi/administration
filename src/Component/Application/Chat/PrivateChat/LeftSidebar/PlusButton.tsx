import { Btn, P } from "../../../../../AbstractElements";
import { ChatsPropsTypes } from "../../../../../Types/Application/Chat/PrivateChat";

const PlusButton = ({title}:ChatsPropsTypes) => {
  return (
    <div className="common-space">
      <P>{title}</P>
      <div className="header-top">
        <Btn className="badge-light-primary f-w-500" color="transparent">
          <i className="fa fa-plus" />
        </Btn>
      </div>
    </div>
  );
};

export default PlusButton;
