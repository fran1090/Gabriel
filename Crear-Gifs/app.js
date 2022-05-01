//barra de cantidad de visitas
var visitasN = document.createElement("div"),
    visitasTexto = document.createElement("p"),
    visitasContenido = document.createTextNode("¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de visitas: 12.765.803"),
    encabezado = document.getElementById("encabezado");

visitasTexto.appendChild(visitasContenido);
visitasN.appendChild(visitasTexto);

encabezado.appendChild(visitasN);

visitasN.classList.add("visitasN");
visitasTexto.classList.add("visitasTexto");

//logo + botones
var logoBtn = document.createElement("div");

logoBtn.classList.add("logoBtn");

encabezado.appendChild(logoBtn);

//logo
var logo = document.createElement("div");
logoBtn.appendChild(logo);
logoClaro = logo.innerHTML = '<img src="assets/gifOF_logo.png">';
logo.classList.add("logo");

logo.addEventListener("click", recargaPagina);

function recargaPagina() {
    location.reload();
}

// cuadro de botones 
var cuadroBotones = document.createElement("div");

logoBtn.appendChild(cuadroBotones);
cuadroBotones.classList.add("botones");

//boton "crear Guifos"
var btnCrearGuifos = document.createElement("button"),
    btnCGP = document.createElement("p"),
    btnCGContenido = document.createTextNode("Crear Guifos");

btnCrearGuifos.appendChild(btnCGP);
btnCGP.appendChild(btnCGContenido);
btnCrearGuifos.classList.add("btnEncabezado");
btnCGP.classList.add("btnEncabezadoP");
cuadroBotones.appendChild(btnCrearGuifos);

btnCrearGuifos.addEventListener("click", irCrearGuifos);

function irCrearGuifos() {
    window.location.href = "upload/upload.html";
}

//boton "Elegir Tema"
var cajaContenedora = document.createElement("div"),
    btnElegirTema = document.createElement("button"),
    btnETP = document.createElement("p"),
    btnETContenido = document.createTextNode("Elegir Tema"),
    divFlecha = document.createElement("div");
divFlecha.innerHTML = '<img src="assets/dropdown.svg">',
    cajaTemas = document.createElement("div");
btnSailor = document.createElement("button"),
    btnNight = document.createElement("button");
btnSailor.innerHTML = "Sailor Day";
btnNight.innerHTML = "Night Day";

btnElegirTema.appendChild(btnETP);
btnElegirTema.appendChild(divFlecha);
btnElegirTema.classList.add("btnEncabezado");
btnElegirTema.classList.add("elegirTemaBtn");
divFlecha.classList.add("divFlecha");
btnETP.appendChild(btnETContenido);
btnETP.classList.add("btnEncabezadoP");
cuadroBotones.appendChild(cajaContenedora);
cajaContenedora.appendChild(btnElegirTema);
cajaContenedora.appendChild(cajaTemas);
cajaContenedora.classList.add("cajaContenedora");
cajaTemas.appendChild(btnSailor);
cajaTemas.appendChild(btnNight);
cajaTemas.classList.add("cajaTemas");
btnSailor.classList.add("btnTemas");
btnNight.classList.add("btnTemas");

//desplegable con botones de temas
btnElegirTema.addEventListener("click", despliega);

function despliega() {
    if (cajaTemas.style.display == "none") {
        cajaTemas.style.display = "block";
    } else {
        cajaTemas.style.display = "none"
    };
}

cajaContenedora.addEventListener("mouseleave", cerrarBotones);

function cerrarBotones() {
    cajaTemas.style.display = "none"
}

//boton "Mis Guifos"
var btnMisGuifos = document.createElement("button"),
    btnMGP = document.createElement("p"),
    btnMGContenido = document.createTextNode("Mis GuifOs");

btnMisGuifos.appendChild(btnMGP);
btnMGP.appendChild(btnMGContenido);
btnMisGuifos.classList.add("btnMisG");
btnMGP.classList.add("btnEncabezadoP");
btnMGP.classList.add("btnEstiloMisGuifos");
cuadroBotones.appendChild(btnMisGuifos);

//caja que contiene todo 
var contenedor = document.createElement("div");
encabezado.appendChild(contenedor);
contenedor.classList.add("contenedor");

// barra de busquedas
var barraBusquedas = document.createElement("div"),
    barraBuscar = document.createElement("div");
buscarTexto = document.createElement("p"),
    contenidoBuscar = document.createTextNode("Buscar");

contenedor.appendChild(barraBusquedas);
barraBusquedas.classList.add("barraBusquedas");

barraBusquedas.appendChild(barraBuscar);
barraBuscar.classList.add("visitasN");

