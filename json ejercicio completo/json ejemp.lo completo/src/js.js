// ------------------------------------------
// -------------------- Objeto JSON  ----------------
// ------------------------------------------
var dataAuto = [
    {
        modelo: "BMW",
        marca: "Serie 9",
        color: ["Red"],
        anio: 2020,
        foto: "https://a.ccdn.es/cnet/2018/12/15/36518241/166250105_g.jpg"
    },
    {
        modelo: "Toyota",
        marca: "Corolla 18",
        color: ["Red", "Blue"],
        anio: 2020,
        foto: "https://m.media-amazon.com/images/I/712-mbJHZqL._UY560_.jpg"
    },
    {
        modelo: "Suzuki",
        marca: "Ignis",
        color: ["Red", "Silver"],
        anio: 2017,
        foto: "https://www.telegraph.co.uk/content/dam/motoring2/2015/12/01/vitara-main-xlarge_trans_NvBQzQNjv4BqpiVx42joSuAkZ0bE9ijUnGH28ZiNHzwg9svuZLxrn1U.jpg?imwidth=1400"
    },
    {
        modelo: "Volkswagen",
        marca: "California",
        color: ["Red", "Silver"],
        anio: 2015,
        foto: "https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Volkswagen_California_T6_2016_C01.jpg?itok=ZSYMIqFY"
    }]


//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//---------------Seccion de elementos DIV

const divListAuto = document.getElementById("divListAuto1");
const selectAnio = document.getElementById("selectAnio");
const divListAuto2 = document.getElementById("divListAuto2");


//------------------------------------------------
//------------------------------------------------
// ------------------- SECCION DE BOTONES --------

const btnListar = document.getElementById('btn_list_auto');
const btnClearListar = document.getElementById('btn_list_clear_auto');
const btnListarAños = document.getElementById('btn_list_anios');
const btnClearListarAños = document.getElementById('btn_list_clear_anios');
const btnListColor = document.getElementById('selectColor');


//------------------------------------------------
//---------------   LISTAR AUTOS EJEMPLO 1  ---------------------------------
//------------------------------------------------
// Descripcion = listarAutos() pide como parametro un array de objetos
// dentro lo que hace es recorrer y armar un html . al final solo retorna 
// un String que tiene html.

//Ejercicio 1
const listarAutos = (data) => {
    let templateListOfCards = '';
    // recorremos nuestro array con forEach
    data.forEach((object) => {
        // creamos un template(string) por cada elemento del array
        const card = `
        <div class="col-lg-3">
            <div class="card mr-2">
                <img src="${object.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Modelo :</b> ${object.modelo} </li>
                        <li class="list-group-item"><b>Marca :</b> ${object.marca} </li>
                        <li class="list-group-item"><b>Color :</b> ${object.color} </li>
                        <li class="list-group-item"><b>Año :</b> ${object.anio} </li>
                    </ul>
                </div>
            </div>
        </div>
      `;
        templateListOfCards += card;
    });
    return templateListOfCards;
};

//Ejercicio 2
const listarAnios = (data) => {
    var aAnios = [];

    let templete = '';
    data.forEach((objeto) => {
        if (aAnios.indexOf(objeto.anio) == -1) {
            aAnios.push(objeto.anio);
            templete += `<option value="${objeto.anio}">
                            ${objeto.anio}
                        </option>`;
        };
    });
    return templete;
}

// Ejercicio 3
// Retorna un arreglo filtrado por color.
const listarByColor = (data, color) => {
    return data.filter((objeto) => {
        let aColores = objeto.color;
        if (aColores.indexOf(color) == -1) {
            return false;
        } else {
            return true;
        }
    });
}

//------------------------------------------------
//------------------------------------------------
//-----------    SECCION DE EVENTOS   -------------------------------------
//------------------------------------------------

//Ejercicio 1
btnListar.addEventListener('click', () => {
    let texto_html = listarAutos(dataAuto); //capturamos el string en una variable
    divListAuto.innerHTML = texto_html; // .innerHTML() => agrega html al elemento.
})

btnClearListar.addEventListener('click', () => {
    divListAuto.innerHTML = ''; // ahora el html estara vacio.
})


//Ejercicio 2
btnListarAños.addEventListener('click', () => {
    let texto_html = listarAnios(dataAuto); //capturamos el string en una variable
    console.log(texto_html)
    selectAnio.innerHTML = texto_html; // .innerHTML() => agrega html al elemento.
})

btnClearListarAños.addEventListener('click', () => {
    selectAnio.innerHTML = ''; // .innerHTML() => agrega html al elemento.
})


//Ejercicio 3

btnListColor.addEventListener('change', () => {

    //Capturare el color seleccionado.
    var color = btnListColor.value;

    //Invoco la funcion para generar un nuevo arreglo.
    var aAutosByColor = listarByColor(dataAuto, color);

    //Invoco la funcion que genera
    //el listado de html pero le envio el nuevo arreglo filtrado
    let texto_html = listarAutos(aAutosByColor); //capturamos el string en una variable

    divListAuto2.innerHTML = texto_html;
})


