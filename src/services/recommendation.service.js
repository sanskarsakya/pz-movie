
const apiUrl = 'https://api.themoviedb.org/3';

export const recommendationService = {
    getRecommendationByMovie,
};

function getRecommendationByMovie(id) {

    const requestOptions = {
        method: "GET",
    };

    return fetch(`${apiUrl}/movie/${id}/recommendations?api_key=bf42acf712bba686cfff9820897f4edb&language=en-US`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        return data.results;
    });
}