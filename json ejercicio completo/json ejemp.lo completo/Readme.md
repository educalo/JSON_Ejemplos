# JSON es el acrónimo para JavaScript Object Notation

Aunque su nombre lo diga, no es necesariamente parte de JavaScript, de hecho ***es un estándar basado en texto plano para el intercambio de información.*** Por lo que se usa en muchos sistemas que requieren mostrar o enviar información.

![alt text](./src/bs/json-serialize-killer.jpg) 

***La ventaja de JSON*** al ser un formato que es independiente de cualquier lenguaje de programación, ***es que los servicios que comparten información por éste método, no necesitan hablar el mismo idioma, es decir, el emisor puede ser Java y el receptor PHP***, cada lenguaje tiene su propia librería para codificar y decodificar cadenas de JSON.

###### Resumen: JSON (JavaScript Object Notation) es un estándar basado en texto plano para el intercambio de información. La ventaja de JSON es que los servicios que comparten información por éste método, no necesitan hablar el mismo idioma, es decir, el emisor puede ser Java y el receptor PHP

#  Learn by doing
###### Para realizar los ejemplos solo hace falta presionar F12 y abrir el inspector del navegador, en la pestaña de consola pegar los script siguientes.

## Como crear un ObjetoJSON

En el siguiente ejemplo muestro como se crear un objeto JSON.

```js
var oAuto = new Object();

oAuto.modelo = "BMW";
oAuto.marca = "Serie 9";
oAuto.color = ["red"];
oAuto.anio = 2020;
oAuto.foto = "https://a.ccdn.es/cnet/2018/12/15/36518241/166250105_g.jpg";

typeof(oAuto);// Object
```

Hasta este punto, podemos ver que oAuto es de tipo Object ¿Entonces no es un JSON? JSON es un formato de texto sencillo para el intercambio de datos. 

Así se ve nuestro objeto :

```js
var oAuto = {
    modelo : "BMW",
    marca : "Serie 9",
    color : ["Red"],
    anio : 2020,
    foto : "https://a.ccdn.es/cnet/2018/12/15/36518241/166250105_g.jpg"
}
```


**El formato JSON se basa en pares atributo-valor.** 
```js
// { atributo : valor}

var myString = JSON.stringify(oAuto);
console.log(myString);

// El método JSON.stringify() convierte un objeto o valor de JavaScript
// en una cadena de texto JSON si inspeccionamos con typeof(myString)
// nos arrojara que es de tipo String.
```

Si lo que deseamos es convertir un objeto o una cadena de texto JSON
a JSON necesitamos usar el comando JSON.parse()

```js
var jsonAuto = JSON.parse(myString);
typeof(jsonAuto)

// Si inspeccionamos con typeof()
// nos arrojara que es de tipo object.
```

**¿Entonces un JSON es un Object? Si y no. eso depende para que lo uses y como lo uses.**


## Como crear una data JSON

Para esto es necesario saber como funciona un arreglo. como funciona .push() .length

```js
// Crearemos un arreglo que contendrá a todos los autos.
var dataAuto = new Array();
dataAuto.length;
// La consola nos arroja 0 por que el array esta vacio.
```

Agregaremos un object al arreglo dataAuto con el comando .push()

```js
dataAuto.push(oAuto);

// Ahora nuestro arreglo se ve asi.
var dataAuto = [
    {
        modelo : "BMW",
        marca : "Serie 9",
        color : ["Red"],
        anio : 2020,
        foto : "https://a.ccdn.es/cnet/2018/12/15/36518241/166250105_g.jpg"
    }
]

//si probamos el .length nos arrojara 1
dataAuto.length;
```

```JavaScript
// Agregaremos mas objetos al arreglo dataAuto.
var oAuto = new Object();

oAuto.modelo = "Toyota";
oAuto.marca = "Corolla 18";
oAuto.color = ["Red","Blue"];
oAuto.anio = 2020;
oAuto.foto = "https://m.media-amazon.com/images/I/712-mbJHZqL._UY560_.jpg";

dataAuto.push(oAuto);

// Agregaremos dos mas.
var oAuto = new Object();
oAuto.modelo = "Suzuki";
oAuto.marca = "Ignis";
oAuto.color = ["Red","Silver"];
oAuto.anio = 2017;
oAuto.foto = "https://www.telegraph.co.uk/content/dam/motoring2/2015/12/01/vitara-main-xlarge_trans_NvBQzQNjv4BqpiVx42joSuAkZ0bE9ijUnGH28ZiNHzwg9svuZLxrn1U.jpg?imwidth=1400";

dataAuto.push(oAuto);

var oAuto = new Object();
oAuto.modelo = "Volkswagen";
oAuto.marca = "California";
oAuto.color = ["Red","Silver"];
oAuto.anio = 2015;
oAuto.foto = "https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Volkswagen_California_T6_2016_C01.jpg?itok=ZSYMIqFY";

dataAuto.push(oAuto);

```

