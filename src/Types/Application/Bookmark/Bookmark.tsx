import { UseFormRegister,FieldErrors ,UseFormHandleSubmit, SubmitHandler} from "react-hook-form";

export interface BookmarkTabSliceProp {
    bookmark: [] | BookMarkData[];
    bookmarkFilter: boolean;
    activeTabs: string;
    addModal: boolean;
    bookmarkValidation: boolean;
    tagModal: boolean;
    gridView: boolean;
    editModal: boolean;
    editRow?: BookMarkData|null
    bookMarkList: [] | BookMarkData[];
    }
export interface BookMarkData {
  id: number;
  fillStar: boolean;
  image: string;
  title: string;
  website_url: string;
  desc: string;
  collection: string;
}

export interface AddNewBookMarkInterFace {
  url: string
  title: string
  desc: string
}

export interface DescriptionBookMarkPropsType {
  data: BookMarkData;
  onHandleClick: (book: BookMarkData) => void;
  removeFrombookmark: (bookmarkId: number) => void;
}

export interface FavDesciptionDataProp {
  myBookData: BookMarkData;
}

export interface CommonTabCardProp {
  tabId: string;
  title: string;
}

export interface EditBookmarkModalFormType{
  register:UseFormRegister<AddNewBookMarkInterFace>
  errors:FieldErrors<AddNewBookMarkInterFace>
  handleSubmit:UseFormHandleSubmit<AddNewBookMarkInterFace, undefined>
  editToggle: () => void
  updateBookMarkData: SubmitHandler<AddNewBookMarkInterFace>
}