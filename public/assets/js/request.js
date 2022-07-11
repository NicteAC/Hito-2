export const doRequest = async (ruta, JWT) => {
  const promesa = await fetch(`/api/${ruta}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWT}`,
    },
  });
  const { data } = await promesa.json();
  return data;
};
export const change = () => {
  $("#js-form").toggle();
  const close = document.getElementById("close-sesion");
  close.classList.toggle("d-none");
};

export const changeButton = () => {
  document.getElementById("button").classList.toggle("d-none");
  const loading = document.getElementById("loading");
  loading.innerHTML += `
    <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
  `;
};
 export const loadingSpinner = () =>{
  const loader = document.getElementById("loader");
  loader.innerHTML += `
  <div class="loader">
    <div class="spinner-border text-info" role="status">
     <span class="visually-hidden">Loading...</span>
    </div>
  </div>
`;
  setTimeout(() => {
    $("#loader").toggle();
  }, 9000);
 }