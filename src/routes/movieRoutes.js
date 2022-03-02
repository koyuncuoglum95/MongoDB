import { addMovie, getMovie, getMovieId, updateMovie, deleteMovie } from "../controllers/movieController";

const movieRoutes = (app) => {
    app.route('/movie')
    .get((req,res,next) => {
        // Middleware 
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();

    }, getMovie)

    .post(addMovie);

    
    app.route('/movie/:movieID')
    .get(getMovieId)
    .put(updateMovie)
    .delete(deleteMovie);
}

export default movieRoutes;