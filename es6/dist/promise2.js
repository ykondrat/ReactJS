'use strict';

var movieList = document.getElementById('movies');

function addMovie(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function success(response) {
                resolve(response.Search);
            },
            error: function error(_error) {
                reject(_error);
            }
        });
    });
}

var search = 'batman';

// getData(`http://www.omdbapi.com/?apikey=57d13b99&s=${search}`﻿)
//     .then(movies => movies.forEach(movie => addMovie(movie)))
// .cath(error => console.error(error););

$('#search').on('keyup', function () {
    search = this.value;
    // console.log(this.value);
    $('#movies img').remove();
    getData('http://www.omdbapi.com/?apikey=57d13b99&s=' + search).then(function (movies) {
        return movies.forEach(function (movie) {
            return addMovie(movie);
        });
    });
});