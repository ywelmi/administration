import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Reducer/LayoutSlice";
import FormWizardTwoSlice from "./Reducer/FormWizardTwoSlice";
import NumberingWizardSlice from "./Reducer/NumberingWizardSlice";
import StudentWizardSlice from "./Reducer/StudentWizardSlice";
import VerticalWizardSlice from "./Reducer/VerticalWizardSlice";
import TwoFactorSlice from "./Reducer/TwoFactorSlice";
import ProjectSlice from "./Reducer/ProjectSlice";
import LetterBoxSlice from "./Reducer/LetterBoxSlice";
import ToDoSlice from "./Reducer/ToDoSlice";
import TasksSlice from "./Reducer/TasksSlice";
import ContactSlice from "./Reducer/ContactSlice";
import BookmarkTabSlice from "./Reducer/BookmarkTabSlice";
import ChatSlice from "./Reducer/ChatSlice";
import ProductSlice from "./Reducer/ProductSlice";
import AddProductSlice from "./Reducer/AddProductSlice";
import FilterSlice from "./Reducer/FilterSlice";
import CartSlice from "./Reducer/CartSlice";
import ThemeCustomizerSlice from "./Reducer/ThemeCustomizerSlice";
import BookmarkHeaderSlice from "./Reducer/BookmarkHeaderSlice";
const Store = configureStore({
    reducer: {
        layout:LayoutSlice,
        formWizardTwo:FormWizardTwoSlice,
        numberingWizard: NumberingWizardSlice,
        studentWizard: StudentWizardSlice,
        verticalWizard: VerticalWizardSlice,
        twoFactor: TwoFactorSlice,
        project:ProjectSlice,
        letterBox:LetterBoxSlice,
        todo:ToDoSlice,
        tasks:TasksSlice,
        contact:ContactSlice,
        bookmarkTab:BookmarkTabSlice,
        chat:ChatSlice,
        product:ProductSlice,
        addProduct:AddProductSlice,
        filterData: FilterSlice,
        cartData: CartSlice,
        themeCustomizer: ThemeCustomizerSlice,
        bookmarkHeader:BookmarkHeaderSlice
    }
})

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;