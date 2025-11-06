const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('loginCorreo');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const telefono = document.getElementById('telefono');
const region = document.getElementById('region');
const comuna = document.getElementById('comuna');



const soloLetrasEspacios = (str) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(str);
const isDuocMail = (str) => /^[A-Za-z0-9-_.]+@duoc.cl$/.test(str);
const isEstudianteMail = (str) => /^[A-Za-z0-9-_.]+@duoc.cl$/.test(str);
const validPhone = (str) => str === '' || /^[0-9+()-]{8,15}$/.test(str);
const strongPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(password);




nombre.addEventListener('input',()=>{
    if (soloLetrasEspacios(nombre.value.trim()) && nombre.value.length<=50){
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
    }
    else{
        nombre.classList.add('is-invalid');
        nombre.classList.remove('is-valid');
        

    }
});

apellido.addEventListener('input',()=>{
if (soloLetrasEspacios(apellido.value.trim()) && apellido.value.length<=50){
        apellido.classList.remove('is-invalid');
        apellido.classList.add('is-valid');
    }
    else{
        apellido.classList.add('is-invalid');
        apellido.classList.remove('is-valid');
        

        }
});

email.addEventListener('input',()=>{
    if(isDuocMail(email.value.trim()) || isEstudianteMail(email.value.trim())){
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
    else{
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    }
});

password.addEventListener('input',()=>{
    if (strongPassword(password.value)){
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
    else{
        password.classList.add('is-invalid')
        password.classList.remove('is-valid');
    }
});

password2.addEventListener('input',()=>{
    if (password.value == password2.value){
        password2.classList.remove('is-invalid');
        password2.classList.add('is-valid');
    }
    else{
        password2.classList.add('is-invalid')
        password2.classList.remove('is-valid');
    }
});

telefono.addEventListener('input',()=>{
    if (validPhone(telefono.value.trim())){
        telefono.classList.remove('is-invalid');
        telefono.classList.add('is-valid');
    }
    else{
        telefono.classList.add('is-invalid')
        telefono.classList.remove('is-valid');
    }
}
);

document.addEventListener("DOMContentLoaded", () => {

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const formRegistro = document.getElementById("formRegistro");
  const regAlert = document.getElementById("regAlert");

  formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();


    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("loginCorreo").value.trim();
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const telefono = document.getElementById("telefono").value.trim();
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value;


    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,50}$/;
    if (!nombreRegex.test(nombre)) { mostrarAlerta("Nombres inválidos.", "danger"); return; }
    if (!nombreRegex.test(apellido)) { mostrarAlerta("Apellidos inválidos.", "danger"); return; }

    const correoRegex = /^[a-zA-Z0-9._%+-]+@duoc\.cl$/;
    if (!correoRegex.test(correo)) { mostrarAlerta("Correo debe ser @duoc.cl válido.", "danger"); return; }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) { mostrarAlerta("La contraseña no cumple los requisitos.", "danger"); return; }
    if (password !== password2) { mostrarAlerta("Las contraseñas no coinciden.", "danger"); return; }

    if (telefono && !/^[\d\s+()-]{7,15}$/.test(telefono)) { mostrarAlerta("Teléfono inválido.", "danger"); return; }
    if (!region) { mostrarAlerta("Selecciona una región.", "danger"); return; }
    if (!comuna) { mostrarAlerta("Selecciona una comuna.", "danger"); return; }


    if (usuarios.some(u => u.correo === correo)) {
      mostrarAlerta("El correo ya está registrado.", "danger");
      return;
    }


    const nuevoUsuario = { nombre, apellido, correo, password, telefono, region, comuna };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarAlerta("¡Usuario registrado con éxito!", "success");
    formRegistro.reset();
  });

  function mostrarAlerta(mensaje, tipo) {
    regAlert.className = `alert alert-${tipo}`;
    regAlert.textContent = mensaje;
    regAlert.classList.remove("d-none");
  }


  const regiones = ["Región Metropolitana", "Valparaíso", "Biobío", "La Araucanía"];
  const regionSelect = document.getElementById("region");
  regiones.forEach(r => {
    const option = document.createElement("option");
    option.value = r;
    option.textContent = r;
    regionSelect.appendChild(option);
  });

  const comunasPorRegion = {
    "Región Metropolitana": ["Santiago", "Providencia", "Las Condes"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué"],
    "Biobío": ["Concepción", "Chillán", "Los Ángeles"],
    "La Araucanía": ["Temuco", "Villarrica", "Angol"]
  };
  const comunaSelect = document.getElementById("comuna");
  regionSelect.addEventListener("change", () => {
    comunaSelect.innerHTML = '<option value="">Selecciona tu comuna…</option>';
    if (comunasPorRegion[regionSelect.value]) {
      comunasPorRegion[regionSelect.value].forEach(c => {
        const option = document.createElement("option");
        option.value = c;
        option.textContent = c;
        comunaSelect.appendChild(option);
      });
    }
  });
});





