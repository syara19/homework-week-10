const { User } = require("../models");

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
    const user = await User.findByPk(id);
    return user;
  };

  static update = async (id, payload) => {
    const user = await UserRepository.findOne(id);
    if (!user) throw { name: "ErrorNotFound" };
    return await user.update(payload);
  };

  static delete = async (id) => {
    const user = await UserRepository.findOne(id);
    if (!user) throw { name: "ErrorNotFound" };
    return await user.destroy();
  };
}

module.exports = UserRepository;
