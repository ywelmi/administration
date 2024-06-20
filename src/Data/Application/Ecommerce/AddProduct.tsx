import { AddProductNav } from "../../../Types/Application/Ecommerce/AddProduct";

export const addProductNav: AddProductNav[] = [
  {
    id: 1,
    icon: "product-detail",
    title: "Add Product Details",
    detail: "Add Product name & details",
  },
  {
    id: 2,
    icon: "product-gallery",
    title: "Product gallery",
    detail: "thumbnail & Add Product Gallery",
  },
  {
    id: 3,
    icon: "product-category",
    title: "Product Categories",
    detail: "Add Product category, Status and Tags",
  },
  {
    id: 4,
    icon: "pricing",
    title: "Selling prices",
    detail: "Add Product basic price & Discount",
  },
  {
    id: 5,
    icon: "advance",
    title: "Advance",
    detail: "Add Meta details & Inventory details",
  },
];

export const typesOfProductData = [
  {
    id: "radio-icon",
    check: true,
    title: "Fixed Price",
  },
  {
    id: "radio-icon4",
    title: "BOGO(Buy one, Get one)",
  },
  {
    id: "radio-icon5",
    title: "Seasonal or holiday discount",
  },
  {
    id: "radio-icon6",
    title: "Percentage-based discount(%)",
  },
  {
    id: "radio-icon7",
    title: "Volume or bulk discount",
  },
];

export const productFiveNavData = [
  "Inventory",
  "Additional Options",
  "Shipping",
];