barraBuscar.appendChild(buscarTexto);
buscarTexto.classList.add("buscarTexto");

buscarTexto.appendChild(contenidoBuscar);

//barra input

var barraInputBtn = document.createElement("div");
barraInput = document.createElement("input");

barraBusquedas.appendChild(barraInputBtn);
barraInputBtn.classList.add("barraInputBtn");
barraInputBtn.appendChild(barraInput);
barraInput.placeholder = "Busca gifs, hashtags, temas, busca lo que quieras…";
barraInput.maxLength = "30";
barraInput.classList.add("input");

var botonesDesplegablesDiv = document.createElement("div");
contenedor.appendChild(botonesDesplegablesDiv);
botonesDesplegablesDiv.classList.add("botonesDesplegablesDiv");

barraInput.addEventListener("keyup", tildarSoltar);

function tildarSoltar(event) {
    if (barraInput.value != "") {
        let url = "https://api.giphy.com/v1/gifs/search/tags?api_key=" + APIKEY + "&q=";
        let urlBis = url.concat(event.target.value);
        console.log(urlBis);
        fetch(urlBis)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                botonesDesplegablesDiv.style.display = "block";
                botonesDesplegablesDiv.innerHTML = "";
                for (let i = 0; i < 3; i++) {
                    var boton = document.createElement("button");
                    boton.innerHTML = `<p>${content.data[i].name}</p>`;
                    botonesDesplegablesDiv.appendChild(boton);
                    boton.classList.add("botonesDesplegables");
                }
            })
            .catch(err => {
                console.log(err);
            })
    } else {
        botonesDesplegablesDiv.style.display = "none";

    }
}

botonesDesplegablesDiv.addEventListener("click", hacemosClick);

function hacemosClick(event) {
    if (event.target.tagName === "BUTTON") {
        let nombre = event.target.firstElementChild.textContent;
        console.log(nombre);
        let url = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKEY + "&limit=20&q=";
        let urlBis = url.concat(nombre);
        console.log(urlBis);
        fetch(urlBis)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log("META", content.meta);
                for (i = 0; i < 12; i++) {
                    var resultadoBtn = document.getElementById("TendenciasDiv");
                    cajaDeGif.appendChild(resultadoBtn);
                    resultadoBtn.innerHTML = `<img src="${content.data[i].images.downsized.url}" alt="${content.data[i].title}" class="gifosTendencias">`;
                }
            })
            .catch(err => {
                console.log(err);
            })
        botonesDesplegablesDiv.style.display = "none";
        seccionSugerencias.style.display = "none";
        barraInput.value = " ";
        barraTendenciaContenido.innerHTML = nombre + " (resultados)";
    }
}

//boton "buscar"
var btnBuscar = document.createElement("button"),
    btnTexto = document.createElement("p"),
    btnTextoBuscar = document.createTextNode("Buscar");
divImagen = document.createElement("div");
divImagen.innerHTML = '<img src="assets/lupa_inactive.svg">';

barraInputBtn.appendChild(btnBuscar);
btnBuscar.classList.add("btnBuscar");
btnBuscar.appendChild(divImagen);
btnBuscar.appendChild(btnTexto);
btnTexto.appendChild(btnTextoBuscar);
btnTexto.classList.add("btnBuscarTexto");

//barra de sugerencias
var barraS = document.createElement("div"),
    barraContenido = document.createElement("p"),
    contenidoSug = document.createTextNode("Sugerencias");

barraS.appendChild(barraContenido);
barraS.classList.add("barra");

barraContenido.appendChild(contenidoSug);
barraContenido.classList.add("barraContenido");

var seccionSugerencias = document.getElementById("sugerencias");
seccionSugerencias.appendChild(barraS);

