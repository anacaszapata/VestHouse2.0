const properties = [
  {
    nombre: "Oasis envigado",
    tipo: "Fracciones",
    progreso: 25,
    imagen1: "../assets/casa2.jpeg",
    imagen2: "../assets/casa2.jpeg",
    imagen3: "../assets/casa2.jpeg",
    fraccionesDisponibles: 500,
    mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971961.0416931286!2d8.388167360635878!3d43.32879163539157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d42b531080347b%3A0xbac6c3ba5b2059ab!2sToscana%2C%20Italia!5e0!3m2!1ses-419!2sco!4v1707369434080!5m2!1ses-419!2sco" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    nombre: "Oasis medellin",
    tipo: "Fracciones",
    progreso: 70,
    imagen1: "../assets/casa2.jpeg",
    imagen2: "../assets/casa2.jpeg",
    imagen3: "../assets/casa2.jpeg",
    fraccionesDisponibles: 200,
    mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971961.0416931286!2d8.388167360635878!3d43.32879163539157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d42b531080347b%3A0xbac6c3ba5b2059ab!2sToscana%2C%20Italia!5e0!3m2!1ses-419!2sco!4v1707369434080!5m2!1ses-419!2sco" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    nombre: "Oasis rionegro",
    tipo: "Fracciones",
    progreso: 100,
    imagen1: "../assets/casa2.jpeg",
    imagen2: "../assets/casa2.jpeg",
    imagen3: "../assets/casa2.jpeg",
    fraccionesDisponibles: 200,
    mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971961.0416931286!2d8.388167360635878!3d43.32879163539157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d42b531080347b%3A0xbac6c3ba5b2059ab!2sToscana%2C%20Italia!5e0!3m2!1ses-419!2sco!4v1707369434080!5m2!1ses-419!2sco" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    nombre: "Para venta",
    tipo: "Venta",
    progreso: 25,
    imagen1: "../assets/casa2.jpeg",
    imagen2: "../assets/casa2.jpeg",
    imagen3: "../assets/casa2.jpeg",
    fraccionesDisponibles: 200,
    mapa: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971961.0416931286!2d8.388167360635878!3d43.32879163539157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d42b531080347b%3A0xbac6c3ba5b2059ab!2sToscana%2C%20Italia!5e0!3m2!1ses-419!2sco!4v1707369434080!5m2!1ses-419!2sco" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
];

document
  .getElementById("filterProperties")
  .addEventListener("change", function (event) {
    renderProperties(event.target.value);
  });

function renderProperties(type) {
  let container = document.getElementById("propertiesAlbum");
  container.innerHTML = "";

  for (let i = 0; i < properties.length; i++) {
    if (type != "Todas" && type != properties[i].tipo) {
      continue;
    }
    container.innerHTML += `<div class="col-md-4 d-flex justify-content-center mt-4 mb-4">
        <div class="card" style="width: 18rem;">
          <div id="carouselExampleControls${i}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${properties[i].imagen1}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${properties[i].imagen2}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${properties[i].imagen3}" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls${i}"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls${i}"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="card-body">
            <h5 class="card-title">${properties[i].nombre}</h5>
            <div>
              <div class="progress my-4">
                <div class="progress-bar" role="progressbar" style="width: ${properties[i].progreso}%;" aria-valuenow="${properties[i].progreso}" aria-valuemin="0"
                  aria-valuemax="100">${properties[i].progreso}%</div>
              </div>
              <div class="d-flex justify-content-start">
                <img width="50" src="../assets/coin.jpeg" alt="">
                <span class="text-center">222 fracciones disponibles</span>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
              <button type="button" onclick="detailHouse('${properties[i].nombre}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }
}
renderProperties("Todas");

function detailHouse(nombre) {
  let propiedad = properties.find((element) => element.nombre == nombre);

  console.log(propiedad);
  document.getElementById("nombrePropiedad").innerText = propiedad.nombre;
  document.getElementById("imagenDetalle1").src = propiedad.imagen1;
  document.getElementById("imagenDetalle2").src = propiedad.imagen2;
  document.getElementById("imagenDetalle3").src = propiedad.imagen3;
  document.getElementById("mapaDetalle").innerHTML = propiedad.mapa;
}
