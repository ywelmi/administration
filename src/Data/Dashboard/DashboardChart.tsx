import { ApexOptions } from "apexcharts";

const primary = "#006666";
const secondary = "#FE6A49";

export const salesChartData: ApexOptions = {
  series: [
    {
      name: "Revenue",
      data: [
        1000, 3900, 2500, 7400, 5800, 8000, 4200, 5800, 3100, 7100, 1000, 8200,
      ],
    },
    {
      name: "Orders",
      data: [
        3800, 4300, 3400, 3300, 3000, 1800, 5900, 5600, 4200, 6000, 3900, 8400,
      ],
    },
  ],
  colors: [primary, "#FFAE1A"],
  chart: {
    height: 280,
    type: "area",
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
        pan: false,
        download: false,
      },
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 2,
      left: 1,
      blur: 2,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
      shadeIntensity: 0.2,
    },
  },
  grid: {
    strokeDashArray: 5,
    xaxis: {
      lines: {
          show: true,
        },
    },
    yaxis: {
        lines: {
            show: false,
        },
    },
  },
  annotations: {
    yaxis: [
      {
        y: 5800,
        label: {
          borderColor: "#00E396",
          style: {
            color: "#fff",
            background: "#00E396",
          },
        },
      },
    ],
  },
  yaxis: {
    labels: {
      style: {
        colors: ["var(--body-font-color)"],
      },
    },
  }, 
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisTicks: {
      show: false
    },
    axisBorder: {
        show: false
    },
    tooltip: {
      enabled: false,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        series: [
          {
            name: "Revenue",
            data: [1000, 3900, 2500, 7400, 5800, 8000, 4200],
          },
          {
            name: "Orders",
            data: [3800, 4300, 3400, 3300, 3000, 1800, 5900],
          },
        ],
      },
    },
  ],
  tooltip: {
    x: {
      format: "dd/MM/YYYY",
      show: true,
    },
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="px-4 py-1 position-relative ">' +
        '<span class="fs-3">' +
        "K" +
        series[seriesIndex][dataPointIndex] +
        "</span>" +
        "<br>" +
        '<span class="align-middle text-content">' +
        "Orders" +
        "</span>" +
        "</div>"
      );
    },
  },
};

export const revenueChartData: ApexOptions = {
  series: [
    {
      name: "Net Profit",
      data: [80, 45, 70, 100, 87, 90, 80, 87, 85, 100, 100, 75],
    },
    {
      name: "Revenue",
      data: [40, 55, 35, 50, 61, 45, 50, 20, 50, 85, 50, 100],
    },
  ],
  colors: [primary, "#E6E9EB"],
  chart: {
    type: "bar",
    height: 120,
    width: 145,
    offsetY: -20,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "77%",
      borderRadius: 1,
    },
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  legend: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  responsive: [
    {
      breakpoint: 1599,
      options: {
        chart: {
          width: 140,
        },
      },
    },
  ],
};

export const totalOrderChartData: ApexOptions = {
  series: [
    {
      name: "sale-1",
      data: [16, 28, 45, 43, 32, 44, 35, 30],
    },
    {
      name: "sale-2",
      data: [22, 32, 42, 20, 35, 42, 25, 45],
    },
  ],
  fill: {
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
      shadeIntensity: 0.2,
    },
  },
  colors: [primary, primary],
  chart: {
    height: 120,
    type: "area",
    offsetY: -17,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 1,
    dashArray: [0, 4],
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  responsive: [
    {
      breakpoint: 1499,
      options: {
        chart: {
          width: 140,
        },
      },
    },
  ],
};

export const totalRevenueProductChartData: ApexOptions = {
  series: [60000, 10000, 90000, 80000],
  chart: {
    height: 240,
    type: "donut",
  },
  stroke: {
    width: 0,
  },
  labels: ["Women Jeans", "Women T-shirts", "Women Shoes", "Kurtas & Kurti"],
  colors: [
    "var(--theme-secondary)",
    "#80b3b3",
    "var(--theme-default)",
    "#FFAE1A",
  ],
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 280,
        },
      },
    },
  ],
  legend: {
    show: false,
    offsetY: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "80%",
        labels: {
          show: true,
          name: {
            show: true,
            color: "#dfsda",
            offsetY: 16,
          },
          value: {
            show: true,
            color: undefined,
            offsetY: -25,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            label: "Total",
            color: "#86909C",
          },
        },
      },
    },
  },
};

export const visitsChartData: ApexOptions = {
  series: [
    {
      name: "Chrome",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Firefox",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Firefox",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
  ],
  colors: ["var(--theme-default)", "#80B3B3", "#CCE0E0"],
  chart: {
    type: "bar",
    height: 325,
    stacked: true,
    toolbar: {
      show: false,
      tools: {
        download: false,
      },
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetY: 2,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "28%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    show: false,
  },
};

export const revenueGrowthChart: ApexOptions = {
  series: [
    {
      name: "Online Sale",
      data: [100, 155, 175, 160, 200, 200, 250, 130, 145, 250, 150, 250],
    },
    {
      name: "Marketing Sale",
      data: [45, 75, 85, 45, 145, 90, 45, 110, 65, 35, 105, 105],
    },
  ],
  colors: ["#006666", "#FFAE1A"],
  chart: {
    type: "area",
    height: 315,
    toolbar: {
      tools: {
        zoom: false,
        zoomin: false,
        zoomout: false,
        reset: false,
        pan: false,
        download: false,
      },
    },
  },
  fill: {
    gradient: {
      opacityFrom: 0.2,
      opacityTo: 0,
      shadeIntensity: 0.2,
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 7,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 8,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 9,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 10,
        fillColor: "#fff",
        strokeColor: "#006666",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 1,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 3,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 6,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 7,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 8,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 9,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 1,
        dataPointIndex: 10,
        fillColor: "#fff",
        strokeColor: "#FFAE1A",
        size: 3,
        shape: "circle",
      },
    ],
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: "stepline",
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    borderColor: "#86909C",
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: [
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
          "var(--body-font-color)",
        ],
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ["var(--body-font-color)"],
      },
      formatter: (value) => {
        return `${value}$`;
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Marketing Sale" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
  responsive: [
    {
      breakpoint: 425,
      options: {
        series: [
          {
            name: "Online Sale",
            data: [100, 155, 175, 160, 200, 200, 250],
          },
          {
            name: "Marketing Sale",
            data: [45, 75, 85, 45, 145, 90, 45],
          },
        ],
      },
    },
  ],
};

export const revenueGrowthDetailsData = [
  {
    title: "Total Sales",
    amount: "$56.265.08",
    percentage: "+40.15% than",
  },
  {
    title: "Total Purchase",
    amount: "$42,256.26",
    percentage: "-20.25% than",
  },
  {
    title: "Total Returns",
    amount: "$5,215.62",
    percentage: "+18.15% than",
  },
];

export const bestSellingProductChartData = {
  polar: {
    radius: [30, "80%"],
  },
  angleAxis: {
    max: 4,
    startAngle: 90,
  },
  radiusAxis: {
    type: "category",
  },
  tooltip: {},
  series: {
    type: "bar",
    data: [
      { value: 2, itemStyle: { color: "#86909C" } },
      { value: 2.2, itemStyle: { color: "#FF8367" } },
      { value: 2.4, itemStyle: { color: "#FFAE1A" } },
      { value: 3.4, itemStyle: { color: primary } },
    ],
    coordinateSystem: "polar",
    label: {
      show: false,
      position: "middle",
      formatter: "{b}: {c}",
    },
  },
};
