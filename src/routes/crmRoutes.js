import { addNewContact, getContacts, getIdContact, updateContact, deleteContact } from "../controllers/crmController";
import { loginRequired, login, register } from "../controllers/userController";

const crmRoutes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {   // get all data
            // Middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
            }, loginRequired,  getContacts)

        // putting here contact api controller into post request
        .post(loginRequired, addNewContact);


    app.route('/contact/:contactID')
        .get(loginRequired, getIdContact) // get a data by id
        .put(loginRequired, updateContact) // update a data by id
        .delete(loginRequired, deleteContact) // detele a data by id


    // registeration 
    app.route('/auth/register')
        .post(register);


    app.route('/auth/login')
        .post(login);
    }

export default crmRoutes;