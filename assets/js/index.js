//CREACIÓN DE BOTONES DE NAVEGACIÓN

document.addEventListener("DOMContentLoaded", function () {
  let navbarNav = document.querySelector(".navbar-nav");
  const currentPage = window.location.pathname;

  let homeButton = document.createElement("li");
  homeButton.classList.add("nav-item");
  let homeButtonLink = document.createElement("a");
  homeButtonLink.classList.add("nav-link", "btn", "btn-venta");
  homeButtonLink.textContent = "Home";
  homeButtonLink.href = "index.html";
  homeButton.appendChild(homeButtonLink);

  let ventaButton = document.createElement("li");
  ventaButton.classList.add("nav-item");
  let ventaButtonLink = document.createElement("a");
  ventaButtonLink.classList.add("nav-link", "btn", "btn-alquiler");
  ventaButtonLink.textContent = "En Venta";
  ventaButtonLink.href = "propiedades_venta.html";
  ventaButton.appendChild(ventaButtonLink);

  let alquilerButton = document.createElement("li");
  alquilerButton.classList.add("nav-item");
  let alquilerButtonLink = document.createElement("a");
  alquilerButtonLink.classList.add("nav-link", "btn", "btn-alquiler");
  alquilerButtonLink.textContent = "Alquiler";
  alquilerButtonLink.href = "propiedades_alquiler.html";
  alquilerButton.appendChild(alquilerButtonLink);

  if (currentPage.includes("propiedades_venta.html")) {
    navbarNav.appendChild(homeButton);
    navbarNav.appendChild(alquilerButton);
  } else if (currentPage.includes("propiedades_alquiler.html")) {
    navbarNav.appendChild(homeButton);
    navbarNav.appendChild(ventaButton);
  } else {
    navbarNav.appendChild(ventaButton);
    navbarNav.appendChild(alquilerButton);
  }
});

const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 2,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 8000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 10000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa tipo Chalet a pies del lago",
    src: "https://img.freepik.com/fotos-premium/chalet-alpino-idilico-orillas-lago-paisaje-montanoso-como-telon-fondo-otono_38013-87342.jpg",
    descripcion:
      "Chalet aislado en la natulareza , ofreciendo paz y tranquilidad",
    ubicacion: "160 Rute, Lleu Lleu Lake",
    habitaciones: 5,
    baños: 4,
    costo: 20000,
    smoke: false,
    pets: false,
  },
];

// Generar galeria imágenes venta
function generarCardsVentas() {
  const container = document.getElementById("cards-container");
  if (!container) return;
  let propiedadesVentasLimitadas = propiedadesVenta.slice(0, 3);
  if (window.location.href.includes("propiedades_venta.html")) {
    propiedadesVentasLimitadas = propiedadesVenta.slice(0, 4);
  }

  propiedadesVentasLimitadas.forEach((propiedad) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

    let petsText;
if (propiedad.pets === true) {
  petsText = '<span style="color: green;"><i class="fas fa-paw"></i> Se permiten mascotas</span>';
} else if (propiedad.pets === false) {
  petsText = '<span style="color: red;"><i class="fas fa-ban"></i> No se permiten mascotas</span>';
}

let smokeText;
if (propiedad.smoke === true) {
  smokeText = '<span style="color: green;"><i class="fas fa-smoking"></i> Se permite fumar</span>';
} else if (propiedad.smoke === false) {
  smokeText = '<span style="color: red;"><i class="fas fa-smoking-ban"></i> No se permite fumar</span>';
}

    card.innerHTML = `
    <div class="container-card ">
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad">
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p class="card-ubicacion"><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p class="card-ubicacion"><i class="fas fa-bed"></i>${propiedad.habitaciones} Habitaciones  <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
          <p class="card-text"><i class="fas fa-dollar-sign"></i><strong>${propiedad.costo}</strong></p>
          <p class="card-text"style="display:flex; flex-direction:column">${petsText}  ${smokeText}</p>
        </div>
      </div>
      </div>
    `;

    container.appendChild(card);
  });
}

generarCardsVentas();


//Sección alquiler
const propiedadesAlquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    ubicacion: " 123 Main Street,Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 5000,
    smoke: false,
    pets: true,
  },
  {
    nombre: " Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      " Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 8000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 10000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa en barrio lujoso",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_hs3_0YKKygBRrwhALLUzMRkT1C3GW5iwQ&s",
    descripcion:"Casa situada en uno de los mejores barrios de chile",
    ubicacion: "Av. Franklin 1255, La Dehesa",
    habitaciones: 6,
    baños: 6,
    costo: 320000,
    smoke: true,
    pets: true,
  },
];

// Generar galeria de imágenes alquiler
function generarCardsAlquiler() {
  const container = document.getElementById("cards-container1");
  if (!container) return;
  let propiedadesAlquilerLimitadas = propiedadesAlquiler.slice(0, 3);
  if (window.location.href.includes("propiedades_alquiler.html")) {
    propiedadesAlquilerLimitadas = propiedadesAlquiler.slice(0, 4);
  }

  propiedadesAlquilerLimitadas.forEach((propiedad) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");
    let petsText;
    if (propiedad.pets === true) {
      petsText = '<span style="color: green;"><i class="fas fa-paw"></i> Se permiten mascotas</span>';
    } else if (propiedad.pets === false) {
      petsText = '<span style="color: red;"><i class="fas fa-ban"></i> No se permiten mascotas</span>';
    }
    
    let smokeText;
    if (propiedad.smoke === true) {
      smokeText = '<span style="color: green;"><i class="fas fa-smoking"></i> Se permite fumar</span>';
    } else if (propiedad.smoke === false) {
      smokeText = '<span style="color: red;"><i class="fas fa-smoking-ban"></i> No se permite fumar</span>';
    }
    

    card.innerHTML = `
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad">
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p class="card-ubicacion"><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p class="card-habitaciones"><i class="fas fa-bed"></i>${propiedad.habitaciones} Habitaciones  <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
          <p class="card-text"><i class="fas fa-dollar-sign"></i><strong>${propiedad.costo}</strong></p>
          <p class="card-text"style="display:flex; flex-direction:column">${petsText}  ${smokeText}</p>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

generarCardsAlquiler();



//Boton que direcciona a área de venta

document.addEventListener("DOMContentLoaded", function () {
  const ventaSection = document.getElementById("venta");

  if (window.location.pathname.includes("propiedades_venta.html")) {
    return;
  }

  const button = document.createElement("a");
  button.href = "propiedades_venta.html";
  button.className = "btn btn-dark mt-4";
  button.textContent = "Ver más propiedades en venta";

  const divContainer = document.createElement("div");
  divContainer.className = "text-start";
  divContainer.appendChild(button);

  ventaSection.appendChild(divContainer);
});

//Boton que direcciona a área de Alquiler

document.addEventListener("DOMContentLoaded", function () {
  const alquilerSection = document.getElementById("alquiler");
  if (window.location.pathname.includes("propiedades_alquiler.html")) {
    return;
  }

  const button = document.createElement("a");
  button.href = "propiedades_alquiler.html";
  button.className = "btn btn-dark mt-4";
  button.textContent = "Ver más propiedades en alquiler";

  const divContainer = document.createElement("div");
  divContainer.className = "text-start";
  divContainer.appendChild(button);

  alquilerSection.appendChild(divContainer);
});
