var empresas = [];
var localStorage = window.localStorage;

var modalNuevaCompany = new bootstrap.Modal(document.getElementById('modalNuevaCompany'), 
    {
    keyboard: false
    });


console.log('EMPRESAS: ', localStorage.getItem('empresas'));
if (localStorage.getItem('empresas') == null ) {
    localStorage.setItem('empresas', JSON.stringify(empresas));
}   else {
    empresas = JSON.parse(localStorage.getItem('empresas'));
}

for (let i=1; i<=4; i++){
    document.getElementById('list-img-company').innerHTML += 
    `<option value="img/empresas-pics/${i}.jpg">Imagen ${i}</option>`;
}

function generarEmpresas() {
    document.getElementById('empresas').innerHTML = '';
    empresas.forEach(function(company, i){
        document.getElementById('empresas').innerHTML += 
        `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" style="padding:5px;">
        <div class="card" style="border-radius:20px ; background-color: #e9ad09;" >
        <img src="${company.urlImage}" style="border-radius:10px ; hover" class="card-img-top app-img" >
            <div class="card-body">
            <h3 class="card-title" style="margin-bottom: 0; margin-top:0;" >${company.nombreEmpresas}</h3>
            <p class="card-text" style="margin-bottom: 0; margin-top:0; ">${company.opcionEmpresas}</p>
                <div> 
                    <button class="btn btn-outline-danger btn-sm" style="float:right" onclick="eliminar(${i})"><i class="fas fa-trash-alt"></i></button>
                </div>
        </div>
        </div>   
        </div>`;
    });
}

generarEmpresas();


function guardar() {
    const company = {
        nombreEmpresas: document.getElementById('nombre-company').value,
        urlImage: document.getElementById('list-img-company').value,
        opcionEmpresas: document.getElementById('opciones-company').value,
    };

    console.log(company);
    empresas.push(company);
    localStorage.setItem('empresas', JSON.stringify(empresas));
    console.log(empresas);
    generarEmpresas();
}

function eliminar(indice) {
    console.log('Eliminar empresa con el indice', indice);
    empresas.splice(indice, 1);
    generarEmpresas();
    localStorage.setItem('empresas', JSON.stringify(empresas));
}
