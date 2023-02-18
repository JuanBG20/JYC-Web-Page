// Zoom de Imagen
const overlay = document.getElementById("overlay");
const imgPr = document.querySelectorAll(".imgPr");
const imgOverlay = document.querySelector("#overlay img");
const btnCerrar = document.getElementById("btnCerrar");

imgPr.forEach((img) => {
    img.addEventListener("click", () => {
        const srcImg = img.getAttribute("src");

        overlay.style.display = "flex";

        imgOverlay.setAttribute("src", srcImg);
    });
});

btnCerrar.addEventListener("click", () => {
    overlay.style.display = "none";
});

overlay.addEventListener("click", (posicionClick) => {
    posicionClick.target.id == "overlay" ? overlay.style.display = "none" : "";
});