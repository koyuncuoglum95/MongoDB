import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

// 'Contact' is the name of model
// Contact model is added to mongoDB inside of CRMdb
const Contact = mongoose.model('Contact', ContactSchema);

// add a data
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body); // req.body is the connection of Contact models like firstname,lastname and email to add the values to them
    // save() method saves the models and its objects into contact parameter
    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact); // turning models into json
    });
}

// get all data
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// get a data by id
export const getIdContact = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

// update a data by id
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactID}, req.body, { new: true, useFindAndModify: false}, (err, contact) => {
    if (err) {
        res.send(err);
    }
    res.json(contact);
});
}

// delete a data by id
export const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactID}, (err, contact) => {
    if (err) {
        res.send(err);
    }
    res.json({message: "The contact is deleted successfully !"});
});
}
