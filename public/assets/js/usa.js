import { options, dataChart } from "./chart.js";
import { getToken } from "./jwt.js";
import { doRequest, change, changeButton, loadingSpinner } from "./request.js";

const form = document.getElementById("js-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  changeButton();
  try {
    const [{ value: email }, { value: password }] = e.target;
    const JWT = await getToken({ email, password });
    localStorage.setItem("token", JWT);
    console.log("token: " + JWT);
    loadingSpinner()
    change();
    renderChart(JWT)    
  } catch (error) {
    localStorage.clear();
    alert("Ha ocurrido un error", document.location.reload(false));
    console.error(`Error ${error}`);
  }
});

const boton = document.getElementById("close");
boton.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

const renderChart = async(JWT) =>{
  const llamada = ["confirmed", "deaths", "recovered"];
  const datosPromesas = llamada.map((ruta) => doRequest(ruta, JWT));

  const [confirmados, muertos, recuperados] = await Promise.all(
    datosPromesas
  );
  const fechas = confirmados
    .filter((e) => e.date.slice(-2) === "20" || e.date.slice(-2) === "21")
    .map((e) => e.date);
  const confirmadosTotal = confirmados
    .filter((e) => e.date.slice(-2) === "20" || e.date.slice(-2) === "21")
    .map((e) => e.total);
  const muertosTotal = muertos
    .filter((e) => e.date.slice(-2) === "20" || e.date.slice(-2) === "21")
    .map((e) => e.total);
  const recuperadosTotal = recuperados
    .filter((e) => e.date.slice(-2) === "20" || e.date.slice(-2) === "21")
    .map((e) => e.total);
    new Chart(document.getElementById("myChart2"), {
      type: "line",
      data: dataChart(confirmadosTotal, recuperadosTotal, muertosTotal, fechas),
      options: options,
    });
}
(async () => {
  const JWT = localStorage.getItem("token");
  if (JWT) {
    loadingSpinner()
    change();
    renderChart(JWT);
  }
})();
 