import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterToggle: false,
  productItem: [],
  symbol: "$",
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setFilterToggle: (state) => {
      state.filterToggle = !state.filterToggle;
    },
    setProductItem: (state, action) => {
      state.productItem = action.payload;
    },
  },
});
export const { setProductItem,setFilterToggle } = ProductSlice.actions;

export default ProductSlice.reducer;