import { ArcElement, BarController, BarElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, RadialLinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarController, BarElement, ArcElement, RadialLinearScale);

const primary = "#006666";
const secondary = "#FE6A49";

export const chartJsBarChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(0, 102, 102, 0.4)",
      borderColor: primary,
      borderWidth: 2,
      data: [35, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(254, 106, 73, 0.4)",
      borderColor: secondary,
      data: [28, 48, 40, 19, 86, 27, 90],
      borderWidth: 2,
    },
  ],
};

export const chartJsBarChartDataOption = {
  responsive: true,
  legend: {
    display: false,
  },
};

export const lineGraphChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: true,
      label: "My First dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      pointBackgroundColor: secondary,
      pointHoverBorderColor:secondary,
      borderColor:secondary,
      backgroundColor:"rgba(254, 106, 73, 0.2)"
    },
    {
      fill: true,
      data: [10, 59, 80, 81, 56, 55, 40],
      label: "My Second dataset",
      pointBackgroundColor: primary,
      pointHoverBorderColor:primary,
      borderColor:primary,
      backgroundColor:"rgba(0, 102, 102, 0.2)"
    },
  ],
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
  },
};

export const lineGraphChartDataOption= {
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,.05)',
          lineWidth: 1,
        },
        display: true,
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,.05)',
          lineWidth: 1,
        },
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 4,
        pointBorderWidth: 1,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor:"#fff"
      },
      line: {
        tension: 0.4,
      },
    },
  }

export const radarGraphChartData = {
  labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
  datasets: [
    {
      label: "My First Dataset",
      data: [12, 3, 5, 18, 7],
      fill: true,
      backgroundColor: "rgba(0, 102, 102, 0.4)",
      borderColor: primary,
      borderWidth: 1,
      pointColor: primary,
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  },
};

export const lineChartData = {
  labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
  datasets: [
    {
      fill: true,
      backgroundColor: "rgba(0, 102, 102, 0.2)",
      borderColor: primary,
      pointColor: primary,
      data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
      borderWidth: 2,
    }, 
    {
      fill: true,
      backgroundColor: "rgba(254, 106, 73, 0.2)",
      pointColor: secondary,
      borderColor: secondary,
      data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
      borderWidth: 2,
    },
    {
      fill: true, 
      backgroundColor: "rgba(0, 102, 102, 0.2)",
      borderColor: primary, 
      pointColor: primary,
      data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
      borderWidth: 2,
    },
  ],
};

export const lineChartDataOption = {
  maintainAspectRatio: true,
  animation: {
    duration: 0,
  },
  scaleShowVerticalLines: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};

export const doughnutChartData = {
  labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [primary, secondary, '#51bb25'],
    },
  ],
};

export const doughnutChartDataOption= {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: 'white',
    },
    legend: {
      display: false,
    },
  },
};

export const polarChartData = {
  labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: [primary, '#f8d62b', '#51bb25', '#173878', secondary],
    },
  ],
};

export const polarChartDataOption= {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: 'white',
    },
    legend: {
      display: false,
    },
  },
};