import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import crmRoutes from './src/routes/crmRoutes';
import productRoutes from './src/routes/productRoutes';
import movieRoutes from './src/routes/movieRoutes';
import youtubeRoutes from './src/routes/youtubeRoutes';



const app = express();
const PORT = 5000;

// Using any file in the server like image, cvs or any .json file too
app.use(express.static('public'));

// mongoose connection
mongoose.Promise = global.Promise; // This code states that we are going to wait the results
mongoose.connect('mongodb://localhost:27017/CRMdb', { // CRMdb is the name of database
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// This is a new body-parser for express v 4.16 and more
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

// JWT setup
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

// This code allow us to use crmRoutes from routes folder with app express
crmRoutes(app);
productRoutes(app);
movieRoutes(app);
youtubeRoutes(app);


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});