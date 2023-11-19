"use strict";
const axios = require("axios");
const Models = require("../models");

const getBooks = async(req, res) => {
  try {
    const response = await axios.get("https://www.anapioficeandfire.com/api/books")
    const books = response.data.map(({name, publisher, url}) => ({ name, publisher, url }));
    const result = await Models.Books.bulkCreate(books)

    res.send({ result: 200 , data: result});
  } catch (error) {
      console.error(error);
  }

};




module.exports = {
  getBooks,
};