// caja de gifs de sugerencias
const APIKEY = "I7i7iYbeoMXsK0C3fd5ecz3FtlCzcmCI";
var barraTopico;
document.addEventListener("DOMContentLoaded", inicio2bis3);
function inicio2bis3() {
    let cajaDeGifSug = document.createElement("div");
    seccionSugerencias.appendChild(cajaDeGifSug);
    cajaDeGifSug.classList.add("cajaGifSugerencias");

    for (i = 0; i < 4; i++) {
        var divGif = document.createElement("div");
        cajaDeGifSug.appendChild(divGif);
        divGif.classList.add("gifosSugerenciasGifDiv");

        var imgGif =document.createElement("div");
        divGif.appendChild(imgGif);
        imgGif.classList.add("gifosSugerenciasGif");

        var barraTopico = document.createElement("div");
        divGif.appendChild(barraTopico);
        barraTopico.classList.add("barraTopicos");

        var topicoTexto = document.createElement("p");
        barraTopico.appendChild(topicoTexto);
        topicoTexto.classList.add("topicoTexto");

        var contenidoTopico = document.createTextNode("#");
        topicoTexto.appendChild(contenidoTopico);

        var imagenCierre = document.createElement("button");
        imagenCierre.innerHTML = '<img src="assets/close.svg">';
        barraTopico.appendChild(imagenCierre);

        var btnVer = document.createElement("button");
        divGif.appendChild(btnVer);
        btnVer.classList.add("btnVer");

        var btnVerP = document.createElement("p");
        btnVer.appendChild(btnVerP);
        btnVerP.classList.add("btnVerP");

        var btnVerPContenido = document.createTextNode("Ver más…");
        btnVerP.appendChild(btnVerPContenido);
    }
 var titleSug = document.getElementsByClassName("topicoTexto");
    titleSug[0].innerHTML ="#Jonathanvanness";
    titleSug[1].innerHTML ="#SailorMercury";
    titleSug[2].innerHTML ="#Risa";
    titleSug[3].innerHTML ="#Unicorns&Rainbows";

    const urlSugerencias3 = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKEY + "&limit=1&q=Jonathanvanness";
    const urlSugerencias4 = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKEY + "&limit=1&q=SailorMercury";
    const urlSugerencias5 = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKEY + "&limit=1&q=risa";
    const urlSugerencias6 = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKEY + "&limit=1&q=Unicorns&Rainbows";
    (function Sug1() {
        fetch(urlSugerencias3)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log("META", content.meta);
                document.getElementsByClassName("gifosSugerenciasGif")[0].innerHTML = `<img src="${content.data[0].images.downsized.url}" alt="${content.data[0].title}" class="gifosSugerencias">`;
            })
            .catch(err => {
                console.log(err);
            });
    }());

    (function Sug2() {
        fetch(urlSugerencias4)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log("META", content.meta);
                document.getElementsByClassName("gifosSugerenciasGif")[1].innerHTML = `<img src="${content.data[0].images.downsized.url}" alt="${content.data[0].title}" class="gifosSugerencias">`;
            })
            .catch(err => {
                console.log(err);
            });
    }());

    (function Sug3() {
        fetch(urlSugerencias5)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log(content.data[0])
                console.log("META", content.meta);
                document.getElementsByClassName("gifosSugerenciasGif")[2].innerHTML = `<img src="${content.data[0].images.downsized.url}" alt="${content.data[0].title}" class="gifosSugerencias">`;
            })
            .catch(err => {
                console.log(err);
            });
    }());

    (function Sug4() {
        fetch(urlSugerencias6)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log("META", content.meta);
                document.getElementsByClassName("gifosSugerenciasGif")[3].innerHTML = `<img src="${content.data[0].images.downsized.url}" alt="${content.data[0].title}" class="gifosSugerencias">`;
            })
            .catch(err => {
                console.log(err);
            });
    }());

}
    
//  barra de tendencias
var barraT = document.createElement("div"),
    barraTendenciaContenido = document.createElement("p"),
    contenido = document.createTextNode("Tendencias");

barraT.appendChild(barraTendenciaContenido);
barraT.classList.add("barra");

barraTendenciaContenido.appendChild(contenido);
barraTendenciaContenido.classList.add("barraContenido");

var seccionTendencias = document.getElementById("tendencias");
seccionTendencias.appendChild(barraT);

// caja de gifs de tendencias
const urlTendencias = "https://api.giphy.com/v1/gifs/trending?api_key=" + APIKEY + "&limit=12";
var cajaDeGif = document.createElement("div");
document.addEventListener("DOMContentLoaded", inicio);

function inicio() {
    seccionTendencias.appendChild(cajaDeGif);
    cajaDeGif.classList.add("cajaDeGif");

    fetch(urlTendencias)
        .then(response => response.json())
        .then(content => {
            console.log(content.data);
            console.log("META", content.meta);
            for (i = 0; i < 12; i++) {
                var divGif = document.createElement("div");
                cajaDeGif.appendChild(divGif);
                divGif.setAttribute("id", "TendenciasDiv");
                divGif.innerHTML = `<img src="${content.data[i].images.downsized.url}" alt="${content.data[i].title}" class="gifosTendencias">`;
            };

        })
        .catch(err => {
            console.log(err);
        })
}



