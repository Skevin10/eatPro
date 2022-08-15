var moto = [];
var localStorage = window.localStorage;

var modalNuevaMot = new bootstrap.Modal(document.getElementById('modalNuevaMot'), 
    {
    keyboard: false
    });


console.log('MOTO: ', localStorage.getItem('moto'));
if (localStorage.getItem('moto') == null ) {
    localStorage.setItem('moto', JSON.stringify(moto));
}   else {
    moto = JSON.parse(localStorage.getItem('moto'));
}

for (let i=1; i<=10; i++){
    document.getElementById('list-img-mot').innerHTML += 
    `<option value="img/moto-pics/${i}.jpg">Imagen ${i}</option>`;
}

function generarMoto() {
    document.getElementById('moto').innerHTML = '';
    moto.forEach(function(mot, i){
        document.getElementById('moto').innerHTML += 
        `<div class="card mb-3 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 " style="width: 820px; margin-left: 30px; background-color: #066f7d">
            <div class="row g-0">
            <div class="col-md-4">
            <img style="width:77%" src="${mot.urlImage}" class="img-fluid rounded-start" alt="...">
            </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">Nombre: ${mot.nombreMoto}</h5>
        <p class="card-text">Descripcion: ${mot.descripMoto}</p>
        <p class="card-text">Correo: ${mot.correoMoto}</p>
        <p class="card-text"><small class="text-muted">Tiempo laborando con nosotros ${mot.tiempoMoto}</small></p>
        <div> 
            <button class="btn btn-outline-danger btn-sm" style="float:right" onclick="eliminar(${i})"><i class="fas fa-trash-alt"></i></button>
        </div>
        </div>
    </div>
    </div>
</div>
        `;
    });
}

generarMoto();


function guardar() {
    const mot = {
        nombreMoto: document.getElementById('nombre-mot').value,
        urlImage: document.getElementById('list-img-mot').value,
        descripMoto: document.getElementById('descrip-mot').value,
        correoMoto: document.getElementById('mail-mot').value,
        tiempoMoto: document.getElementById('tiempo-mot').value,

    };

    console.log(mot);
    moto.push(mot);
    localStorage.setItem('moto', JSON.stringify(moto));
    console.log(moto);
    generarMoto();
}

function eliminar(indice) {
    console.log('Eliminar empresa con el indice', indice);
    moto.splice(indice, 1);
    generarMoto();
    localStorage.setItem('moto', JSON.stringify(moto));
}
