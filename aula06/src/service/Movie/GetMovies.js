import {api} from "../../config"

async function GetMovies(movie) {
    try {
        const response = await api.get(`/?apikey=25894210&s=${movie}`);

        return response.data.Search;
    } catch (error) {
        alert(error);
    }
}

export default GetMovies;