export interface TotalRevenueType {
    title: string;
    amount: string;
    icon: 'ArrowUpRight' | 'ArrowDownLeft';
    result: string;
    chartOptions: ApexCharts.ApexOptions;
    chartType:"bar" | "area";
    chartClass: string;
}

export interface TotalSalesType {
    icon: string;
    color: string;
    title: string;
    amount: string;
    detail: string;
}

export interface SaleHistoryBodyType {
    title: string;
    amount: string;
    state: string;
    time: string;
}

export interface SalesChartDropdownType {
    color: string;
    title: string;
}

export interface AddNewProductType {
    color: string;
    icon: string;
    title: string;
    subTitle: string;
} 

export interface LiveProductTableBodyType{
    image: string;
    productName: string;
    type: string;
}

export interface LatestOrdersTableBodyType {
    image: string;
    orderName: string;
    orderId: string;
    name: string;
    email: string;
    status: string;
    svgIcon: string;
    amount: string;
    paymentDetail: string;
    color: string;
}