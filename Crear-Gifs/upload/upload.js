//CREAR GUIFOS - PANTALLA 1
//barra de cantidad de visitas
var encabezado = document.getElementById("encabezado"),
    visitasN = document.createElement("div");
encabezado.appendChild(visitasN);
visitasN.classList.add("visitasN");

var visitasTexto = document.createElement("p");
visitasN.appendChild(visitasTexto);
visitasTexto.classList.add("visitasTexto");

var visitasContenido = document.createTextNode("¡Bienvenidos/as a Guifos.com! ——————Donde los gifs están.////// Número de visitas: 12.765.803");
visitasTexto.appendChild(visitasContenido);

//logo + botones (pero no estan los btn)
var logoBtn = document.createElement("div");
encabezado.appendChild(logoBtn);
logoBtn.classList.add("logoBtn");

//logo + flecha
var logoFlecha = document.createElement("div");
logoBtn.appendChild(logoFlecha);
logoFlecha.classList.add("logoFlecha");

var flecha = document.createElement("div");
flecha.innerHTML = '<img src="../assets/arrow.svg">';
logoFlecha.appendChild(flecha);
flecha.classList.add("flecha");

var logo = document.createElement("div");
logo.innerHTML = '<img src="../assets/gifOF_logo.png">';
logoFlecha.appendChild(logo);
logo.classList.add("logo");

logoFlecha.addEventListener("click", paginaAnterior);
function paginaAnterior() {
    window.location.href = "../index.html";
}

//cuadro crear guifos
var cajaCrearGuifos = document.createElement("div");
encabezado.appendChild(cajaCrearGuifos);
cajaCrearGuifos.classList.add("cajaCrearGuifos");

var tituloCrearGuifos = document.createElement("div");
tituloCrearGuifos.innerHTML = "Crear Guifos";
cajaCrearGuifos.appendChild(tituloCrearGuifos);
tituloCrearGuifos.classList.add("visitasN");
tituloCrearGuifos.style.height = "5%";
tituloCrearGuifos.style.boxShadow = "0 0 0 0";
tituloCrearGuifos.style.color = "#ffff";

var cuerpoCrearGuifos = document.createElement("div");
cajaCrearGuifos.appendChild(cuerpoCrearGuifos);
cuerpoCrearGuifos.classList.add("cuerpoCrearGuifos");

var imagenventana = document.createElement("div");
cuerpoCrearGuifos.appendChild(imagenventana);
imagenventana.classList.add("imagenventana");

var ventanaW = document.createElement("div");
imagenventana.appendChild(ventanaW);
ventanaW.classList.add("ventanaW");
ventanaW.innerHTML = "<img src='../assets/window.png' alt='ventana'>";

var textoCrearGuifos = document.createElement("div");
cuerpoCrearGuifos.appendChild(textoCrearGuifos);
textoCrearGuifos.classList.add("textoCrearGuifos");

var textoCuerpoGif = document.createElement("div");
textoCrearGuifos.appendChild(textoCuerpoGif);
textoCuerpoGif.classList.add("textoCuerpoGif");
textoCuerpoGif.innerHTML = "<p><b>Aquí podrás crear tus propios guifos</b></p>";

var instruccionesCuerpoGif = document.createElement("div");
textoCrearGuifos.appendChild(instruccionesCuerpoGif);
instruccionesCuerpoGif.classList.add("instruccionesCuerpoGif");
instruccionesCuerpoGif.innerHTML = "Crear tu guifo es muy fácil, graba cualquier imagen con tu cámara y obtén guifos personalizados. Los pasos para crear tu guifo son:" + "<br>" + "<br>"
    + "1) Dar permisos de acceso a la cámara (sólo por el tiempo de uso)" + "<br>" + "<br>"
    + "2) Capturar tu momento guifo" + "<br>" + "<br>"
    + "3) Revisar el momento" + "<br>" + "<br>"
    + "4) Listo para subir y compartir!" + "<br>" + "<br>"
    + "¿Quieres comenzar a crear tu guifo ahora?" + "<br>"
instruccionesCuerpoGif.style.fontSize = "12px";

