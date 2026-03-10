import { apiClient } from '../config/apiClient.js'
import { key } from '../config/key.js'

const searchMovies = async (req, res) => {
    const searchTerm = req.query.title;
    try {
        const response = await apiClient.get(`/?apikey=${key}&t=${searchTerm}`);
        console.log('response: ', response.data);

        const transformedData = {
        title: response.data.Title,
        year: response.data.Year,
        length: response.data.Runtime,
        genre: response.data.Genre,
        actors: response.data.Actors,
        plot: response.data.Plot
        };

        res.send(transformedData);

    } catch (error) {
        res.status(500).json({ error: error.message})
        console.error(error.message)
    }

}

const getMovie = async (req, res) => {
    const id = req.params.id;
        try {
        const response = await apiClient.get(`/?apikey=${key}&i=${id}`);

        const transformedData = {
        title: response.data.Title,
        year: response.data.Year,
        length: response.data.Runtime,
        genre: response.data.Genre,
        actors: response.data.Actors,
        plot: response.data.Plot
        };

        res.send(transformedData);

    } catch (error) {
        res.status(500).json({ error: error.message})
        console.error(error.message)
    }
}

export default {
    searchMovies,
    getMovie
}