const UserRepository = require("../repositories/UserRepositories");

class UserService {
  static findAll = async () => {
    const user = await UserRepository.findAll();
    return user;
  };

  static findOne = async (id) => {
    const user = await UserRepository.findOne(id);
    return user;
  };

  static create = async (payload) => {
    const user = await UserRepository.create(payload);
    return user;
  };

  static update = async (id, payload) => {
    const user = await UserRepository.update(id, payload);
    return user;
  };

  static delete = async (id) => {
    const user = await UserRepository.delete(id);
    return user;
  };
}

module.exports = UserService;
