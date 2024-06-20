import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { BookmarkedDataType, BookmarkSliceType } from "../Types/Layout/Sidebar";
import { bookMarkData } from "../Data/Layout/Header";

interface BookMarkState extends BookmarkSliceType {
  bookmarkedData: BookmarkedDataType[];
  linkItemsArray: any[];
  getLinkItemsArray: (items: Array<any>) => void;
  handleBookmarkChange: (data: BookmarkedDataType) => void;
}

export const useBookmarkStore = create<BookMarkState>()(
  immer((set) => ({
    bookmarkedData: [...bookMarkData],
    linkItemsArray: [],
    getLinkItemsArray: (items: Array<any>) =>
      set((state: BookMarkState) => {
        state.linkItemsArray = items;
      }),
    handleBookmarkChange: (data: BookmarkedDataType) =>
      set((state: BookMarkState) => {
        if (!data.bookmarked) {
          state.bookmarkedData.push({ ...data, bookmarked: !data.bookmarked });
        } else {
          const tempt: BookmarkedDataType[] = [];
          state.bookmarkedData.forEach((ele) => {
            if (ele.id !== data.id) {
              tempt.push(ele);
            }
          });
          state.bookmarkedData = tempt;
        }
        const temp = [...state.linkItemsArray];
        if (data.id) {
          temp.splice(data.id - 1, 1, {
            ...data,
            bookmarked: !data.bookmarked,
          });
        }
        state.linkItemsArray = temp;
      }),
  })),
);
//
