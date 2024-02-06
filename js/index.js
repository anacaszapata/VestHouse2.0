const textosIngles = {
  tituloCarrousel1: "Invest in the future you want to create",
  tituloCarrousel2: "Invest in the future you want to create",
  tituloCarrousel3: "Invest in the future you want to create",
  registrateNav: "Sign up",
  loginNav: "Log in",
  idiomaNav: "lenguaje",
  subCarrousel1: "With VestHouse, invest from low amounts, so digital",
  subCarrousel2: "With VestHouse, invest from low amounts, so digital",
  subCarrousel3: "With VestHouse, invest from low amounts, so digital",
  sub2subCarrousel1:
    "and secure in real estate projects that you are passionate about.",
  sub2subCarrousel2:
    "and secure in real estate projects that you are passionate about.",
  sub2subCarrousel3:
    "and secure in real estate projects that you are passionate about.",
  btnConoceProyectos1: "Get to know our projects",
  btnConoceProyectos2: "Get to know our projects",
  btnConoceProyectos3: "Get to know our projects",
  btnInvierteAhora: "invest now",
  totalInversionistas: "Total investors",
  retornoEstimado: "Estimated Return",
  inverionALaFecha: "Investment to date",
  mision:"Mision",
  misionTexto: "Our goal is to offer accessible financial education and investment opportunities. We provide users with resources and tools for informed decision-making, helping them grow financially. We offer fair commissions and monthly payments based on investments, while maintaining high standards of integrity and customer service in a safe environment."

};
const textosEspanol = {
  tituloCarrousel1: "Invierte en el futuro que quieres crear",
  tituloCarrousel2: "Invierte en el futuro que quieres crear",
  tituloCarrousel3: "Invierte en el futuro que quieres crear",
  registrateNav: "registrate",
  loginNav: "Iniciar sesión",
  idiomaNav: "idioma",
  subCarrousel1:
    "Con VestHouse, Invierte desde bajos montos, de manera digital",
  subCarrousel2:
    "Con VestHouse, Invierte desde bajos montos, de manera digital",
  subCarrousel3:
    "Con VestHouse, Invierte desde bajos montos, de manera digital",
  sub2subCarrousel1: "y segura en proyectos inmobiliarios que te apasionan.",
  sub2subCarrousel2: "y segura en proyectos inmobiliarios que te apasionan.",
  sub2subCarrousel3: "y segura en proyectos inmobiliarios que te apasionan.",
  btnConoceProyectos1: "Conoce nuestros proyectos",
  btnConoceProyectos2: "Conoce nuestros proyectos",
  btnConoceProyectos3: "Conoce nuestros proyectos",
  btnInvierteAhora: "Invierte ahora",
  totalInversionistas: "Total de inversionistas",
  retornoEstimado: "Retorno Estimado",
  inverionALaFecha: "Inversion a la fecha",
  mision: "Misión",
  misionTexto:"Nuestro objetivo es ofrecer educación financiera y oportunidades de inversión accesibles. Proporcionamos a los usuarios recursos y herramientas para tomar decisiones informadas, ayudándoles a crecer financieramente. Ofrecemos comisiones justas y pagos mensuales basados en inversiones, manteniendo altos estándares de integridad y servicio al cliente en un entorno seguro."
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
