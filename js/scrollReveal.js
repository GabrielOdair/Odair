const elementos = document.querySelectorAll(".hidden");

function revelarElementos() {

    const alturaTela = window.innerHeight;

    elementos.forEach((elemento) => {

        const topoElemento = elemento.getBoundingClientRect().top;

        if (topoElemento < alturaTela - 100) {

            elemento.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revelarElementos);

revelarElementos();