const parrafoInicial1 = document.getElementById("parrafoinicial1");

console.log(parrafoInicial1);


let encabezados = "";

window.onload= function(){
    let encabezados = document.createElement("h1")
    const text = document.createTextNode("La vida es más bonita cuando estoy a tu lado <3")

encabezados.appendChild(text)
document.body.appendChild(encabezados)

}





