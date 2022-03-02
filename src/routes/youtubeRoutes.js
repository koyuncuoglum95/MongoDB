import { addYoutube, deleteYoutubeId, getYoutube, getYoutubeId, updatedYoutubeId } from "../controllers/youtubeControllers"

const youtubeRoutes = (app) => {
    app.route('/youtube')
        .get((req,res,next) => {
            // Middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getYoutube)

        .post(addYoutube);


    app.route('/youtube/:youtubeID')
        .get(getYoutubeId)
        .put(updatedYoutubeId)
        .delete(deleteYoutubeId)
};

export default youtubeRoutes;


