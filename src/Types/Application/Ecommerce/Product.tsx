export interface ProductGridProp {
    id: number;
    image: string;
    title: string;
    text: string;
    amount: number;
    offer: number;
    modalText: string;
    modalTitle?: string;
    verticalRibbon?: boolean;
    horizontalRibbon?: boolean;
    ribbonText?: string;
    ribbonColor?: string;
  }
  
  interface VariantsType {
    color: string;
    images: string;
  }
  export interface CartType {
    variants: VariantsType[];
    total?: any;
    sum?: number;
    id: number;
    image: string;
    name: string;
    note: string;
    description: string;
    discountPrice: string;
    price: number;
    status: string;
    ribbonClassName?: string;
    stock: string;
    review: string;
    rating: number;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
  }
  
  interface VariantsInterface {
    color: string;
    images: string;
  }
  export interface ProductItemInterface {
    id: number;
    image: string;
    name: string;
    note: string;
    description: string;
    discountPrice: string;
    status: string;
    price: number;
    stock: string;
    review: string;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
    variants: VariantsInterface[];
    ribbonClassName?: string;
  }
  
  interface ValueInterface {
    min: number;
    max: number;
  }
  export interface FilterInterface {
    color: string;
    searchBy: string;
    value: ValueInterface;
    sortBy: string;
    category: string[];
    brand: string[];
  }
  
  export interface ProductModalInterfaceType {
    value: boolean;
    setOpenModal: (value: boolean) => void;
    dataId: undefined | number;
  }
  
  export interface HoverButtonsProp {
    item: ProductItemInterface;
    setDataId: (id: number) => void;
    setOpenModal: (key: boolean) => void;
  }
  
  export interface ProductDetailsProp {
    item: ProductItemInterface;
  }
  
  export interface ModalProductDetailsProp {
    singleProduct: ProductItemInterface;
  }
  
  export interface ModalQuantityProp {
    quantity: number;
    setQuantity: (key: number) => void;
  }
  
  export interface ModalButtonsProp {
    singleProduct: ProductItemInterface;
    quantity: number;
  }
  
  export interface CartQuantityButtonProp {
    item: CartType;
  }
  
  interface CommonProductSlideData {
    rowClass?: string;
    image: string;
    title: string;
    text: string;
  }
  
  export interface CommonProductSlideProp {
    data: CommonProductSlideData;
  }

  export interface SideBarType {
    toggleSidebar: boolean;
    scroll: boolean;
  }
  

export interface CartSliceProp {
  cart: CartType[];
  total:number|null;
  tax:number
}