## PREGUNTAS 

¿Cuantos autos tiene nuestro arreglo dataAuto?

``` js
    dataAuto.length
```

¿Como creamos una cadena en formato JSON?

``` js
    var stringJSON = JSON.stringify(dataAuto);    
```

¿Como volvemos un String JSON a un objeto JSON? 

``` js
    var objectJSON = JSON.parse(stringJSON);    
```

## BREAK : ## 
Gracias por seguir leyendo ayer fue viernes 22 y saliendo del trabajo me parecio buena idea hacer un resumen de como se trabaja con un objeto JSON, si puedes contribuir no dudes en mandame un Pull requests. Gracias, sigamos. .......



# JUGAREMOS CON NUESTRA DATA AUTO

Nuestro arreglo data se ve asi.

``` js
    [{…}, {…}, {…}, {…}]   
```

Dentro de cada posicion del arreglo tenemos un objeto el cual tiene las siguientes propiedades.

``` js
    {
        modelo : "",
        marca : "",
        color : [],
        anio : 0,
        foto : ""
    } 
```

Entonces como accedemos al valor de la propiedad de un auto? **por posicion y nombre de la propiedad**

``` js
     // Ejemplo: Quiero ver el modelo del 2° auto.
     dataAuto[1].modelo; // Toyota
     
     // Ejercicios: Quiero ver el año del 1° auto.
     dataAuto[0].anio; //2020
```

## FACIL?, ahora lo pondre dificil. Aplicaremos nuestros conocimiento en bucles, condicionales, arreglos y objetos?

Ejercicio 1: Listar todos los modelos de autos.

```js
// modo 1: Sabemos que dataAuto es un arreglo y cada modelo de auto esta dentro de un objeto. Entonces solo necesitamos recorrer la posición de cada arreglo y asignarle la propiedad modelo.

for(let i = 0; i < dataAuto.length; i++) {
    console.log( dataAuto[i].modelo ); 
}

//modo 2:
dataAuto.forEach((objeto) => {
    console.log( objeto.modelo ); 
});

// Others
```
Ejercicio 2: Listar todos los años de nuestros autos.
```js
// modo 1: Lo mismo necesitamos recorrer el arreglo pero tenemos que filtrar los años repetidos.

// Bucle sin validar los años que se repiten. <= eso no es bueno.
for(let i = 0; i < dataAuto.length; i++) {
    console.log( dataAuto[i].anio ); 
}// 2020 2020 2017  2015 , el año 2020se se repite dos veces.

// Tenemos que validar los años para que no se repitan, para eso lo almacenaremos en un arreglo.
var aAnios = [];

for (let i = 0; i < dataAuto.length; i++) {

    let anio = dataAuto[i].anio;

    //.indexOf = busca un valor en un arreglo y devuelve la posicion.
    // si no existe el valor retorna -1
    if (aAnios.indexOf(anio) == -1) {
        // si no existe se agrega el año al arreglo aAnios.
        aAnios.push(anio);
    };
}

aAnios; // resultado [2020, 2017, 2015] (Y)



//modo 2:
var aAnios = [];

dataAuto.forEach((objeto) => {
    if (aAnios.indexOf(objeto.anio) == -1) {
        aAnios.push(objeto.anio); // si no existe se agrega el año al arreglo aAnios.
    };
});

aAnios; // [2020, 2017, 2015]  (Y)

// Others
```

Ejercicio 3: Retorna todos los autos que son de color Red.

```js
// Un poco dificil ya que los colores son un arreglo.
// pero si te das cuenta es pareciso al anterio ejercicio.
// .filter() <= este comando filtra un array y te retorna un nuevo array.

var newDataAutoRed = [];

newDataAutoRed = dataAuto.filter((objeto) => {
    let aColores = objeto.color;
    if (aColores.indexOf('red') == -1) {
        return false;
    } else {
        return true;
    }
});

newDataAutoRed; // nos retorna 3 objetos [{…}, {…}, {…}] por que uno no tiene color red.
```

Demo: 
[Repositorio JSON-or-JASON](https://cristianpumaes6.github.io/JSON-or-JASON/src)


## Author :

- [Repositorio JSON-or-JASON](https://github.com/CristianPumaES6/JSON-or-JASON)