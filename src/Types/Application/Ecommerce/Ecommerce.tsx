export interface ProductPropsType {
  activeTab: number;
}

export interface ServiceType {
  icon: "Truck" | "Clock" | "Gift" | "CreditCard";
  title: string;
  subtitle: string;
}

export interface ProductListTableDataColumnType {
  image: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  quantity: number;
  status: string;
  rating: number;
}

export interface ProductListTableProduct {
  images?: string;
  name?: string;
  rate?: number;
}

export interface InvoicePrintType {
  handlePrint?: () => void;
}
