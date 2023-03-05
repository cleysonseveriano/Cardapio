const formRegister = document.getElementById("formRegister");
const telaLogin = document.getElementById("telaLogin");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  formRegister.classList.toggle("active");
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    btn.innerHTML = "Registrar";
  } else {
    btn.innerHTML = "Login";
  }
});
