const apiUrl = 'https://api.themoviedb.org/3';

export const movieService = {
    getAll,
    // getById,
};

function getAll({ filter = 'popular', page = 1 }) {

    const requestOptions = {
        method: "GET",
        // api_key: "bf42acf712bba686cfff9820897f4edb",
        // language: "en-US",
        // page: page
    };

    return fetch(`${apiUrl}/movie/${filter}?api_key=bf42acf712bba686cfff9820897f4edb&language=en-US*page=${page}`, requestOptions).then(handleResponse);
}

// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${apiUrl}/movie/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text().then(text => {
        console.log(text.results)
        const data = text && JSON.parse(text);

        return data.results;
    });
}