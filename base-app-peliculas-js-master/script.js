
document.getElementById("searchButton").addEventListener('click',  searchMovies)

let apiKey = "d67f7a404bde48c776338dcc7d13d6b1"
let urlBase = "https://api.themoviedb.org/3/search/movie"
let urlImg = "https://image.tmdb.org/t/p/w200"

let resul_container = document.getElementById("results")
let parrafo_abajo = document.getElementById("p-abajo-titulo").innerHTML = "¡ Descubre cuantas versiones hay de tus peliculas favoritas !"

function searchMovies(){

    setTimeout(function(){
        let searchInput = document.getElementById("searchInput").value
        
        fetch(`${urlBase}?api_key=${apiKey}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results))
        
    }, 1500);

    let parrafo_abajo2 = document.getElementById("p-abajo-titulo").innerHTML = " "
    resul_container.classList.add("cargando-center")
    resul_container.innerHTML = ""
}

function displayMovies(movies){
    
    resul_container.innerHTML = ""
    resul_container.classList.remove("cargando-center")
    

    if(movies.length === 0){
        resul_container.innerHTML = "<p class ='pNone'> No se escontraron resultados para tu busqueda </p>"
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")

        let title = document.createElement("h2")
        title.textContent = movie.title ;

        let releaseDate = document.createElement("h4")
        releaseDate.textContent ="la fecha de lanzamiento fue :" + movie.release_date

        let description = document.createElement("p")
        description.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement("img")
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(description)

        resul_container.appendChild(movieDiv)

    });
}