var botonesCrearGuifos = document.createElement("div");
botonesCrearGuifos.classList.add("botonesCrearGuifos");
textoCrearGuifos.appendChild(botonesCrearGuifos);

var botonCancelar = document.createElement("button");
botonCancelar.classList.add("botonCrear");
botonCancelar.innerHTML = "Cancelar";
botonesCrearGuifos.appendChild(botonCancelar);
botonCancelar.addEventListener("click", paginaAnterior);

var botonAceptar = document.createElement("button");
botonAceptar.classList.add("botonCrear");
botonAceptar.innerHTML = "Aceptar";
botonesCrearGuifos.appendChild(botonAceptar);

//barra de sugerencias
var barraS = document.createElement("div"),
    barraContenido = document.createElement("p"),
    cajaDeGuif = document.createElement("div");

encabezado.appendChild(barraS);
barraS.appendChild(barraContenido);
barraS.classList.add("barra");
barraContenido.innerHTML = "MisGuifos";
barraContenido.style.fontSize = "14px";
barraContenido.style.marginLeft = "20px";
encabezado.appendChild(cajaDeGuif);
cajaDeGuif.classList.add("cajaDeGuif");

//UN CHEQUEO ANTES DE EMPEZAR - PANTALLA 2

botonAceptar.addEventListener("click", btnAceptar);

function btnAceptar() {
    logoFlecha.addEventListener("click", pantalla1);
    function pantalla1() {
        window.location.href = "../upload/upload.html";
    }
    barraS.style.display = "none";
    cajaDeGuif.style.display = "none";
    imagenventana.style.display = "none";
    textoCrearGuifos.style.display = "none";
    tituloCrearGuifos.innerHTML = "Un Chequeo Antes de Empezar";

    var imagenCamara = document.createElement("div");
    imagenCamara.setAttribute("class", "imagenCamara");
    imagenCamara.style.display = "flex";
    imagenCamara.style.justifyContent = "center";
    imagenCamara.style.alignItems = "center";
    cuerpoCrearGuifos.appendChild(imagenCamara);

    var video = document.createElement("video");
    video.setAttribute("class", "video");
    imagenCamara.appendChild(video);
    video.setAttribute("id", "video");

    var canvas = document.createElement("canvas");
    imagenCamara.appendChild(canvas);


    canvas.setAttribute("class", "canvas");
    canvas.setAttribute("id", "canvas");
    var context = canvas.getContext("2d");

    var cajabtn = document.createElement("div");
    cajabtn.setAttribute("class", "cajabtn");
    cuerpoCrearGuifos.appendChild(cajabtn);

    cuerpoCrearGuifos.style.flexDirection = "column";

    var startRec = document.createElement("button");
    startRec.classList.add("startRec");
    cajabtn.appendChild(startRec)

    var logoCamara = document.createElement("div");
    logoCamara.innerHTML = '<img src="../assets/camera.svg">';
    logoCamara.classList.add("logoCamara");
    startRec.appendChild(logoCamara);

    var txtcaptura = document.createElement("div");
    txtcaptura.innerHTML = "Capturar";
    txtcaptura.classList.add("txtcaptura");
    startRec.appendChild(txtcaptura);

    function getStreamAndRecord() {
        navigator.mediaDevices.getUserMedia({//solicita permisos para usar el dispositivo de video y audio.
            audio: false, //no habilito el audio
            video: true //indico que las medidas de la imagen 
        })
            .then(function (stream) { //si el usuario brinda el permiso para ingresar a la camara (desde el navigator.mediaDevices.getUserMedia), le devuelve una promesa por mediaStream.
                video.srcObject = stream;
                console.log(stream);
                video.play();
                canvas.style.display = "none";
            })

            .catch(err => {
                console.log(err);
            });

        startRec.addEventListener("click", captura)
        function captura() {
            console.log("holis");
            context.drawImage(video, 0, 0, 180, 150);
            canvas.style.display = "block";
            video.style.display = "none";

            setTimeout(function () {
                //CAPTURANDO TU GUIFO - PANTALLA 3                            
                (function () {
                    window.location.href = "../crearGuifos/index.html";
                }());
            }, 1000);
        }
    }
    getStreamAndRecord(); //invoco a la función    

}
