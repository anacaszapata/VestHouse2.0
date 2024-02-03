const URLCiudades = "https://api-colombia.com/api/v1/City";

async function pintarCiudades() {
  let ciudades = localStorage.getItem("ciudades");

  if (ciudades == null) {
    let ciudades = await consultarCiudades();
    localStorage.setItem("ciudades", JSON.stringify(ciudades));
  }

  ciudadesLocalStorage = localStorage.getItem("ciudades");
  ciudades = JSON.parse(ciudadesLocalStorage);

  let selectCiudades = document.getElementById("selectElement");

  selectCiudades.innerHTML = "";

  ciudades.forEach((ciudad) => {
    selectCiudades.innerHTML += `<option>${ciudad.name}</option>`;
  });

  new SlimSelect({
    select: "#selectElement",
  });
}

async function consultarCiudades() {
  response = await fetch(URLCiudades);
  response = await response.json();

  return response;
}

class Persona {
  constructor(nombre, telefono, email, ciudad, inquietud) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.ciudad = ciudad;
    this.inquietud = inquietud;
  }


  setPersonaLocalStorage() {
    let valores = {
      nombre: this.nombre,
      telefono: this.telefono,
      email: this.email,
      ciudad: this.ciudad,
      inquietud: this.inquietud,
    };

    localStorage.setItem("persona", JSON.stringify(valores));
    location.href("./index.html")
  }
}

pintarCiudades();

document
  .getElementById("btn-registrarse")
  .addEventListener("click", function (event) {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let ciudad = document.getElementById("selectElement").value;
    let inquietud = document.getElementById("inquietud").value;

    persona = new Persona(nombre, telefono, email, ciudad, inquietud)
    persona.setPersonaLocalStorage()

  });
