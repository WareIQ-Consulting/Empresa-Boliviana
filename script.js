window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});
// ==============================
//  MODAL LOGIN CONTROL
// ==============================

const modal = document.querySelector("#loginModal");
const closeBtn = document.querySelector(".close");
const buttons = document.querySelectorAll(".openModal");
const empresaSeleccionada = document.querySelector("#empresaSeleccionada");

// abrir modal desde cualquier botón
buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        const empresa = btn.dataset.company;

        empresaSeleccionada.textContent = "Empresa seleccionada: " + empresa;

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

