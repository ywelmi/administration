import { useEffect, useRef, useState } from "react";
import { Image } from "../../../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { dynamicImage } from "../../../../../Service";
import SendMessage from "./SendMessage";
import { ChatProp, ChatUserProfiles, MessageType } from "../../../../../Types/Application/Chat/PrivateChat";
import { fetchChatMemberAsync, setChats, setSelectedUser } from "../../../../../ReduxToolkit/Reducer/ChatSlice";

const RightChatBody = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const { allMembers, chats, selectedUser, currentUser } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  const fetchChatAsync = () => {
    if (chats.length > 0) {
      const currentUserId = 0;
      const chat = chats.filter((x: ChatProp) => x.users.includes(currentUserId));
      const selectedUser = chats[0].users.find((x: number) => x !== currentUserId);
      const oneSelect =allMembers.find((x:ChatUserProfiles) => x.id === selectedUser);
      if (allMembers.length > 0) {
        dispatch(setChats(chat));
        dispatch(setSelectedUser(oneSelect));
      }
      if (allMembers.length > 0) allMembers.find((x: ChatUserProfiles) => x.id === selectedUser);
    }
  };

  useEffect(() => {
    dispatch(fetchChatMemberAsync());
    fetchChatAsync();
    setScroll(1);
  }, [dispatch, allMembers.length, chats.length]);
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, scroll]);

  const selectedChat = allMembers && chats && selectedUser && currentUser ? chats.find((x: ChatProp) =>x.users.includes(currentUser?.id) && x.users.includes(selectedUser.id)): null;
  return (
    <div className="right-sidebar-Chats">
      <div className="msger">
        <div className="msger-chat">
          {selectedChat && selectedChat.messages.length > 0 ? (
            selectedChat.messages.map((item: MessageType, id: number) => {
              const participators = allMembers.find((x:ChatUserProfiles) => x.id === item.sender);
              return (
                <div className={`msg ${item.sender === currentUser?.id ? "right" : "left"}-msg`} key={id}>
                  {item?.name ? <div className="msg-img" /> : <Image src={dynamicImage(participators?.image)} className="img-30 h-auto" alt="user" />}
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">{!item?.sender ? "Theresa Webb" : selectedUser?.name}</div>
                      <div className="msg-info-time">{item.time}</div>
                    </div>
                    <div className="msg-text">
                      {item.text}
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <Image className="img-fluid w-100 h-auto" src={dynamicImage("start-conversion.jpg")} alt="start conversion"/>
          )}
        </div>
      </div>
      <SendMessage />
    </div>
  );
};

export default RightChatBody;
