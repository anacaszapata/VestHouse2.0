function cargarInversor(){
    let usuarioLogueado = localStorage.getItem("usuarioLogueado")
    if(usuarioLogueado !== null) {
      usuarioLogueado = JSON.parse(usuarioLogueado)
      document.getElementById("usuarioInversor").innerText = usuarioLogueado.usuario
    }
  
      document.getElementById("usuarioInversor").innerText = "inversionista"
    
  }
  cargarInversor()

const textosIngles = {
    tituloCarrousel1: "INVEST IN YOUR FUTURE,",
    tituloCarrousel2: "INVEST IN YOUR FUTURE,",
    tituloCarrousel3: "INVEST IN YOUR FUTURE,",
    registrateNav: "Sign up",
    loginNav: "Log in",
    idiomaNav: "lenguaje",
    subCarrousel1: "INVEST IN YOUR HOUSE,",
    subCarrousel2: "INVEST IN YOUR HOUSE,",
    subCarrousel3: "INVEST IN YOUR HOUSE,",
    sub2Carrousel1:"INVEST IN VESTHOUSE.",
    sub2Carrousel2:"INVEST IN VESTHOUSE.",
    sub2Carrousel3:"INVEST IN VESTHOUSE.",
    sub2subCarrousel1:
        "Invest from low amounts digitally and securely ",
    sub2subCarrousel2:
        "Invest from low amounts digitally and securely ",
    sub2subCarrousel3:
        "Invest from low amounts digitally and securely ",
    sub3subCarrousel1:" in fractions of real estate projects.",
    sub3subCarrousel2:" in fractions of real estate projects.",
    sub3subCarrousel3:" in fractions of real estate projects.",
    proteger:"Protecting your money from inflation",
    protegerTexto:"Investing is the most advisable if you want to keep a portion of your money safe from inflation.",
    portafolio: "Diversifying your investment portfolio.",
    portafolioTexto: "The more diversified investments you have, the higher your passive income will be.",
    rentabilidad: "Profitability",
    rentabilidadTexto: "With a fixed annual percentage, you can earn up to 8% on each fraction acquired.",
    guia:"Guide and support",
    guiaTexto: "You will have access to all the materials and receive support through meetings, webinars, and a question and answer section to achieve optimal management of the method that best suits your projects.",
    btnConoceProyectos1: "Get to know our projects",
    btnConoceProyectos2: "Get to know our projects",
    btnConoceProyectos3: "Get to know our projects",
    btnInvierteAhora: "invest now",
    totalInversionistas: "Total investors",
    retornoEstimado: "Estimated Return",
    inverionALaFecha: "Investment to date",
    desarrolladorAna:"CEO-SOFTWARE DEVELOPER",
    desarrolladorVale:"CEO-SOFTWARE DEVELOPER",
    desarrolladorDani:"CEO-SOFTWARE DEVELOPER",
    simula:"Simulate your investment",
    ubicacion:"Location" ,
    selecciona: "Select your project" ,
    monto: "Amount",
    inversionpregunta: "How much do you want to invest?",
    tiempo:"Time",
    tiempoPregunta: "For how long do you want to invest?",
    requerimiento: "I accept the terms and conditions of the data treatment policy." ,
    enviar:"Send",
    inversionista:"Investor",
    ubicacion: "Ubication",
    monto2: "Amount",
    pf: "Frequently Asked Questions",
    inversionMa: "Investment",
    riesgoMA: "Risk",
    reinversionMA:  "Reinvestment",
    inversionColab: "Crowdfunding investment in VestHouse is 100% digital 💻, and you can invest by following these steps:",
    riesgoME: "Market condition change risk:",
    condicionesME: "The conditions of the real estate market can change rapidly due to macroeconomic factors, shifts in consumer trends, natural disasters, or other unforeseen events. These changes can have a significant impact on the value of properties and the profitability of investments.",
    preguntaDinero: "How do I make money?",
    fraccionInv:"Fraction: Investors' returns are generated from rental income of the property in which you invested." ,
    venta: "Sale: Once you purchase the property, the biggest profit will come from its appreciation over time, leading to a higher value and thus a greater profit for the owner." ,
    comision:  "Commission: Every time you bring a new investor who becomes part of VestHouse, you can earn a commission for each person.",
    modelo:"Legal model",
    leer:"Read more",
    academiaLink:"Academy",
    seccionAcademia:"In the academy section, you'll discover a wide range of recommended content designed to help you develop your investment portfolio. Additionally, you'll have access to registration for our webinars, led by prominent financial coaches and other renowned special guests.",


    

};
const textosEspanol = {
    tituloCarrousel1: "INVIERTE EN TU FUTURO,",
    tituloCarrousel2: "INVIERTE EN TU FUTURO,",
    tituloCarrousel3: "INVIERTE EN TU FUTURO",
    registrateNav: "registrate",
    loginNav: "Iniciar sesión",
    idiomaNav: "idioma",
    subCarrousel1:
        "INVIERTE EN TU CASA,",
    subCarrousel2:
        "INVIERTE EN TU CASA,",
    subCarrousel3:
        "INVIERTE EN TU CASA,",
    sub2Carrousel1:
    "INVIERTE EN VESTHOUSE.",
    sub2Carrousel2:
    "INVIERTE EN VESTHOUSE.",
    sub2Carrousel3:
    "INVIERTE EN VESTHOUSE.",

        sub2subCarrousel1: "Invierte desde bajos montos, de manera digital y segura",
    sub2subCarrousel2: "Invierte desde bajos montos, de manera digital y segura",
    sub2subCarrousel3: "Invierte desde bajos montos, de manera digital y segura",
    sub3subCarrousel1: "en fracciones de proyectos inmobiliarios",
    sub3subCarrousel2: "en fracciones de proyectos inmobiliarios",
    sub3subCarrousel3: "en fracciones de proyectos inmobiliarios",
    btnConoceProyectos1: "Conoce nuestros proyectos",
    btnConoceProyectos2: "Conoce nuestros proyectos",
    btnConoceProyectos3: "Conoce nuestros proyectos",
    btnInvierteAhora: "Invierte ahora",
    totalInversionistas: "Total de inversionistas",
    retornoEstimado: "Retorno Estimado",
    inverionALaFecha: "Inversion a la fecha",
    desarrolladorAna:"CEO-DESARROLLADORA DE SOFTWARE",
    desarrolladorVale:"CEO-DESARROLLADORA DE SOFTWARE",
    desarrolladorDani:"CEO-DESARROLLADOR DE SOFTWARE",
    proteger: "Proteger tu dinero de la inflacion",
    protegerTexto: "Invertir es lo más indicado si quieres mantener porcentaje de tu dinero seguro de la inflacion.",
    portafolio:"Diversificar tu portafolio de inversion",
    portafolioTexto:"Entre más inversiones tengas diversificadas mayores serán los ingresos pasivos.",
    rentabilidad:"Rentabilidad",
    rentabilidadTexto:"Con un porcentaje fijo anual, puedes ganar hasta el 8% de cada fraccion adquirida.",
    guia:"Guia y soporte",
    guiaTexto:"Tendrás todo el material y acompañamiento mediante reuniones, webinars, sección de preguntas y respuestas para que obtengas la administración óptima del método que se haya ajustado más a tus proyectos.",
    simula:"Simula tu inversión",
    ubicacion: "Ubicación",
    selecciona: "Selecciona tu proyecto",
    monto: "Monto",
    inversionpregunta: "¿Cuánto quieres invertir?",
    tiempo:"Tiempo",
    tiempoPregunta: "¿Por cuánto tiempo desas invertir?",
    requerimiento: "Acepto lo terminos y condiciones de la politica de tratamiento de datos",
    enviar:"Enviar",
    inversionista:"Inversionista",
    ubicacion: "Ubicacion",
    monto2: "Monto",
    pf: "Preguntas frecuentes",
    inversionMa: "Inversion",
    riesgoMA: "Riesgo",
    reinversionMA: "Reinversion",
    inversionColab:"La inversión colaborativa en VestHouse es 100% digital 💻 y puedes invertir siguiendo los siguientes pasos:",
    riesgoME:"Riesgo de cambio de condiciones del mercado:",
    condicionesME: "Las condiciones del mercado inmobiliario pueden cambiar rápidamente debido a factores macroeconómicos, cambios en las tendencias de consumo, desastres naturales u otros eventos imprevistos. Estos cambios pueden tener un impacto significativo en el valor de las propiedades y en la rentabilidad de las inversiones.",
    preguntaDinero:"¿CÓMO GANO DINERO?",
    fraccionInv: "Fracción: Los retornos de los inversionistas se generan a partir de los ingresos por el alquiler de la propiedad donde hiciste la inversión.",
    venta: "Venta: Una vez compres la propiedad esa será la mayor ganacia puesto que la valorización anual aumentará su valor y por ende será una mayor ganancia para el propietario.",
    comision: "Comisión: Cada vez que traigas a algun nuevo inversionista y este haga parte de VestHouse podrás ganar una comisión por cada persona.",
    modelo:"Modelo legal",
    leer:"Leer más...",
    academiaLink:"Academia",
    seccionAcademia:"En la sección de academia, descubrirás una amplia gama de contenidos recomendados diseñados para ayudarte a desarrollar tu portafolio de inversiones. Además, tendrás acceso a la inscripción para nuestros webinars, dirigidos por destacados coaches financieros y otros invitados especiales de renombre."







    
    









};

let formularioSimulador = document.getElementById("form-simulador");

formularioSimulador.addEventListener("submit", function (event) {
    let ubicacion = document.getElementById("ubicacion-simulador").value;
    let monto = document.getElementById("monto-simulador").value;
    let tiempo = document.getElementById("tiempo-simulador").value;

    document.getElementById("tiempo-simulado").innerText = tiempo;
    document.getElementById("montoDeInversion").innerText = monto;
    document.getElementById("ubicacionProyecto").innerText = ubicacion;

    event.preventDefault();
});

function cambiarIdioma(lenguje) {
    if (lenguje == "en") {
        for (let clave in textosIngles) {
            document.getElementById(clave).innerText = textosIngles[clave];
        }
        return;
    }
    for (let clave in textosEspanol) {
        console.log(textosEspanol[clave]);
        document.getElementById(clave).innerText = textosEspanol[clave];
    }
}
