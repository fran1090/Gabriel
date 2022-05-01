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
tituloCrearGuifos.innerHTML = "Capturando Tu Guifo";
cajaCrearGuifos.appendChild(tituloCrearGuifos);
tituloCrearGuifos.classList.add("visitasN");
tituloCrearGuifos.style.height = "5%";
tituloCrearGuifos.style.boxShadow = "0 0 0 0";
tituloCrearGuifos.style.color = "#ffff";

var cuerpoCrearGuifos = document.createElement("div");
cajaCrearGuifos.appendChild(cuerpoCrearGuifos);
cuerpoCrearGuifos.classList.add("cuerpoCrearGuifos");

var video = document.createElement("video");
video.setAttribute("class", "imagenCamara");
cuerpoCrearGuifos.appendChild(video);

var cajabtn = document.createElement("div");
cajabtn.setAttribute("class", "cajabtn");
cuerpoCrearGuifos.appendChild(cajabtn);

cuerpoCrearGuifos.style.flexDirection = "column";

var startRec = document.createElement("button");
startRec.classList.add("startRec2");
cajabtn.appendChild(startRec)

var logoCamara = document.createElement("div");
logoCamara.innerHTML = '<img src="../assets/recording.svg">';
logoCamara.classList.add("logoCamara");
startRec.appendChild(logoCamara);

var txtcaptura = document.createElement("div");
txtcaptura.innerHTML = "Grabar";
txtcaptura.classList.add("txtcaptura");
txtcaptura.style.color = "#FFFFFF"
startRec.appendChild(txtcaptura);

var stopRec = document.createElement("button");
stopRec.classList.add("startRec2");
cajabtn.appendChild(stopRec);
stopRec.style.display = "none";

var logoCamara2 = document.createElement("div");
logoCamara2.innerHTML = '<img src="../assets/recording.svg">';
logoCamara2.classList.add("logoCamara");
stopRec.appendChild(logoCamara2);

var txtcaptura2 = document.createElement("p");
txtcaptura2.classList.add("txtcaptura");
txtcaptura2.style.color = "#FFFFFF";
txtcaptura2.innerHTML = "Listo";
stopRec.appendChild(txtcaptura2);

const apikey = "I7i7iYbeoMXsK0C3fd5ecz3FtlCzcmCI";
var recorder = null;

function iniciarGrabacion() {  
    navigator.mediaDevices.getUserMedia({ 
        audio: false,
        video: {
            width: {max: 700},
            height: { max: 300 }
        }
    }).then(function (stream) { 
        video.srcObject = stream;
        video.play();

        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 700,
            height: 300,
            hidden: 350,
            onGifRecordingStarted: function () {
                console.log('started')
            },
        });
    });
}
iniciarGrabacion();

startRec.addEventListener('click', (event) => {
    recorder.startRecording();  
    startRec.style.display = "none";
    stopRec.style.display = "flex";
});

