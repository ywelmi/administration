import { createSlice } from "@reduxjs/toolkit";
import { BookmarkSliceType, BookmarkedDataType } from "../../Types/Layout/Sidebar";
import { bookMarkData } from "../../Data/Layout/Header";

const initialState:BookmarkSliceType = {
  bookmarkedData: [...bookMarkData],
  linkItemsArray:[],
};
  
  const bookmarkSlice = createSlice({
    name: "BookmarkSlice",
    initialState,
    reducers: {
      getLinkItemsArray: (state, action) => {
        state.linkItemsArray = action.payload;
      },
      handleBookmarkChange: (state, action) => {
        if (!action.payload.bookmarked) {
          state.bookmarkedData.push({ ...action.payload, bookmarked: !action.payload.bookmarked });
        } else {
          const tempt :BookmarkedDataType[] = [];
          state.bookmarkedData.forEach((ele) => {
            if (ele.id !== action.payload.id) {
              tempt.push(ele);
            }
          });
          state.bookmarkedData = tempt;
        }
        const temp = [...state.linkItemsArray];
        temp.splice(action.payload.id - 1, 1, { ...action.payload, bookmarked: !action.payload.bookmarked });
        state.linkItemsArray = temp;
      },
  },
  });
  
  export const { getLinkItemsArray,handleBookmarkChange} = bookmarkSlice.actions;
  
  export default bookmarkSlice.reducer;