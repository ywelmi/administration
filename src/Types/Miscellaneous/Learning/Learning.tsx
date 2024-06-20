export interface BlogDetailsProp {
    text: string;
  }
  
  export interface CommonLearningHeaderProp{
    heading:string
    isOpen:boolean
    setIsOpen: (parameter: boolean) => void;
  }

  export interface CommentsType {
    id: number;
    src: string;
    name: string;
    post: string;
    hits: string;
    comments: string;
    paragraph: string;
}