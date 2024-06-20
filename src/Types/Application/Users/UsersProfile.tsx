export interface UserPropsType {
    activeTime: string
}

export  interface SocialMediaIconsPropsTypes {
    listClassName?: string;
  }

  export interface UserCardTypes {
    id: number;
    avatar: string;
    icon: string;
    name: string;
    email: string;
    totalPost: string;
    follower: string;
    following: string;
}
  export interface CardType {
    item: UserCardTypes;
  }

  export interface CommonProfileLikeType {
    commentsNumber : number;
    likeNumber : number;
  }

  export interface iconListType {
    like?: boolean;
    endNumber : number
  }