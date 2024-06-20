import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { TableColumn } from "react-data-table-component";
import { CustomCellInterFaceProp, RowCreateCallBackData, StockResultTableData } from "../../../../Types/Tables/DataTables/AdvanceInit";

export const stockResultList = [`Data within DataTables can be easily rendered to add graphics or colour to your tables, as demonstrated in the example on this page. These examples make use of columns.render and drawCallback to customise the cells in three ways:`, `1. the colour of the cell is determine by the relative price of the stock.`, `2. a 'sparkline' class is added to the numeric array in the 'last' column.`, `3. The JQuery Sparklines Plugin Is Called To Turn That Array Into A Line Graph.`];

const AreaSpaLine: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [2.57, 2.54, 2.54, 2.56, 2.57, 2.58, 2.59],
    },
  ],
  chart: {
    height: 50,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width:1
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:30:00.000Z", "2022-09-19T02:30:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T04:30:00.000Z", "2022-09-19T05:30:00.000Z", "2022-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

const AreaSpaLine2: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [1.12, 1.11, 1.08, 1.08, 1.09, 1.11, 1.08],
    },
  ],
  chart: {
    height: 50,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width:1
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:30:00.000Z", "2022-09-19T02:30:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T04:30:00.000Z", "2022-09-19T05:30:00.000Z", "2022-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

const AreaSpaLine3: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [3.4, 3.39, 3.46, 3.51, 3.5, 3.48, 3.49],
    },
  ],
  chart: {
    height: 50,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width:1
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:30:00.000Z", "2022-09-19T02:30:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T04:30:00.000Z", "2022-09-19T05:30:00.000Z", "2022-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

const AreaSpaLine4: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [16.2, 16.4, 16.36, 16.35, 16.61, 16.46, 16.19],
    },
  ],
  chart: {
    height: 50,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width:1
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:30:00.000Z", "2022-09-19T02:30:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T04:30:00.000Z", "2022-09-19T05:30:00.000Z", "2022-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

const AreaSpaLine5: ApexOptions = {
  series: [
    {
      name: "series1",
      data: [82.51, 83.47, 83.4, 83.68, 83.81, 83.29, 83.72],
    },
  ],
  chart: {
    height: 50,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width:1
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false, //or just here to disable only x axis grids
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },

    type: "datetime",
    categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:30:00.000Z", "2022-09-19T02:30:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T04:30:00.000Z", "2022-09-19T05:30:00.000Z", "2022-09-19T06:30:00.000Z"],
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          offsetX: -10,
          offsetY: 10,
        },
      },
    },
  ],
  colors: ["#655af3", "#fd2e64"],
};

export const stockResultData = [
  {
    name: "ACME Gadgets",
    symbol: "AGDTS",
    price: "2.57",
    difference: <span style={{ color: "green" }}>0.02</span>,
    last: <ReactApexChart options={AreaSpaLine} series={AreaSpaLine.series} height="50" type="area" />,
  },
  {
    name: "Sole Goodman",
    symbol: "SGMAN",
    price: "16.61",
    difference: <span style={{ color: "green" }}>0.26</span>,
    last: <ReactApexChart options={AreaSpaLine2} series={AreaSpaLine2.series} height="50" type="area" />,
  },
  {
    name: "Spry Media Productions",
    symbol: "SPMP",
    price: "1.09",
    difference: <span style={{ color: "green" }}>0.01</span>,
    last: <ReactApexChart options={AreaSpaLine3} series={AreaSpaLine3.series} height="50" type="area" />,
  },
  {
    name: "Stanler Bits and Bobs",
    symbol: "SBIBO",
    price: "83.81",
    difference: <span style={{ color: "green" }}>0.13</span>,
    last: <ReactApexChart options={AreaSpaLine4} series={AreaSpaLine4.series} height="50" type="area" />,
  },
  {
    name: "Widget Emporium",
    symbol: "WDEMP",
    price: "3.50",
    difference: <span style={{ color: "red" }}>-0.01</span>,
    last: <ReactApexChart options={AreaSpaLine5} series={AreaSpaLine5.series} height="50" type="area" />,
  },
];


export const stockResultColumn : TableColumn<StockResultTableData>[] = [
  {
    name: "Name",
    selector: (row) => row["name"],
    sortable: true,
  },
  {
    name: "Symbol",
    selector: (row) => `${row.symbol}`,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => `${row.price}`,
    sortable: true,
  },
  {
    name: "Difference",
    cell: (row) => row.difference,
    sortable: true,
  },
  {
    name: "Last",
    cell: (row) => row.last,
    sortable: true,
  },
];

export const rowCreateCallData = ["For each row that is generated for display, the createdRow function is called once and once only. It is passed the create row node which can then be modified.", "the 'salary' column Primary and bold by adding a CSS class to the container cell if the salary is greater than $150,000.", "the 'salary' column danger and bold by adding a CSS class to the container cell if the salary is less than $40,000."];

