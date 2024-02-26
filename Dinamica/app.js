const inputRojo=document.getElementById("rojo");
const inputVerde=document.getElementById("verde");
const inputAzul=document.getElementById("azul");

const textRojo=document.getElementById("text-rojo");
const textVerde=document.getElementById("text-verde");
const textAzul=document.getElementById("text-azul");

let rojo=inputRojo.value;
let verde=inputVerde.value;
let azul=inputAzul.value;

// Actualizar el texto de los parrafos
textRojo.innerText=rojo;
textVerde.innerText=verde;
textAzul.innerText=azul;



function actualizarColor(rojo,verde,azul) {
    
    const colorRGB=`rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor=colorRGB;
};

// Para actualizar Red(Rojo)

inputRojo.addEventListener("change",(e)=>{
    
    rojo=e.target.value;
    textRojo.textContent=rojo;
    actualizarColor(rojo,verde,azul);

});

inputVerde.addEventListener("change",(e)=>{
    verde=e.target.value;
    textVerde.textContent=verde;
    actualizarColor(rojo,verde,azul);
})

inputAzul.addEventListener("change",(e)=>{
    azul=e.target.value;
    textAzul.textContent=azul;
    actualizarColor(rojo,verde,azul);
})