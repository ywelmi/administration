import { Badges, Image, LI, P, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { ChatUserProfiles } from "../../../../../Types/Application/Chat/PrivateChat";
import { changeChat, createNewChatAsync } from "../../../../../ReduxToolkit/Reducer/ChatSlice";

const ChatUserProfile = () => {
    const {members, selectedUser,currentUser, chats } = useAppSelector((state) => state.chat);
    const dispatch = useAppDispatch()
    var activeChat = 0;
    if (selectedUser != null) activeChat = selectedUser.id;
    
    const changeChatClick = (selectUser:number) => {
        const currentUserId = currentUser?.id;
        const currentChat = chats.find((x:{users:number[]}) => currentUser?.id !== undefined && x.users.includes(currentUser?.id) && x.users.includes(selectUser));
        if (currentChat) dispatch(changeChat(selectUser));
        dispatch(createNewChatAsync({ currentUserId, selectUser, chats }));
    }
  return (
    <>
      {members && members.length > 0 ? (
        <UL className="chats-user simple-list">
            {members.filter((x: ChatUserProfiles) => x.id !== currentUser?.id).map((item: ChatUserProfiles, id: number) => (
                <LI className="common-space" key={id} onClick={() => changeChatClick(item.id)}>
                    <div className="chat-time">
                        <div className="active-profile">
                            <Image  className="img-fluid rounded-circle" src={dynamicImage(item.image)} alt="user" />
                            <div className={`status bg-${item.online}`} />
                        </div>
                        <div>
                            <span>{item.name}</span>
                            <P>{item.status}</P>
                        </div>
                    </div>
                    <div>
                        <P>{item.time} </P>
                        {item.badge && <Badges color="light-success">15</Badges>}
                    </div>
                </LI>
            ))}
        </UL>
        ) : (
        <Image className="img-fluid m-auto" src={dynamicImage("search-not-found.png")} alt="search-not-found" />
      )}
    </>
  );
};

export default ChatUserProfile;
