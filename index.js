let peliculas = "";
let numero = "";


fetch("https://ghibliapi.herokuapp.com/films ").then(function (response) {
        return response.json();
    })
    .then(function recogerDatos(datos) {
        console.log(datos)
        for (let i = 0; i < datos.length; i++) {
            peliculas += `
                <div>
                <h3>${datos[i].title}</h3>
                <p>${datos[i].description}</p>
                </div>`;



        }
        document.getElementById("peliculas").innerHTML = peliculas;
    });