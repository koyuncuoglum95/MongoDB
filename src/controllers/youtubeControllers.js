import mongoose from 'mongoose';
import { youtubeSchema } from '../models/youtubeModel';

const Youtube = new mongoose.model('Youtube', youtubeSchema);

export const addYoutube = (req, res) => {
    let newYoutube = new Youtube(req.body);

    newYoutube.save((err, youtube) => {
        if(err) {
            res.send(err);
        }
        res.json(youtube);
    });
}

export const getYoutube = (req, res) => {
    Youtube.find({}, (err, youtube) => {
        if(err) {
            res.send(err);
        }
        res.json(youtube);
    });
}

export const getYoutubeId = (req, res) => {
    Youtube.findById(req.params.youtubeID, (err, youtube) => {
        if(err) {
            res.send(err);
        }
        res.json(youtube);
    });
}

export const updatedYoutubeId = (req, res) => {
    Youtube.findOneAndUpdate({_id:req.params.youtubeID}, req.body, {useFindAndModify: false, new: true}, (err, youtube) => {
        if(err) {
            res.send(err);
        }
        res.json(youtube);
    });
}

export const deleteYoutubeId = (req, res) => {
    Youtube.remove({_id: req.params.youtubeID}, (err, youtube) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'The youtube activities has been removed sucessfully !'});
    });
}