import { Link } from "react-router-dom";
import { Badges, Image, P, SVG } from "../../../AbstractElements";
import { Href } from "../../../utils/Constant";
import { Rating } from "react-simple-star-rating";
import { dynamicImage } from "../../../Service";
import { TableColumn } from "react-data-table-component";
import { ProductListTableDataColumnType, ProductListTableProduct } from "../../../Types/Application/Ecommerce/Ecommerce";

export const productListTableData = [
  {
    image: "ecommerce/product-categories/laptop.png",
    name: "Apple Desktop 2024",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "ecommerce/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "ecommerce/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/ipad.png",
    name: "MacBook Air 13.3-inch",
    sku: "589KO8PPQ8",
    category: "Laptops",
    price: 45000.0,
    quantity: 10,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "ecommerce/product-categories/mouse.png",
    name: "M185 Compact Wireless Mouse",
    sku: "02145YK796",
    category: "E-Commerce",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/dvd.png",
    name: "DVD",
    sku: "HG5667DFQ1",
    category: "Electric",
    price: 5600.0,
    quantity: 10,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/speaker.png",
    name: "Speakers",
    sku: "02145YK796",
    category: "Electric",
    price: 12200.0,
    quantity: 50,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "ecommerce/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "ecommerce/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "ecommerce/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "ecommerce/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "ecommerce/product-categories/laptop.png",
    name: "Apple Desktop 2024",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "ecommerce/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "ecommerce/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 2,
  },
];

const ProductListTableAction = () => {
  return (
    <div className="product-action">
      <Link to={Href}>
        <SVG iconId="edit-content" />
      </Link>
      <SVG iconId="trash1" />
    </div>
  );
};

const ProductListTableProductName: React.FC<ProductListTableProduct> = ({ images, name }) => {
  return (
    <div className="product-names my-2">
      <div className="light-product-box">
        <Image className="img-fluid" src={dynamicImage(images)} alt="laptop" />
      </div>
      <P>{name}</P>
    </div>
  );
};

const ProductListTableStatus :React.FC<ProductListTableProduct> = ({ name }) => {
  return (
    <Badges color="transparent" className={`badge-light-${name === "Sold Out" ? "secondary" : "primary" }`}>{name}</Badges>
  );
};

const ProductListTableRating :React.FC<ProductListTableProduct> = ({ rate }) => {
  return (
    <Rating initialValue={rate} size={17} fillColor="#FFAE1A" />
  );
};

export const productListTableDataColumn: TableColumn<ProductListTableDataColumnType>[] = [
  {
    name: "Product Name",
    cell: (row) => <ProductListTableProductName images={row.image} name={row.name}/>,
    sortable: true,
    grow: 2,
  },
  {
    name: "SKU",
    selector: (row) => `${row.sku}`,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row) => `${row.category}`,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => `${row.price}`,
    sortable: true,
  },
  {
    name: "Qty",
    selector: (row) =>  `${row.quantity}`,
    sortable: true,
  },
  {
    name: "Status",
    cell: (row) =>  <ProductListTableStatus name={row.status} />,
  },
  {
    name: "Rating",
    cell: (row) =>  <ProductListTableRating rate={row.rating}/>,
  },
  {
    name: "Action",
    cell: () => <ProductListTableAction />,
  },
];

  export const filtersData = [
    {
      name: "Choose Product",
      options: ["Apple iphone 13 Pro", "Wood Chair", "M185 Compact Wireless Mouse"],
    },
    {
      name: "Choose Category",
      options: ["Furniture", "Smart Gadgets", "Electrics"],
    },
    {
      name: "Choose Sub Category",
      options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
    },
    {
      name: "Status",
      options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
    },
    {
      name: "Price",
      options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
    },
  ];