stopRec.addEventListener('click', (event) => {
    recorder.stopRecording(function () { 
        let blob = recorder.getBlob();
        var videoURL = window.URL.createObjectURL(blob);

        let form = new FormData(); 
        form.append('file', blob, 'myGif.gif');
        console.log(form.get('file'));

        stopRec.style.display = "none";
        video.style.display = "none";
        tituloCrearGuifos.innerHTML = "Vista Previa";
        var cajaMiGuif = document.createElement("div");
        cajaMiGuif.setAttribute("class", "imagenCamara");

        var imagenGifo = document.createElement("img");
        imagenGifo.style.width = "100%";
        imagenGifo.style.height = "100%";
        imagenGifo.src = videoURL;
        cajaMiGuif.appendChild(imagenGifo);

        cuerpoCrearGuifos.appendChild(cajaMiGuif);
        cuerpoCrearGuifos.style.flexDirection = "column-reverse";

        var repetir = document.createElement("button");
        repetir.classList.add("botonCrear");
        repetir.style.height = "50%";
        repetir.innerHTML = "Repetir Captura";
        cajabtn.appendChild(repetir);
        var subir = document.createElement("button");
        subir.classList.add("botonCrear");
        subir.style.height = "50%";
        subir.innerHTML = "Subir Guifo";
        cajabtn.appendChild(subir);

        subir.addEventListener('click', function (event) {

            const sugerencias = fetch('https://upload.giphy.com/v1/gifs?api_key=' + apikey,  
                {
                    method: 'post', 
                    body: form  
                })
                .then(response => {
                    // console.log(response.json());
                    return response.json();
                })
                .then(data => {
                    var cambiar = JSON.stringify(data);
                    localStorage.setItem(`misGuifos${data.data.id}`, cambiar);
                    return data;
                })
                .catch(error => {
                    return error;
                });

            cajaMiGuif.innerHTML = " ";
            var subiendo = document.createElement("div");
            subiendo.innerHTML = '<img src="../assets/globe_img.png" alt="Recording">' + "<br>" + "<b>" + "Estamos subiendo tu guifo…" + "</b>";
            cajaMiGuif.appendChild(subiendo);
            cajaMiGuif.style.display = "flex";
            cajaMiGuif.style.justifyContent = "center";
            cajaMiGuif.style.alignItems = "center";
            subiendo.setAttribute("class", "subiendo");
            repetir.style.display = "none";
            subir.style.display = "none";
            var cancelar = document.createElement("button");
            cancelar.classList.add("botonCrear");
            cancelar.style.height = "50%";
            cancelar.innerHTML = "Cancelar";
            cajabtn.appendChild(cancelar);

            cancelar.addEventListener("click", function (e) {
                window.location.href = "../index.html";
            });

            setTimeout(() => {
                console.log("genial");
                cajaMiGuif.style.display = "none";
                cancelar.style.display = "none";
                cajabtn.style.display = "none";
                bar();
            }, 3000);

            function bar() {
                var cajaGS = document.createElement("div");
                cajaGS.setAttribute("class", "cajaGS");
                cuerpoCrearGuifos.appendChild(cajaGS);
                cuerpoCrearGuifos.style.flexDirection = "column";

                var GuifListo = document.createElement("div");
                GuifListo.setAttribute("class", "GuifListo");
                var Guifok = document.createElement("img");
                Guifok.setAttribute("class", "Guifok");
                Guifok.src = videoURL;
                GuifListo.appendChild(Guifok);
                cajaGS.appendChild(GuifListo);

                var boxBtn = document.createElement("div");
                boxBtn.setAttribute("class", "boxBtn");
                cajaGS.appendChild(boxBtn);

                var parrafo = document.createElement("p");
                boxBtn.appendChild(parrafo);
                parrafo.innerHTML = "<b>" + "Guifo creado con éxito";

                var btnCopiar = document.createElement("button");
                btnCopiar.innerHTML = "Copiar Enlace Guifo";
                btnCopiar.classList.add("btnCopiar");
                boxBtn.appendChild(btnCopiar);

                var btnDescargar = document.createElement("button");
                btnDescargar.innerHTML = "Descargar Guifo";
                btnDescargar.setAttribute("class", "btnCopiar");
                boxBtn.appendChild(btnDescargar);

                var cajaBotonL = document.createElement("div");
                cajaBotonL.setAttribute("class", "cajaBotonL");
                cuerpoCrearGuifos.appendChild(cajaBotonL);

                var btnListo = document.createElement("button");
                btnListo.setAttribute("class", "btnListo");
                btnListo.innerHTML = "Listo";
                cajaBotonL.appendChild(btnListo);
            }
        });
    });
});

//barra de sugerencias
var barraS = document.createElement("div");
barraS.classList.add("barra");
barraS.style.display = "none";
encabezado.appendChild(barraS);

var barraContenido = document.createElement("p");
barraContenido.innerHTML = "MisGuifos";
barraContenido.style.fontSize = "14px";
barraContenido.style.marginLeft = "20px";
barraS.appendChild(barraContenido);

var cajaDeGuif = document.createElement("div");
cajaDeGuif.classList.add("cajaDeGuif");
encabezado.appendChild(cajaDeGuif);

/*
var GuifosMios = document.createElement("div");
GuifosMios.classList.add("GuifosMios");
cajaDeGuif.appendChild(GuifosMios);*/

if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let gifGuardados = JSON.parse(localStorage.getItem(localStorage.key(i)));

        fetch(`https://api.giphy.com/v1/gifs/${gifGuardados.data.id}?api_key=${apikey}`)

            .then(response => {
                return response.json();
            })

            .then(data => {
                //console.log(data);
                //console.log(data.data.images.downsized.url);
                var GuifosMios = document.createElement("div"),
                imagen = document.createElement("img");
                GuifosMios.classList.add("GuifosMios");
                imagen.src = data.data.images.downsized.url;
                imagen.setAttribute("class", "Guifok");
                GuifosMios.appendChild(imagen);
                cajaDeGuif.appendChild(GuifosMios);
                //GuifosMios.innerHTML = `<img src="${data.data.images.downsized.url}">`;
                //console.log(gifGuardados);
                return data;
            })
    }
}