const regiones = {
    "AP" : "Arica y Parinacota",
    "TA" : "Tarapacá",
    "AN" : "Antofagasta",
    "AT" : "Atacama",
    "CQ" : "Coquimbo",
    "VS" : "Valparaíso",
    "RM" : "Región Metropolitana de Santiago",
    "LI" : "Libertador General Bernardo OHiggins",
    "ML" : "Maule",
    "NB" : "Ñuble",
    "BB" : "Región del Biobío",
    "AR" : "Región de La Araucanía",
    "LR" : "Región de Los Ríos",
    "LL" : "Región de Los Lagos",
    "AY" : "Región de Aysén",
    "MG" : "Región de Magallanes y de la Antártica Chilena"


}

function llenarRegiones(){
    for (let codigo in regiones){
        const opcion = document.createElement("option");
        opcion.value = codigo.valueOf();
        opcion.textContent = regiones[codigo];
        region.appendChild(opcion);

    }
    
};
llenarRegiones();

region.addEventListener('change',() =>{
    region.classList.toggle('is-valid',region.value != '');
    region.classList.toggle('is-invalid',region.value == '');
});

const comunasPorRegion = {
  "AP": {
    "Arica": "Arica",
    "Camarones": "Camarones",
    "Putre": "Putre",
    "General Lagos": "General Lagos"
  },

  "TA": {
    "Iquique": "Iquique",
    "Alto Hospicio": "Alto Hospicio",
    "Pozo Almonte": "Pozo Almonte",
    "Huara": "Huara",
    "Pica": "Pica",
    "Camiña": "Camiña",
    "Colchane": "Colchane"
  },

  "AN": {
    "Antofagasta": "Antofagasta",
    "Mejillones": "Mejillones",
    "Sierra Gorda": "Sierra Gorda",
    "Taltal": "Taltal",
    "Tocopilla": "Tocopilla",
    "Calama": "Calama",
    "Ollagüe": "Ollagüe",
    "María Elena": "María Elena",
    "San Pedro de Atacama": "San Pedro de Atacama"
  },

  "AT": {
    "Copiapó": "Copiapó",
    "Caldera": "Caldera",
    "Tierra Amarilla": "Tierra Amarilla",
    "Chañaral": "Chañaral",
    "Diego de Almagro": "Diego de Almagro",
    "Vallenar": "Vallenar",
    "Alto del Carmen": "Alto del Carmen",
    "Freirina": "Freirina",
    "Huasco": "Huasco"
  },

  "CQ": {
    "La Serena": "La Serena",
    "Coquimbo": "Coquimbo",
    "Andacollo": "Andacollo",
    "Ovalle": "Ovalle",
    "Illapel": "Illapel",
    "Los Vilos": "Los Vilos",
    "Salamanca": "Salamanca",
    "Combarbalá": "Combarbalá",
    "Punitaqui": "Punitaqui",
    "Monte Patria": "Monte Patria",
    "Río Hurtado": "Río Hurtado",
    "Canela": "Canela",
    "La Higuera": "La Higuera",
    "Paihuano": "Paihuano",
    "Vicuña": "Vicuña"
  },

  "VS": {
    "Valparaíso": "Valparaíso",
    "Viña del Mar": "Viña del Mar",
    "Quilpué": "Quilpué",
    "Villa Alemana": "Villa Alemana",
    "Quintero": "Quintero",
    "Puchuncaví": "Puchuncaví",
    "Casablanca": "Casablanca",
    "Concón": "Concón",
    "Hijuelas": "Hijuelas",
    "Nogales": "Nogales",
    "Olmué": "Olmué",
    "La Ligua": "La Ligua",
    "Cabildo": "Cabildo",
    "Petorca": "Petorca",
    "Zapallar": "Zapallar",
    "Papudo": "Papudo",
    "Putaendo": "Putaendo",
    "Panquehue": "Panquehue",
    "Catemu": "Catemu",
    "Llaillay": "Llaillay",
    "Los Andes": "Los Andes",
    "San Esteban": "San Esteban",
    "San Felipe": "San Felipe",
    "Santa María": "Santa María",
    "Algarrobo": "Algarrobo",
    "El Quisco": "El Quisco",
    "El Tabo": "El Tabo",
    "Santo Domingo": "Santo Domingo",
    "Calle Larga": "Calle Larga",
    "Rinconada": "Rinconada",
    "La Cruz": "La Cruz",
    "Quillota": "Quillota",
    "San Antonio": "San Antonio",
    "El Tabo": "El Tabo",
    "Isla de Pascua": "Isla de Pascua",
    "Juan Fernández": "Juan Fernández"
  },

  "RM": {
    "Santiago": "Santiago",
    "Cerrillos": "Cerrillos",
    "Cerro Navia": "Cerro Navia",
    "Conchalí": "Conchalí",
    "El Bosque": "El Bosque",
    "Estación Central": "Estación Central",
    "Huechuraba": "Huechuraba",
    "Independencia": "Independencia",
    "La Cisterna": "La Cisterna",
    "La Florida": "La Florida",
    "La Granja": "La Granja",
    "La Pintana": "La Pintana",
    "La Reina": "La Reina",
    "Lampa": "Lampa",
    "Las Condes": "Las Condes",
    "Lo Barnechea": "Lo Barnechea",
    "Lo Espejo": "Lo Espejo",
    "Lo Prado": "Lo Prado",
    "Macul": "Macul",
    "Maipú": "Maipú",
    "Ñuñoa": "Ñuñoa",
    "Pedro Aguirre Cerda": "Pedro Aguirre Cerda",
    "Peñalolén": "Peñalolén",
    "Providencia": "Providencia",
    "Pudahuel": "Pudahuel",
    "Quilicura": "Quilicura",
    "Quinta Normal": "Quinta Normal",
    "Recoleta": "Recoleta",
    "Renca": "Renca",
    "San Joaquín": "San Joaquín",
    "San Miguel": "San Miguel",
    "San Ramón": "San Ramón",
    "Vitacura": "Vitacura",
    "Buin": "Buin",
    "Calera de Tango": "Calera de Tango",
    "Colina": "Colina",
    "Curacaví": "Curacaví",
    "El Monte": "El Monte",
    "Isla de Maipo": "Isla de Maipo",
    "La Pintana": "La Pintana",
    "Linares": "Linares", 
    "Maria Pinto": "María Pinto",
    "Melipilla": "Melipilla",
    "Padre Hurtado": "Padre Hurtado",
    "Paine": "Paine",
    "Peñaflor": "Peñaflor",
    "Pirque": "Pirque",
    "Puente Alto": "Puente Alto",
    "Puente Alto": "Puente Alto",
    "Quilicura": "Quilicura",
    "Quinta Normal": "Quinta Normal",
    "San Bernardo": "San Bernardo",
    "San Clemente": "San Clemente", 
    "Talagante": "Talagante",
    "Tiltil": "Tiltil",
    "San Pedro": "San Pedro"
  },

  "LI": {
    "Rancagua": "Rancagua",
    "Machalí": "Machalí",
    "Graneros": "Graneros",
    "Requínoa": "Requínoa",
    "Codegua": "Codegua",
    "Mostazal": "Mostazal",
    "Olivar": "Olivar",
    "Doñihue": "Doñihue",
    "Coinco": "Coinco",
    "Las Cabras": "Las Cabras",
    "San Vicente": "San Vicente",
    "Pichidegua": "Pichidegua",
    "Las Heras": "Las Heras",
    "Malloa": "Malloa",
    "Peumo": "Peumo",
    "Quinta de Tilcoco": "Quinta de Tilcoco",
    "Rengo": "Rengo",
    "San Fernando": "San Fernando",
    "Chépica": "Chépica",
    "Nancagua": "Nancagua",
    "Santa Cruz": "Santa Cruz",
    "La Estrella": "La Estrella",
    "Litueche": "Litueche",
    "Paredones": "Paredones",
    "Marchihue": "Marchihue",
    "Navidad": "Navidad",
    "Pichilemu": "Pichilemu",
    "Litueche": "Litueche"
  },

  "ML": {
    "Talca": "Talca",
    "Constitución": "Constitución",
    "Curepto": "Curepto",
    "Maule": "Maule",
    "Pencahue": "Pencahue",
    "Río Claro": "Río Claro",
    "San Clemente": "San Clemente",
    "Empedrado": "Empedrado",
    "Linares": "Linares",
    "Colbún": "Colbún",
    "Longaví": "Longaví",
    "Parral": "Parral",
    "Retiro": "Retiro",
    "San Javier": "San Javier",
    "Villa Alegre": "Villa Alegre",
    "Yerbas Buenas": "Yerbas Buenas",
    "Molina": "Molina",
    "Curicó": "Curicó",
    "Hualañé": "Hualañé",
    "Licantén": "Licantén",
    "Romeral": "Romeral",
    "Sagrada Familia": "Sagrada Familia",
    "Teno": "Teno",
    "Vichuquén": "Vichuquén",
    "Rauco": "Rauco"
  },

  "NB": {
    "Chillán": "Chillán",
    "Chillán Viejo": "Chillán Viejo",
    "Bulnes": "Bulnes",
    "Quillón": "Quillón",
    "San Ignacio": "San Ignacio",
    "Pemuco": "Pemuco",
    "Yungay": "Yungay",
    "El Carmen": "El Carmen",
    "Coelemu": "Coelemu",
    "Ninhue": "Ninhue",
    "Quirihue": "Quirihue",
    "Ránquil": "Ránquil",
    "Portezuelo": "Portezuelo",
    "Treguaco": "Treguaco",
    "Cobquecura": "Cobquecura"
  },

  "BB": {
    "Concepción": "Concepción",
    "Talcahuano": "Talcahuano",
    "Hualpén": "Hualpén",
    "Penco": "Penco",
    "Tomé": "Tomé",
    "Chiguayante": "Chiguayante",
    "San Pedro de la Paz": "San Pedro de la Paz",
    "Coronel": "Coronel",
    "Lota": "Lota",
    "Hualqui": "Hualqui",
    "Florida": "Florida",
    "Santa Juana": "Santa Juana",
    "Curanilahue": "Curanilahue",
    "Arauco": "Arauco",
    "Cañete": "Cañete",
    "Lebu": "Lebu",
    "Los Álamos": "Los Álamos",
    "Tirúa": "Tirúa",
    "Los Ángeles": "Los Ángeles",
    "Nacimiento": "Nacimiento",
    "Mulchén": "Mulchén",
    "Negrete": "Negrete",
    "Yumbel": "Yumbel",
    "Quilleco": "Quilleco",
    "Santa Bárbara": "Santa Bárbara",
    "Cabrero": "Cabrero"
  },

  "AR": {
    "Temuco": "Temuco",
    "Padre Las Casas": "Padre Las Casas",
    "Angol": "Angol",
    "Victoria": "Victoria",
    "Loncoche": "Loncoche",
    "Villarrica": "Villarrica",
    "Pucón": "Pucón",
    "Nueva Imperial": "Nueva Imperial",
    "Carahue": "Carahue",
    "Tolten": "Toltén",
    "Pitrufquén": "Pitrufquén",
    "Lautaro": "Lautaro",
    "Perquenco": "Perquenco",
    "Melipeuco": "Melipeuco",
    "Freire": "Freire",
    "Gorbea": "Gorbea",
    "Lebu": "Lebu"
  },

  "LR": {
    "Valdivia": "Valdivia",
    "La Unión": "La Unión",
    "Corral": "Corral",
    "Lanco": "Lanco",
    "Panguipulli": "Panguipulli",
    "Futrono": "Futrono",
    "Río Bueno": "Río Bueno",
    "Los Lagos": "Los Lagos" 
  },

  "LL": {
    "Puerto Montt": "Puerto Montt",
    "Puerto Varas": "Puerto Varas",
    "Osorno": "Osorno",
    "Puyehue": "Puyehue",
    "Llanquihue": "Llanquihue",
    "Frutillar": "Frutillar",
    "Calbuco": "Calbuco",
    "Castro": "Castro",
    "Chonchi": "Chonchi",
    "Ancud": "Ancud",
    "Dalcahue": "Dalcahue",
    "Quemchi": "Quemchi",
    "Quellón": "Quellón",
    "Maullín": "Maullín",
    "Puerto Octay": "Puerto Octay",
    "Los Muermos": "Los Muermos",
    "San Juan de la Costa": "San Juan de la Costa",
    "Río Negro": "Río Negro",
    "Puqueldón": "Puqueldón",
    "Queilén": "Queilén",
    "Curaco de Vélez": "Curaco de Vélez",
    "Quinchao": "Quinchao",
    "Hualaihué": "Hualaihué",
    "Coyhaique": "Coyhaique" 
  },

  "AY": {
    "Coyhaique": "Coyhaique",
    "Aysén": "Aysén",
    "Chile Chico": "Chile Chico",
    "Cisnes": "Cisnes",
    "Guaitecas": "Guaitecas",
    "Cochrane": "Cochrane",
    "O'Higgins": "O'Higgins",
    "Tortel": "Tortel",
    "Río Ibáñez": "Río Ibáñez",
    "Lago Verde": "Lago Verde"
  },

  "MG": {
    "Punta Arenas": "Punta Arenas",
    "Porvenir": "Porvenir",
    "Natales": "Natales",
    "Cabo de Hornos (Navarino)": "Cabo de Hornos (Navarino)",
    "Laguna Blanca": "Laguna Blanca",
    "Río Verde": "Río Verde",
    "San Gregorio": "San Gregorio",
    "Laguna Blanca": "Laguna Blanca",
    "Antártica": "Antártica"
  }
};

function llenarComunas(regionCodigo) {
  comuna.innerHTML = '<option value="">Seleccione una comuna</option>';
  if (!comunasPorRegion[regionCodigo]) return;

  for (let codigoComuna in comunasPorRegion[regionCodigo]) {
    const opcion = document.createElement("option");
    opcion.value = codigoComuna;
    opcion.textContent = comunasPorRegion[regionCodigo][codigoComuna];
    comuna.appendChild(opcion);
  }
}


region.addEventListener('change', () => {
  region.classList.toggle('is-valid', region.value !== '');
  region.classList.toggle('is-invalid', region.value === '');

  llenarComunas(region.value); 

  comuna.value = ''; 
  comuna.classList.remove('is-valid', 'is-invalid');
});

comuna.addEventListener('change', () => {
  comuna.classList.toggle('is-valid', comuna.value !== '');
  comuna.classList.toggle('is-invalid', comuna.value === '');
});
