const User = require("../models/user");

class UserRepository {
  static create = async (payload) => {
    const user = await User.create(payload);
    return user;
  };

  static findAll = async () => {
    const users = await User.findAll();
    return users;
  };

  static findOne = async (id) => {
    const users = await User.findByPk(id);
    return users;
  };

  static update = async (id, payload) => {
    const user = await UserRepository.findOne(id);

    return await user.update(payload);
  };

  static delete = async (id) => {
    const user = await UserRepository.findOne(id);

    return user.destroy();
  };
}

module.exports = UserRepository;
