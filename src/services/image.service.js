
const apiUrl = 'https://api.themoviedb.org/3';

export const imagesService = {
    getImagesByMovie,
};

function getImagesByMovie(id) {

    const requestOptions = {
        method: "GET",
    };

    return fetch(`${apiUrl}/movie/${id}/images?api_key=bf42acf712bba686cfff9820897f4edb&language=null`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        return data.backdrops;
    });
}