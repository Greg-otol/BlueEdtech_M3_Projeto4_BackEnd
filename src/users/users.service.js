const user = require('./user');

const findByUserNameUserService = (username) => user.findOne({ username: username });

const findByIdUserService = async (idUser) => await user.findById(idUser);

const createUserService = (body) => user.create(body);

const findAllUserService = () => user.find();

module.exports = {
  findByUserNameUserService, 
  createUserService,
  findAllUserService,
  findByIdUserService
};