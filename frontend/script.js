const MovieListComponent = function (title, year, description) {
    return `
    <div class="cards" >
        <div class="movieTitle">${title}</div>
        <div class="premierYear">${year}</div>
        <div class="plot">${description}</div>
    </div>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", `
    <h1>
    Movies
    </h1>`);

    for (const movie of movies.cards) {
        rootElement.insertAdjacentHTML("beforeend", MovieListComponent(movie.title, movie.sub, movie.text))
    }
}


window.addEventListener("load", loadEvent)