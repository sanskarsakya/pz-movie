
const apiUrl = 'http://localhost:3004/watchlist';

export const watchListService = {
    getAllWatchList,
    removeWatchList
};

function getAllWatchList() {

    const requestOptions = {
        method: "GET",
    };

    return fetch(`${apiUrl}`, requestOptions).then(handleResponse);
}

function removeWatchList(id) {

    const requestOptions = {
        method: "DELETE",
    };

    return fetch(`${apiUrl}/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        return data;
    });
}