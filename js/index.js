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
    mision: "Mision",
    misionTexto: "Our goal is to offer accessible financial education and investment opportunities. We provide users with resources and tools for informed decision-making, helping them grow financially. We offer fair commissions and monthly payments based on investments, while maintaining high standards of integrity and customer service in a safe environment.",
   

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
    mision: "Misión",
    misionTexto: "Nuestro objetivo es ofrecer educación financiera y oportunidades de inversión accesibles. Proporcionamos a los usuarios recursos y herramientas para tomar decisiones informadas, ayudándoles a crecer financieramente. Ofrecemos comisiones justas y pagos mensuales basados en inversiones, manteniendo altos estándares de integridad y servicio al cliente en un entorno seguro."
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