export const rowCreateCallList = [
  {
    name: "Angelica Ramos",
    email: "Angelica@gmail.com",
    experience: "4 Month",
    sex: "Female",
    contactNumber: "+91 8745963210",
    salary: 1200000,
  },
  {
    name: "Bradley Greer",
    email: "Bradley@gmail.com",
    experience: "6 Year",
    sex: "Male",
    contactNumber: "+91 8794561230",
    salary: 132000,
  },
  {
    name: "Brenden Wagner",
    email: "Brenden@gmail.com",
    experience: "2 Year",
    sex: "Female",
    contactNumber: "+91 6589742301",
    salary: 132000,
  },
  {
    name: "Caesar Vance",
    email: "Vance@yahoo.com",
    experience: "1 Year",
    sex: "Male",
    contactNumber: "+91 8596741230",
    salary: 206850,
  },
  {
    name: "Dai Rios",
    email: "Rios@gmail.com",
    experience: "1 Year",
    sex: "Male",
    contactNumber: "+91 7418529630",
    salary: 217500,
  },
  {
    name: "Doris Wilder",
    email: "Wilder@gmail.com",
    experience: "6 Month",
    sex: "Male",
    contactNumber: "+91 6541239870",
    salary: 85600,
  },
  {
    name: "Elana Robbert	",
    email: "ElanaRob@gmail.com	",
    experience: "1 Year	",
    sex: "Male	",
    contactNumber: "+91 9789887777",
    salary: 28000,
  },
  {
    name: "Fiona Green",
    email: "Fiona@yahoo.com",
    experience: "3 Month",
    sex: "Female",
    contactNumber: "+91 6985321470",
    salary: 850000,
  },
  {
    name: "Gavin Cortez",
    email: "Gavin@gmail.com",
    experience: "9 Year",
    sex: "Male",
    contactNumber: "+91 748521369",
    salary: 232500,
  },
  {
    name: "Gavin Joyce",
    email: "Gavin@yahoo.com",
    experience: "8 Month",
    sex: "Male",
    contactNumber: "+91 8596741230",
    salary: 235500,
  },
  {
    name: "Genelia Ottre	",
    email: "Genelia@gmail.com",
    experience: "2 Days",
    sex: "Male",
    contactNumber: "+91 8794562135",
    salary: 92575,
  },
  {
    name: "Gloria Little",
    email: "Gloria@yahoo.com",
    experience: "4 Year",
    sex: "Male",
    contactNumber: "+91 9876541230",
    salary: 24120,
  },
  {
    name: "Jenette Caldwell",
    email: "Jenette@yahoo.com",
    experience: "2 Year",
    sex: "Female",
    contactNumber: "+91 4569871230",
    salary: 237500,
  },
  {
    name: "Jennifer Chang",
    email: "Jennifer@yahoo.com",
    experience: "1 Year",
    sex: "Female",
    contactNumber: "+91 7412589630",
    salary: 345000,
  },
  {
    name: "Michael Silva",
    email: "Michael@yahoo.com",
    experience: "3 Year",
    sex: "Female",
    contactNumber: "+91 1234567891",
    salary: 357650,
  },
  {
    name: "Michelle House",
    email: "Michelle@gmail.com",
    experience: "1 Year",
    sex: "Male",
    contactNumber: "+91 8745961235",
    salary: 198500,
  },
  {
    name: "Paul Byrd",
    email: "Paul@gmail.com",
    experience: "2 Day",
    sex: "Male",
    contactNumber: "+91 3124567894",
    salary: 95400,
  },
  {
    name: "Prescott Bartlett",
    email: "Prescott@gmail.com",
    experience: "8 Year",
    sex: "Male",
    contactNumber: "+91 4578961231",
    salary: 725000,
  },
  {
    name: "Shou Itou",
    email: "Shou@gmail.com",
    experience: "2 Year",
    sex: "Female",
    contactNumber: "+91 3256897414",
    salary: 145000,
  },
  {
    name: "Stiphen Deo",
    email: "Stiphen@yahoo.com",
    experience: "6 Month",
    sex: "Female",
    contactNumber: "+91 9874563210",
    salary: 163000,
  },
  {
    name: "Suki Burks",
    email: "Burks@gmail.com",
    experience: "3 Year",
    sex: "Female",
    contactNumber: "+91 4785961230",
    salary: 22000,
  },
  {
    name: "Yuri Berry",
    email: "Berry@gmail.com",
    experience: "3 Year",
    sex: "Female",
    contactNumber: "+91 7894561230",
    salary: 114500,
  },
];

const CustomCell: React.FC<CustomCellInterFaceProp> = ({ value }) => {
  return <span className={`${value < 40000 ? "text-danger fw-bold" : ""} ${value > 15000 ? "highlight" : ""}`}>${value}</span>;
};

export const rowCreateCallColumn: TableColumn<RowCreateCallBackData>[] = [
  {
    name: "Name",
    selector: (row) => row["name"],
    sortable: true,
  },
  {
    name: "Symbol",
    selector: (row) => `${row.email}`,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => `${row.experience}`,
    sortable: true,
  },
  {
    name: "Sex",
    cell: (row) => row.sex,
    sortable: true,
  },
  {
    name: "Contact Number",
    cell: (row) => row.contactNumber,
    sortable: true,
  },
  {
    name: "Salary",
    cell: (row) => <CustomCell value={row.salary} />,
    sortable: true,
  },
];