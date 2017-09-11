let movieList = document.getElementById('movies');

function addMovie(movie){
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function(response) {
                resolve(response.Search);
            },
            error: function(error){
                reject(error);
            }
        });
    });
}

let search = 'batman';

// getData(`http://www.omdbapi.com/?apikey=57d13b99&s=${search}`﻿)
//     .then(movies => movies.forEach(movie => addMovie(movie)))
    // .cath(error => console.error(error););

$('#search').on('keyup', function(){
    search = this.value;
    // console.log(this.value);
    $('#movies img').remove();
    getData(`http://www.omdbapi.com/?apikey=57d13b99&s=${search}`﻿)
        .then(movies => {
            if (movies !== undefined) {
                movies.forEach(movie => addMovie(movie))
            }
        )
        .catch(error => console.error(error))

});
