import { Image, P } from "../../../../../AbstractElements";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { dynamicImage } from "../../../../../Service";
import ContactEdit from "../LeftSidebar/ContactEdit";

const RightChatHeader = () => {
  const {selectedUser} = useAppSelector((state)=> state.chat)
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <div className="chat-time">
          <div className="active-profile">
            <Image className="img-fluid rounded-circle" src={dynamicImage(selectedUser?.image ? selectedUser?.image : "user/1.jpg")} alt="user"/>
            <div className="status bg-success" />
          </div>
          <div>
            <span className="f-w-500">{selectedUser?.name}</span>
            <P>Online</P>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert">
            <i className="icon-info-alt" />
          </div>
          <ContactEdit dropClass="chat-alert" />
        </div>
      </div>
    </div>
  );
};

export default RightChatHeader;
