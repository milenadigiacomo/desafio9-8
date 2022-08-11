let nombreSuscripcion=document.getElementById("nombre");
let apellidoSuscripcion=document.getElementById("apellido");
let emailSuscripcion=document.getElementById("email");
let comentariosSuscripcion=document.getElementById("comentarios");
nombreSuscripcion.value=prompt("Ingrese su nombre");
apellidoSuscripcion.value=prompt("ingrese su apellido");
emailSuscripcion.value=prompt("Ingrese su email");

let seccionSuscripcion=document.getElementById("suscripcion");
let parrafo=document.createElement("p");
parrafo.innerHTML="Gracias por suscribirte!";
seccionSuscripcion.append(parrafo);