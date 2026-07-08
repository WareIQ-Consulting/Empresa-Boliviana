window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});
// ==============================
// USUARIOS DEL SISTEMA
// ==============================

const usuarios = [

    {
        empresa: "Compañía de Alimentos LTDA. (Bolivia)",
        usuario: "admin_alimentos",
        password: "123456",
        dashboard: "dashboard-alimentos.html"
    },

    {
        empresa: "Ransa (Bolivia)",
        usuario: "admin_ransa",
        password: "123456",
        dashboard: "dashboard-ransa.html"
    },

    {
        empresa: "Sister Moon Hotel (Panamá)",
        usuario: "admin_sister",
        password: "123456",
        dashboard: "dashboard-sister.html"
    },

    {
        empresa: "Move (Bolivia)",
        usuario: "admin_move",
        password: "123456",
        dashboard: "dashboard-move.html"
    }

];

// ==============================
//  MODAL LOGIN CONTROL
// ==============================

const modal = document.querySelector("#loginModal");
const closeBtn = document.querySelector(".close");
const buttons = document.querySelectorAll(".openModal");
const empresaSeleccionada = document.querySelector("#empresaSeleccionada");
const empresaSelect = document.querySelector("#empresa");

const loginForm = document.querySelector("#loginForm");
const usuarioInput = document.querySelector("#usuario");
const passwordInput = document.querySelector("#password");
const mensajeLogin = document.querySelector("#mensajeLogin");

// abrir modal desde cualquier botón
buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        const empresa = btn.dataset.company;

        console.log(empresa);

        empresaSeleccionada.textContent = "Empresa seleccionada: " + empresa;

        empresaSelect.value = empresa;

        console.log(empresaSelect.value);

        modal.style.display = "flex";

    });
});

// cerrar con X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// cerrar clic fuera
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// Cerrar modal con la tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
    }
});
// ==============================
// LOGIN
// ==============================

loginForm.addEventListener("submit", function(e){

    e.preventDefault();
console.log("Formulario enviado");
    const empresa = empresaSelect.value;
    const usuario = usuarioInput.value.trim();
    const password = passwordInput.value.trim();
   
    if(usuario === ""){

    mensajeLogin.style.color = "#ff4d4d";
    mensajeLogin.textContent = "Ingrese su usuario.";

    return;

}

if(password === ""){

    mensajeLogin.style.color = "#ff4d4d";
    mensajeLogin.textContent = "Ingrese su contraseña.";

    return;

}

    const usuarioValido = usuarios.find(user =>

    user.empresa === empresa &&
    user.usuario === usuario &&
    user.password === password

);

if(!usuarioValido){

    mensajeLogin.style.color = "#ff4d4d";

    mensajeLogin.textContent = "Usuario o contraseña incorrectos.";

    return;

}

mensajeLogin.style.color = "#00c853";

mensajeLogin.textContent = `Bienvenido ${usuario}.`;

    
    setTimeout(() => {

    window.location.href = usuarioValido.dashboard;

},1500);
    
});
