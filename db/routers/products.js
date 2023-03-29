const express = require("express");
const {Product} = require('../models/product');
const router = express.Router();


router.get(`/`, async (req, res) => {
    const productList = await Product.find();
  
    //if a error come
    if (!productList) {
      res.status(500).json({ success: false });
    }
  
    res.send(productList);
  });
  
  //creating a new model of that product
  router.post(`/`, (req, res) => {
    const product = new Product({
      name: req.body.name,
      post: req.body.post,
      timestamp: req.body.timestamp,
      received: req.body.received
    });
    //Saving model in the database
    product
      .save()
      .then((createdProduct) => {
        res.status(201).json(createdProduct);
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          success: false,
        });
      });
  });

  //Editing a data
  router.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
      res.send(updatedProduct);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  //Deleting an entry
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.send(deletedProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


  module.exports = router;