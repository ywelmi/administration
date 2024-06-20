import GroupChatImages from "./GroupChatImages";
import ContactEdit from "../../PrivateChat/LeftSidebar/ContactEdit";

const RightGroupChatHeader = () => {
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <GroupChatImages />
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

export default RightGroupChatHeader;
