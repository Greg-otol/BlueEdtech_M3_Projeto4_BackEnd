const characterService = require("./rickandmorty.service");

const createCharacterController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    if (!name || !imageUrl) {
      res.status(400).send({
        message:
          "Inserir todos os dados necessário para a criação do personagem!"
      });
    }
    const { id } = await characterService.createCharacterService(
      name,
      imageUrl,
      req.userId
    );
    return res.send({
      message: "Personagem criado com sucesso!",
      character: { id, name, imageUrl },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const updatedCharacter = await characterService.updateCharacterServices(idParam, characterEdit);
  res.send(updatedCharacter);
}

const findOneCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const character = await characterService.findOneCharacterService(idParam);
  res.send(character);
};

const findAllCharactersController = async (req, res) => {
  try {
    const characters = await characterService.findAllCharactersService();
    if (characters.length === 0) {
      return res.status(400).send({ message: "Não existe personagem cadastrado!" });
    }
    return res.send({results: characters});
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await characterService.deleteCharacterServices(idParam);
  await characterService.deleteCharacterServices(idParam);
  res.status(200).send({
    message: `Tarefa '${chosenCharacter.name}' removida com sucesso!`,
  });
};

const searchCharacterController = async (req, res) => {
  const { name } = req.query;
  const characters = await characterService.searchCharacterService(name);
  if (characters.length === 0) {
    return res
      .status(400)
      .send({ message: "Não existe personagem com esse nome!" });
  }
  return res.send({characters});
};

module.exports = {
  findAllCharactersController,
  createCharacterController,
  findOneCharacterController,
  updateCharacterController,
  deleteCharacterController,
  searchCharacterController
};
