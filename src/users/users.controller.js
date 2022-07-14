const userService = require("./users.service");
const authService = require("../auth/auth.service");

const createUserController = async (req, res) => {
  const { username, name, email, password, avatar } = req.body;
  if (!username || !name || !email || !password || !avatar) {
    return res.status(400).send({
      message: "Inserir todos os campos para criar um novo usuário!"});
  }
  const foundUser = await userService.findByUserNameUserService(username);
  if (foundUser) {
    return res.status(400).send({
      message: `O usuário ${foundUser.username} já existe!`,
    });
  }
  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err, message));
  if (!user) {
    return res.status(500).send({
      message: "Erro ao criar o usuário!",
    });
  }
  const token = authService.generateToken(user.id);
  res.status(201).send({
    message: "Usuário criado com sucesso!",
    user: {
      id: user.id,
      name,
      username,
      email,
      avatar
    },
    token
  });
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();
  if (users.length === 0) {
    return res.status(400).send({
      message: "Não há usuários cadastrados!",
    });
  }
  res.send(users);
};

module.exports = {
  createUserController,
  findAllUserController
};
