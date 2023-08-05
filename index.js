//Reusable Auto-Complete fucntion
  createAutoComplete({
    root: document.querySelector('.autocomplete'),

    renderOption(movie) {
        const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster;
        return `
        <img src = "${imgSrc}" />
         ${movie.Title} (${movie.Year})
        `;
    },
    onOptionSelect(movie){
        onMovieSelect(movie);
    },

    inputValue(movie) {
        return movie.Title
    },

    async fetchData (searchTerm)  {
        const response = await axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: 'deca4351',
                s: searchTerm
            }
        });
    
        if (response.data.Error) {
            return [];
            
        }
    
        return response.data.Search;
    }

  });



  //follow Up request
  const onMovieSelect = async movie => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'deca4351',
            i: movie.imdbID
        }
    });

    document.querySelector('#summary').innerHTML = movieTemplate(response.data)
  }


  const movieTemplate = (movieDetail) => {

    // Expanded summary and Statistics
    return `

    
    <article class ="media">
        <figure class ="media-left">
        <p class ="image">
            <img src ="${movieDetail.Poster}" />
        </p>
        </figure>
        <div class ="media-content"> 
         <div class ="content">
         <h1> ${movieDetail.Title}</h1>
         <h4> ${movieDetail.Genre}</h4>
         <p> ${movieDetail.Plot}</p>
         </div>
        </div>
    </article>
    
    
    <article class ="notification is-primary">
        <p class = "tittle"> ${movieDetail.Awards}</p>
        <p class ="subtitle">Awards</p>
    </article>  
    <article class ="notification is-primary">
        <p class = "tittle"> ${movieDetail.BoxOffice}</p>
        <p class ="subtitle">BoxOffice</p>
    </article> 
    <article class ="notification is-primary">
        <p class = "tittle"> ${movieDetail.Metascore}</p>
        <p class ="subtitle">Metascore</p>
    </article> 
    <article class ="notification is-primary">
        <p class = "tittle"> ${movieDetail.imdbRating}</p>
        <p class ="subtitle">IMDB Rating</p>
    </article> 
    <article class ="notification is-primary">
        <p class = "tittle"> ${movieDetail.imdbVotes}</p>
        <p class ="subtitle">IMDB Votes</p>
    </article>   

    `;
  }