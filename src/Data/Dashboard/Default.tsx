import { AddNewProductType, LatestOrdersTableBodyType, LiveProductTableBodyType, SaleHistoryBodyType, SalesChartDropdownType, TotalRevenueType, TotalSalesType } from "../../Types/Dashboard/Default";
import { revenueChartData, totalOrderChartData } from "./DashboardChart";

export const totalRevenueData:TotalRevenueType[] = [
    {
        title:"Total Revenue",
        amount:"₹97,250.89",
        icon:"ArrowUpRight",
        result:"60.00% from last year",
        chartOptions:revenueChartData,
        chartType:"bar",
        chartClass:"total-revenue-chart"
    },
    {
        title:"Total Order",
        amount:"35,452",
        icon:"ArrowDownLeft",
        result:"15.00% from last week",
        chartOptions:totalOrderChartData,
        chartType:"area",
        chartClass:"total-order"
    }
]

export const totalSalesData:TotalSalesType[] =[
    {
        icon:"activity",
        color:"primary-light",
        title:"Total Sales",
        amount:"₹98,459",
        detail:"We have sale +18.2k this week."
    },
    {
        icon:"people",
        color:"warning-light",
        title:"Total Visitors",
        amount:"54,156",
        detail:"We have total +3.5k visitors this week."
    },
    {
        icon:"task-square",
        color:"light",
        title:"Total Orders",
        amount:"5,125",
        detail:"We have total +5k orders this week."
    },
    {
        icon:"money-recive",
        color:"danger-light",
        title:"Refunded",
        amount:"₹20,000",
        detail:"We got +66k refund this week."
    }
]

export const saleHistoryBodyData:SaleHistoryBodyType[] = [
    {
        title:"Oxford shirt with rolled sleeve",
        amount:"₹1500.14",
        state:"United States",
        time:"50 min ago"
    },
    {
        title:"Jordans 1 high neck tshirt",
        amount:"₹1800.87",
        state:"Canada",
        time:"40 min ago"
    },
    {
        title:"Graphic Print Men Round Neck Whi...",
        amount:"₹2000.84",
        state:"United States",
        time:"35 min ago"
    },
    {
        title:"Full Sleeve Solid Women Denim Jac...",
        amount:"₹1500.14",
        state:"Australia",
        time:"50 min ago"
    },
    {
        title:"Slim Women Black Jeans",
        amount:"₹780.25",
        state:"UK",
        time:"28 min ago"
    }
]

export const salesChartDropdownData:SalesChartDropdownType[] = [
    {
        color:"primary",
        title:"Men & Women Jeans"
    },
    {
        color:"warning",
        title:"Men & Women T-shirts"
    },
    {
        color:"secondary",
        title:"Men & Women Shoes"
    },
    {
        color:"light",
        title:"Kurtas & Kurti"
    }
]

export const addNewProductData:AddNewProductType[] = [
    {
        color:"primary",
        icon:"box-add",
        title:"Add New Product",
        subTitle:"Images are crucial showcasing"
    },
    {
        color:"primary",
        icon:"receipt-disscount",
        title:"Add Disscount",
        subTitle:"The product images to the platform"
    },
]

export const liveProductTableBodyData:LiveProductTableBodyType[] = [
    {
        image:"6.png",
        productName:"Formal Shirts",
        type:"Men"
    },
    {
        image:"7.png",
        productName:"Loafers",
        type:"Men"
    },
    {
        image:"8.png",
        productName:"Jeans",
        type:"Women"
    },
    {
        image:"9.png",
        productName:"Saree",
        type:"Women"
    }
]

export const latestOrdersTableBodyData:LatestOrdersTableBodyType[] = [
    {
       image :"1.png",
       orderName:"Winter Jecket",
       orderId:"4859578",
       name:"Amit Shah",
       email:"amith14@gmail.com",
       status:"Delivered",
       svgIcon:"fream",
       amount:"₹1500.45",
       paymentDetail:"Google Pay",
       color:"primary" 
    },
    {
        image :"2.png",
        orderName:"Casual Trousere",
        orderId:"4875566",
        name:"Arlene McCoy",
        email:"arlene1@gmail.com",
        status:"Shipped",
        svgIcon:"fream",
        amount:"₹785.62",
        paymentDetail:"Credit Card",
        color:"warning" 
     },
     {
        image :"3.png",
        orderName:"Silk Saree",
        orderId:"7894561",
        name:"Marvin McKinney",
        email:"marvin4@gmail.com",
        status:"Processing",
        svgIcon:"fream",
        amount:"₹2000.02",
        paymentDetail:"Debit Card",
        color:"secondary" 
     },
     {
        image :"4.png",
        orderName:"Men’s Loafers",
        orderId:"1234567",
        name:"Annette Black",
        email:"black45@gmail.com",
        status:"Cancelled",
        svgIcon:"fream",
        amount:"₹1589.25",
        paymentDetail:"Pay Pal",
        color:"light" 
     }
]