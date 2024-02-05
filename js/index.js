
let formularioSimulador = document.getElementById("form-simulador")

formularioSimulador.addEventListener("submit", function (event) {
    let ubicacion = document.getElementById("ubicacion-simulador").value
    let monto = document.getElementById("monto-simulador").value
    let tiempo = document.getElementById("tiempo-simulador").value

    document.getElementById("tiempo-simulado").innerText = tiempo
    document.getElementById("montoDeInversion").innerText = monto
    document.getElementById("ubicacionProyecto").innerText = ubicacion

    event.preventDefault()
});
