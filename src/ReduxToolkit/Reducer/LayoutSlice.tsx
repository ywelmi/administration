import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flip: false,
  darkMode: false,
  toggleSidebar: false,
  pinedMenu: [""],
  layoutName: "",
  responsiveSearch:false,
  scroll: false,
  margin:0
};

const LayoutSlice = createSlice({
  name: "LayoutSlice",
  initialState,
  reducers: {
    setFlip: (state) => {
      state.flip = !state.flip;
    },
    setDarkMode: (state,action) => {
      state.darkMode = action.payload;
      if (state.darkMode) {
        document.body.classList.remove("light");
        document.body.classList.add("dark-only");
      } else {
        document.body.classList.remove("dark-only");
        document.body.classList.add("light");
      }
    },
    setToggleSidebar: (state,action) => {
      state.toggleSidebar = action.payload;
    },
    setPinedMenu: (state, action) => {
      state.pinedMenu = action.payload;
    },
    handlePined: (state, action) => {
      if (action.payload) {
        if (state.pinedMenu.includes(action.payload)) {
          let filterMenu = state.pinedMenu.filter((item) => item !== action.payload);
          state.pinedMenu = filterMenu;
        } else {
          state.pinedMenu = [...state.pinedMenu, action.payload];
        }
      }
    },
    handleResponsiveToggle: (state) => {
      state.toggleSidebar = true
    },
    setResponsiveSearch: (state) => {
      state.responsiveSearch = !state.responsiveSearch;
    },
    setScrollMenu: (state, action) => {
      state.scroll = action.payload;
    },
    scrollToLeft:(state)=>{
      state.margin += 500
    },
    scrollToRight:(state)=>{
      state.margin -= 500
    }
  },
});

export const { setFlip, setDarkMode, setToggleSidebar, setPinedMenu, handlePined, handleResponsiveToggle, setResponsiveSearch, setScrollMenu,scrollToLeft,scrollToRight } = LayoutSlice.actions;

export default LayoutSlice.reducer;