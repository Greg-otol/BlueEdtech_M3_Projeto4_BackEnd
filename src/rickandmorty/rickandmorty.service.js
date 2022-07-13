const Character = require("./Rickandmorty");

const createCharacterService = (name, imageUrl, userId) => Character.create({
  name, imageUrl, user:userId
});

const updateCharacterServices = (idParam, characterEdited) =>
  Character.findByIdAndUpdate(idParam, characterEdited)
  .setOptions({ returnOriginal: false });

const findOneCharacterService = (idParam) => Character.findById(idParam);

const findAllCharactersService = () => Character.find();

const deleteCharacterServices = (idParam) => Character.findByIdAndDelete(idParam);

const searchCharacterService = (name) =>
  Character.find({
    name: { $regex: `${name || ""}`, $options: "i" },
  });

module.exports = {
  findAllCharactersService,
  createCharacterService,
  findOneCharacterService,
  updateCharacterServices,
  deleteCharacterServices,
  searchCharacterService
};
