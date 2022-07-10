export const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

export const dataChart = (
  confirmadosTotal,
  recuperadosTotal,
  muertosTotal,
  fechas
) => {
  return ({
    labels: fechas,
    datasets: [
      {
        label: "Casos confirmados",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: confirmadosTotal,
        borderWidth: 1,
      },
      {
        label: "Casos Recuperados",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        data: recuperadosTotal,
        borderWidth: 1,
      },
      {
        label: "Casos Fallecidos",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        data: muertosTotal,
        borderWidth: 1,
      },
    ],
  });
};
