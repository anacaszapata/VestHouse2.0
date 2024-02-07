const form = document.getElementById("chatBa")


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const userRes =document.querySelector("#RespuestaUser").value
    buscarPalabra(userRes)
})



    const palabras = ["necesito ayuda","comprar casa","comprar","hola","casa","inversion"]


function buscarPalabra(userRes){
    console.log("buscando..");

    const textoMinusculas = userRes.toLowerCase();

    palabras.forEach((palabra) => {
        if (textoMinusculas.includes(palabra.toLowerCase())) {
            console.log(`Se encontró la palabra: ${palabra}`);
            if (palabra === "hola") {
                respond1 = "Hola! soy el chat bot \n y estoy aqui para ayudarte"
                burbledraw(respond1)
            }else if(palabra == "comprar"){
                respond2 = "Claro!  que deseas comprar"
                burbledraw(respond2)
            }else if (palabra == "casa"){
                respond3 = "propiedad"
                burbledraw(respond3)
            }else if (palabra == "comprar casa"){
                respond4 = "puedes contactarte con unos de nuestros asesores"
                burbledraw(respond4)
            }else if(palabra == "necesito ayuda"){
                respond5 = "Cuentame con que te puedo ayudar"
                burbledraw(respond5)
            }else if (palabra == "como invertir"){
                respond6 = "a traves"
                burbledraw(respond6)
            }else if (palabra == "inversion"){
                respond7 = "con vesthouse"
                burbledraw(respond7)
            }





            return; 
        }
    });

    console.log("Palabra no encontrada");
}


function burbledraw(respond){  




    const listaBot = document.querySelector(".listaResponse")
    const listaBot2 = document.querySelector(".listaResponse li")
    //listaBot2.style.transform = " width: 90px"


    console.log("pintando");

    const userRes = document.querySelector("#RespuestaUser").value
    const burbuja = document.createElement("li")
    burbuja.textContent = userRes 
    burbuja.style.right = "200px";
    burbuja.style.backgroundColor = "#2b3e388c"
    burbuja.style.marginLeft = "60%";
    listaBot.appendChild(burbuja)


        setTimeout(() => {
            const burbujabot = document.createElement("li")
            burbujabot.textContent = respond
        
            listaBot.appendChild(burbujabot)
            
          }, 1200);



}


const butchat = document.querySelector(".chatbotBut")
butchat.addEventListener('click',(event)=>{

    console.log("bot");

    const bot = document.querySelector(".chat");
    const currentOpacity = parseFloat(getComputedStyle(bot).opacity);

    // Cambiar la opacidad según el valor actual
    bot.style.opacity = currentOpacity === 0 ? 1 : 0;





})