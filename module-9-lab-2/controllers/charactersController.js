"use strict";
const axios = require("axios");
const Models = require("../models");

const getCharacters = async(req, res) => {
  try {
    const response = await axios.get("https://www.anapioficeandfire.com/api/characters")
    const characters = response.data.map(({name, gender, url}) => ({ name, gender, url }));
    const result = await Models.Characters.bulkCreate(characters)

    res.send({ result: 200 , data: result});
  } catch (error) {
      console.error(error);
  }

};

const updateCharacter = async (req, res) => {
  try {
    const characterId = req.params.characterId; // Assuming you pass the character ID as a parameter
    const response = await axios.get(`https://www.anapioficeandfire.com/api/characters/${characterId}`);
    const characters = response.data.map(({name, gender, url}) => ({ name, gender, url }));
    const result = await YourCharacterModel.create(characters[0]);
    
    res.send({ result: 200, data: result });
  } catch (err) {
    console.error(err);
    res.status(500).send({ result: 500, error: "Internal Server Error" });
  }
};






module.exports = {
  getCharacters,
  updateCharacter,
};