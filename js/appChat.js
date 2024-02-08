const form = document.getElementById("chatBa")


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const userRes =document.querySelector("#RespuestaUser").value
    buscarPalabra(userRes)
})



    const palabras = ["hola","afiliado","rendimiento","educacion","requisitos","casa","gano dinero"]


function buscarPalabra(userRes){
    console.log("buscando..");

    const textoMinusculas = userRes.toLowerCase();

    palabras.forEach((palabra) => {
        if (textoMinusculas.includes(palabra.toLowerCase())) {
            console.log(`Se encontró la palabra: ${palabra}`);
            if (palabra === "hola") {
                respond1 = "¡Hola! Estoy aquí para ayudarte en lo que necesites. ¿En qué puedo asistirte hoy?"
                burbledraw(respond1)
            }else if(palabra == "afiliado"){
                respond2 = "Nos alegra que estés interesado en nuestro programa de afiliados. Puedes registrarte en nuestra página web o contáctanos para obtener más información sobre cómo unirte."
                burbledraw(respond2)
            }else if (palabra == "rendimiento"){
                respond3 = "El rendimiento promedio de nuestras inversiones varía dependiendo del tipo de activos y del período de tiempo. Te recomendamos contactarnos para obtener información más detallada sobre el rendimiento"
                burbledraw(respond3)
            }else if (palabra == "educacion"){
                respond4 = "¡Por supuesto! Ofrecemos una amplia gama de recursos educativos para ayudarte a mejorar tus habilidades financieras."
                burbledraw(respond4)
            }else if(palabra == "requisitos"){
                respond5 = "Te invitamos a explorar nuestro marco legal en nuestra página web para obtener detalles específicos sobre los requisitos de inversión. ¡Esperamos que encuentres la información que necesitas! Si tienes más preguntas, no dudes en contactarnos"
                burbledraw(respond5)
            }else if (palabra == "casa"){
                respond6 = "Sí, contamos con una variedad de casas disponibles para la venta en diferentes ubicaciones y rangos de precios. "
                burbledraw(respond6)
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

const chat = document.querySelector(".chat");

const butchat = document.querySelector(".chatbotBut")
butchat.addEventListener('click',(event)=>{

    console.log("bot");

    const bot = document.querySelector(".chat");
    if (chat.style.display == "flex"){
        chat.style.display = "none"
    }else{
        chat.style.display = "flex"
    }

})


