export interface LetterBoxSidebarType {
    title: string;
    icon: string;
    id: string;
    color?: string;
    badge?:boolean
}

export interface InitialStateType {
    navId : string;
    modal : boolean;
    composeEmail : boolean;
    interviewEmail : boolean;
    page ?: boolean;
    inboxEmail : InboxEmailType[];
    emailValidation : boolean
    emailOpen : number[] | [] |any
}

export interface InboxEmailType {
    id:number;
    image?:string;
    shortName?:string;
    name:string;
    color:string;
    message:string;
    subMessage: string;
    badge?:BadgeType[];
    time:string;
    star?:boolean
}

interface BadgeType{
    title: string;
    color: string;
}

export interface CommonDataType {
  data: InboxEmailType,
  i : number
}

export interface AddNewEmailInterFace {
    userEmail: string
    subject: string
  }

export interface EmailSubInputType {
    ccShow : boolean
    bccShow : boolean
}

export interface MailPropsType {
    handlePrint: () => void;
  }

  export interface LetterBoxNavContentType {
    navId: string;
  }

  export interface LetterBoxNavType {
    navId: string;
    setNavId: (key: string) => void;
  }