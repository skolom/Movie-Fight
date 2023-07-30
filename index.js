const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'deca4351',
            s: searchTerm
        }
    });

    console.log(response.data);
};


const onInput = event => {
  fetchData(event.target.value);     
};

input.addEventListener('input', debounce(onInput, 1000));
