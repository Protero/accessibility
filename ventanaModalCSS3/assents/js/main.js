window.onload = function () {
    const hiddenMimodal = document.getElementById("miModal");
    hiddenMimodal.setAttribute("aria-hidden", "true");
    const enlaces = hiddenMimodal.querySelectorAll("a");
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].setAttribute("tabindex", "-1");
    }
}

document.querySelector("#openModal").addEventListener("click", () => {
    ocultarMostrar();
});

document.querySelector("#closeModal").addEventListener("click", () => {
    ocultarMostrar();
});

const ocultarMostrar = () => {

    const valueContenido = document.getElementById("contenido");
    const valueMimodal = document.getElementById("miModal");
    // const cierre = document.getElementById("closeModal");

    const enlacesContenido = valueContenido.getElementsByTagName("a");
    const enlacesMimodal = valueMimodal.getElementsByTagName("a");

    if (valueMimodal.getAttribute("aria-hidden") == 'true') {

        valueContenido.setAttribute("aria-hidden", "true");
        valueMimodal.setAttribute("aria-hidden", "false");

        for (var i = 0; i < enlacesContenido.length; i++) {
            enlacesContenido[i].setAttribute("tabindex", "-1");
        }

        for (var i = 0; i < enlacesMimodal.length; i++) {
            enlacesMimodal[i].removeAttribute("tabindex");
        }
    }
    else {

        valueContenido.setAttribute("aria-hidden", "false");
        valueMimodal.setAttribute("aria-hidden", "true");
             
        for (var i = 0; i < enlacesContenido.length; i++) {
            enlacesContenido[i].removeAttribute("tabindex");
        }

        for (var i = 0; i < enlacesMimodal.length; i++) {
            enlacesMimodal[i].setAttribute("tabindex", "-1");
        }
    }
}