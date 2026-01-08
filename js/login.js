const formLogin = document.getElementById("form-login");
const formRegistro = document.getElementById("form-registro");
const tabs = document.querySelectorAll(".tab");

function mostrarLogin() {
  formLogin.classList.add("active");
  formRegistro.classList.remove("active");
  tabs[0].classList.add("active");
  tabs[1].classList.remove("active");
}

function mostrarRegistro() {
  formRegistro.classList.add("active");
  formLogin.classList.remove("active");
  tabs[1].classList.add("active");
  tabs[0].classList.remove("active");
}


const rolRegistro = document.getElementById("rolRegistro");
const passwordEmpleado = document.getElementById("passwordEmpleado");

rolRegistro.addEventListener("change", () => {
  if (rolRegistro.value === "empleado") {
    passwordEmpleado.style.display = "block";
    passwordEmpleado.required = true;
  } else {
    passwordEmpleado.style.display = "none";
    passwordEmpleado.required = false;
    passwordEmpleado.value = "";
  }
});