//barra de buscarBoton
/*
barraInput.addEventListener("keypress", nuevamenteClick);

function nuevamenteClick(event){
    if(barraInput != ""){
        let nombre2 = event.target.value.barraInput;
        let url2 = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKEY + "&limit=20&q=";
        let urlBis2 = url2.concat(nombre2);
        console.log(urlBis2);
        fetch(urlBis2)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log("META", content.meta);
                for (i = 0; i < 12; i++) {
                    var resultadoBtn = document.getElementById("TendenciasDiv");
                    cajaDeGif.appendChild(resultadoBtn);
                    resultadoBtn.innerHTML = `<img src="${content.data[i].images.downsized.url}" alt="${content.data[i].title}" class="gifosTendencias">`;
                }
            })
            .catch(err => {
                console.log(err);
            })
        botonesDesplegablesDiv.style.display = "none";
        seccionSugerencias.style.display = "none";
        barraInput.value = " ";
    }
    
    }*/

//botón de buscar
btnBuscar.addEventListener("click", buscarBoton);

function buscarBoton(){
    if(barraInput.value.length >=1){
        let nombre = barraInput.value;
        let url = "https://api.giphy.com/v1/gifs/search?api_key=" + APIKEY + "&limit=20&q=";
        let urlBis = url.concat(nombre);
        console.log(urlBis);
        fetch(urlBis)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log("META", content.meta);
                for (i = 0; i < 12; i++) {
                    var resultadoBtn = document.getElementById("TendenciasDiv");
                    cajaDeGif.appendChild(resultadoBtn);
                    resultadoBtn.innerHTML = `<img src="${content.data[i].images.downsized.url}" alt="${content.data[i].title}" class="gifosTendencias">`;
                }
            })
            .catch(err => {
                console.log(err);
            })
        console.log("hola");
        botonesDesplegablesDiv.style.display = "none";
        barraInput.value = " ";
        seccionSugerencias.style.display = "none";
        barraTendenciaContenido.innerHTML = nombre + " (resultados)";
    }
}

//cambiar de tema
var body = document.getElementById("body");
btnNight.addEventListener("click", temaOscuro);

function temaOscuro() {
    body.style.backgroundColor = "#110038";
    logo.innerHTML = '<img src="assets/gifOF_logo_dark.png">';
    visitasN.classList.add("visitasNN");
    barraBuscar.classList.add("visitasNN");
    btnCrearGuifos.classList.add("btnEncabezadoN");
    btnElegirTema.classList.add("btnEncabezadoN");
    btnCGP.classList.add("btnEncabezadoPN");
    btnETP.classList.add("btnEncabezadoPN");
    btnMGP.classList.add("btnEncabezadoPN");
    btnMisGuifos.classList.add("btnMisGN");
    barraInputBtn.classList.add("barraInputBtnN");
    btnBuscar.classList.add("btnBuscarN");
    btnTexto.classList.add("btnBuscarTextoN");
    divImagen.innerHTML = '<img src="assets/lupa.svg">';
    barraS.classList.add("barraN");
    barraT.classList.add("barraN");
    cajaTemas.style.backgroundColor = "#B4B4B4";
    cajaTemas.style.boxShadow = "inset -2px -2px 0 0 #8F8F8F, inset 2px 2px 0 0 #FFFFFF";
    btnSailor.classList.add("btnTemasN");
    btnNight.classList.add("btnTemasN");
    document.getElementsByClassName("btnVer")[0].classList.add("btnVerN");
    document.getElementsByClassName("btnVer")[1].classList.add("btnVerN");
    document.getElementsByClassName("btnVer")[2].classList.add("btnVerN");
    document.getElementsByClassName("btnVer")[3].classList.add("btnVerN");
    document.getElementsByClassName("barraTopicos")[0].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)";
    document.getElementsByClassName("barraTopicos")[1].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)";
    document.getElementsByClassName("barraTopicos")[2].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)";
    document.getElementsByClassName("barraTopicos")[3].style.backgroundImage = "linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)";
    //boton.classList.add("botonesDesplegablesN");
    botonesDesplegablesDiv.classList.add("botonesDesplegablesDivN");
    cajaTemas.style.display = "none";
}

var body = document.getElementById("body");
btnSailor.addEventListener("click", temaClaro);

function temaClaro() {

    location.reload();
}

//click en boton mis guifos
btnMisGuifos.addEventListener("click", misGuifos);

function misGuifos(cajaDeGif) {
    seccionSugerencias.style.display = "none";
    barraTendenciaContenido.innerHTML = "Mis guifos";
    contenedor.style.display = "none";
    cajaDeGif.style.display = "none";
}

// click en boton crear guifos
btnCrearGuifos.addEventListener("click", crearGuifos);

function crearGuifos() {
    cuadroBotones.style.display = "none";
    seccionSugerencias.style.display = "none";
    barraBusquedas.style.display = "none";
    botonesDesplegablesDiv.style.display = "none";
    barraTendenciaContenido.innerHTML = "Mis guifos";

    contenedor.innerHTML = "hola";
}