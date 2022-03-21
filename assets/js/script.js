// OMDB
// Here is your key: a82e041
// Please append it to all of your API requests,
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=a82e041
// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=67bca831-879e-4649-a903-4340d4dcc727
// If you did not make this request, please disregard this email.
//
// --------------------------------------------------------------------------------------------------------
// Giphy
// Key: "E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T"
//
// ----------------------------------------------------------------------------------------------------
// IMDB
// Key
// In theatres
// URL: https://imdb-api.com/en/API/InTheaters/k_57knyc4o
// Coming sooon
// URL https://imdb-api.com/en/API/ComingSoon/k_57knyc4o
// Advanced search
// URL https://imdb-api.com/API/AdvancedSearch/k_57knyc4o?title=
// 
// "https://www.imdb.com/title/" + 


var movieValue = document.getElementById("movie-value");
var submitBtn = document.getElementById("submit")
// where we are appending the movie Cards
var moviesContainer = document.getElementById("moviesContainer");
// where we are app gifs
var gifsContainer = document.getElementById("gifsContainer");



var displayGifs = function (content) {
        gifsContainer.innerHTML = "";
    for (var i = 0; i < content.data.length; i++) {
        console.log(content.data[i].images.downsized.url);
        
        var gifCardEL = document.createElement("div");
        gifCardEL.setAttribute("class", "py-3 container");
        var gifItem = document.createElement("img");
        gifItem.src = content.data[i].images.downsized.url;
        gifItem.setAttribute("style", "max-height: 100px");
        gifCardEL.appendChild(gifItem);
        gifsContainer.appendChild(gifCardEL);
    }
};
var displayMovies = function (data) {
    moviesContainer.innerHTML = "";
     
    for (var i = 0; i < 6; i++) {
        // console.log(data.results[i]);
        // console.log(data.results[i].title);
        // console.log(data.results[i].image);
        // console.log(data.results[i].plot);
        // console.log(data.results[i].imDbRating);
        // console.log(data.results[i].stars);
        // console.log(data.results[i].genres);
        // console.log(data.results[i].id)
        if(data.results.length > 0 ){
            // IMBD movie Id
            var movieId = data.results[i].id;
        
             // Movie Wrapper Card
        var movieCard = document.createElement("div");
        movieCard.setAttribute("class", "card py-3 container column is-2");
        

        // Title
        var movieTitle = data.results[i].title;
        var titleEl =  document.createElement("h3");
        titleEl.setAttribute("class", "card-header-title")
        titleEl.textContent = movieTitle;
        
        // Poster
        var moviePoster = data.results[i].image;
        var posterEl = document.createElement("img");
        var posterLinkEl = document.createElement("a");
        posterEl.setAttribute("src", moviePoster);
        posterEl.setAttribute("style", "image is-4by3");
        posterLinkEl.setAttribute("href", "https://www.imdb.com/title/" + movieId);
        posterLinkEl.appendChild(posterEl);

         // plot
        var moviePlot = data.results[i].plot;
        var plotEl = document.createElement("p");
        plotEl.setAttribute("style", "card-content");
        plotEl.textContent = "Plot: " + moviePlot;

        // Stars
        var movieStars = data.results[i].stars;
        var starsEl = document.createElement("p")
        starsEl.textContent = "STARS: " + movieStars;

        // Genres
        var movieGenre = data.results[i].genres;
        var genreEl = document.createElement("p");
        genreEl.setAttribute("style", "card-footer-item");
        genreEl.textContent = "GENRE: " + movieGenre;

        movieCard.appendChild(titleEl);
        movieCard.appendChild(posterLinkEl);
        movieCard.appendChild(plotEl);
        movieCard.appendChild(starsEl);
        movieCard.appendChild(genreEl);
        moviesContainer.appendChild(movieCard);
                


        }
    }
};
// Movies Fetching
var getData = function (movie) {
// "movie" is a parameter that you name it
    var imbdUrl = 'https://imdb-api.com/API/AdvancedSearch/k_57knyc4o?title=' + movie + '&title_type=feature';
    console.log(imbdUrl);
    fetch(imbdUrl).then(function (response){
        // 
        response.json().then(function(data){
            console.log(data);
            // Expand this logic to create something else
            if(data.results.length === 0 ){
                console.log("error");
                alert("Please input a Movie Name");

            } else { 
            displayMovies(data);
            
            }
           
        });
          
    
    });
// Giphy fetching
    var giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=' + movie + '&api_key=E1Nyp3nLmOcDCuxWhDaoGASokkuweu2T&limit=5';
    console.log(giphyUrl)
    fetch(giphyUrl).then(function (response) {
        response.json().then(function (data) {
        console.log(data)
        displayGifs(data);
        });
    });
};
// var submitButton = document.getElementById("submit");
// submitButton.addEventListener();
    submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    getData(movieValue.value);
    });


// ombd
    // var omdbUrl = 'http://www.omdbapi.com/?apikey=a82e041&s=' + movie + '&type=movie&plot';
    // console.log(omdbUrl)
    // fetch(omdbUrl).then(function (response) {
    //     response.json().then(function (data) {
    //     console.log(data)
    //     displayMovies(data);
    //     });
    // });
// Upcoming movies fetching
    // var comingSoonUrl = 'https://imdb-api.com/en/API/ComingSoon/k_57knyc4o'
    // console.log(comingSoonUrl);
    // fetch(comingSoonUrl).then(function(response){
    //     response.json().then(function(data){
    //         console.log(data);
    //     });
    // });