const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'deca4351',
            s: searchTerm
        }
    });

    return response.data.Search;
};


const onInput = async event => {
  const movies = await fetchData(event.target.value);   
  console.log(movies);  
};

input.addEventListener('input', debounce(onInput, 1000));
