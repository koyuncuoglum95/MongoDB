import mongoose from 'mongoose';
import { movieSchema } from '../models/movieModel';

const Movie = mongoose.model('Movie', movieSchema);

export const addMovie = (req, res) => {
    let newMovie = new Movie(req.body);

    newMovie.save((err, movie) => {
        if(err) {
            res.send(err);
        }
        res.json(movie);
    });
}

export const getMovie = (req,res) => {
    Movie.find({}, (err, movie) => {
        if(err) {
            res.send(err);
        }
        res.json(movie);
    });
}

export const getMovieId = (req, res) => {
    Movie.findById(req.params.movieID, (err, movie) => {
        if(err) {
            res.send(err);
        }
        res.json(movie);
    });
}

export const updateMovie = (req, res) => {
    Movie.findOneAndUpdate({_id: req.params.movieID}, req.body, {useFindAndModify: false, new: true}, (err, movie) => {
        if(err) {
            res.send(err);
        }
        res.json(movie);
    });
}

export const deleteMovie = (req, res) => {
    Movie.remove({_id: req.params.movieID}, (err, movie) => {
        if(err) {
            res.send(err);
        }
        res.json({message: "The movie has been removed successfully !"});
    });
}