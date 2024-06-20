export interface ChatsPropsTypes {
    title : string
}

export interface DropClassTypes {
    dropClass ?: string
}

export interface ChatOptionProps {
    searchKeyword : string
}


export interface ChatUserProfiles {
    id:number;
    name: string;
    image: string;
    status: string;
    online?:string;
    time: string;
    badge?: boolean;
    lastSeenDate?:string;
    reply:string
} 
  

export interface MessageType {
    sender: number;
    text: string;   
    time: string;
    class?: string;
    name?:string;
    status?:boolean
  }

  export interface ChatProp {
    id?: number;
    users: number[];
    lastMessageTime: string;
    messages: MessageType[];
    time?: string;
  }

  export interface ChatSliceType {
    allMembers: ChatUserProfiles[] | [];
    chats: ChatProp[] | [];
    members: ChatUserProfiles[]|[];
    currentUser:null|ChatUserProfiles,
    selectedUser?: null|ChatUserProfiles
  }