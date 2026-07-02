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

// Botón que abre el modal
const openModalBtn = document.querySelector("#openModal");

// El modal
const modal = document.querySelector(".modal");

// Botón cerrar (X)
const closeBtn = document.querySelector(".close");


// Abrir modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});


// Cerrar modal con la X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


// Cerrar modal haciendo clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
