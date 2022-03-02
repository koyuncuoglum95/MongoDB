import mongoose from 'mongoose';
import { productSchema } from '../models/productModel';

const Product = mongoose.model('Product', productSchema);

export const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, product) => {
        if(err) {
            res.send(err);
        }
        res.json(product);
    });
}

export const getAllProduct = (req,res) => {
    Product.find({}, (err, product) =>{
        if(err) {
            res.send(err);
        }
        res.json(product);
    });
}

export const getIdProduct = (req, res) => {
    Product.findById(req.params.productID, (err, product) => {
        if(err) {
            res.send(err);
        }
        res.json(product);
    });
}

// new: true is the updated values of Schemas (API) like productname, desciption and accepting new values
// useAndModify: false means the document cannot change after the update. (Only Once)
export const updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.productID}, req.body, {new: true, useFindAndModify: false}, (err, product) => {
        if(err) {
            res.send(err);
        }
        res.json(product);
    });
}

export const deleteProduct = (req, res) => {
    Product.remove({_id: req.params.productID}, (err, product) => {
        if(err) {
            res.send(err);
        }
        res.json({message: "Your product has been deleted successdfully"});
    });
}

