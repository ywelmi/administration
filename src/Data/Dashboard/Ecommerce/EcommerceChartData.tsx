import { ApexOptions } from "apexcharts";

export const projectStatisticsChartData: ApexOptions = {
  series: [
    {
      name: "Web App Design",
      data: [85, 85, 152, 95, 50, 95, 130],
    },
    {
      name: "Website Design",
      data: [190, 135, 220, 160, 65, 160, 185],
    },
    {
      name: "App Design",
      data: [245, 165, 260, 230, 110, 170, 245],
    },
  ],
  colors: ["var(--theme-default)", "#80B3B3", "#CCE0E0"],
  chart: {
    type: "bar",
    height: 412,
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
      horizontal: false,
      borderRadius: 6,
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  legend: {
    position: "bottom",
    offsetY: 5,
  },
  fill: {
    opacity: 1,
  },
};

export const radialChart_1: ApexOptions = {
  series: [75],
  chart: {
    height: 90,
    type: "radialBar",
    offsetX: -5,
    offsetY: -15,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "10px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: ["var(--theme-default)"],

  stroke: {
    lineCap: "round",
  },
};

// radial 2
export const radialChart_2: ApexOptions = {
  series: [50],
  chart: {
    height: 90,
    type: "radialBar",
    offsetX: -5,
    offsetY: -15,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "12px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: ["var(--theme-default)"],

  stroke: {
    lineCap: "round",
  },
};
// radial 3
export const radialChart_3: ApexOptions = {
  series: [25],
  chart: {
    height: 90,
    type: "radialBar",
    offsetX: -5,
    offsetY: -15,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "12px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: ["var(--theme-default)"],

  stroke: {
    lineCap: "round",
  },
};
// radial 4
export const radialChart_4: ApexOptions = {
  series: [86],
  chart: {
    height: 90,
    type: "radialBar",
    offsetX: -5,
    offsetY: -15,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "12px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: ["var(--theme-default)"],

  stroke: {
    lineCap: "round",
  },
};

// radial 5
export const radialChart_5: ApexOptions = {
  series: [74],
  chart: {
    height: 90,
    type: "radialBar",
    offsetX: -5,
    offsetY: -15,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%",
      },
      track: {
        background: "var(--theme-default)",
        opacity: 0.2,
      },
      dataLabels: {
        value: {
          color: "var(--tag-text-color--edit)",
          fontSize: "12px",
          show: true,
          offsetY: -12,
        },
      },
    },
  },
  colors: ["var(--theme-default)"],

  stroke: {
    lineCap: "round",
  },
}
