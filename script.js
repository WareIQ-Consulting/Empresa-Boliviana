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

const openModalBtn = document.querySelector("#openModal");
const modal = document.querySelector("#loginModal");
const closeBtn = document.querySelector(".close");

// abrir modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// cerrar con X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// cerrar haciendo click fuera
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
