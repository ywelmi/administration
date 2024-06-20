export interface PropsType {
    callback: (tab: number) => void;
  }

export  interface HeaderWithIconPropsTypes {
    setIsOpen: (parameter: boolean) => void;
    isOpen: boolean;
    Heading: string;
  }

export interface FilterPropsType{
    isFilter:boolean
}
export interface AboutPropsType{
    Heading:string
  }

export interface TimelineDataType {
    data:{
        img: string;
        name: string;
        date: string;
        icon: string;
        img2: string;
        description: string;
        socialChatData: SocialChatDataType[]
    }
}

export interface SocialChatDataType {
  class: string;
  img: string;
  name: string;
  time: string;
  chat: string;
}