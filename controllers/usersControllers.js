const UserService = require("../services/userService");

class UserController {
  static findAll = async (req, res, next) => {
    try {
      const users = await UserService.findAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  static findOne = async (req, res, next) => {
    try {
      const user = await UserService.findOne(req.params.id);
      if (!user) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    try {
      await UserService.create(req.body);

      res.status(201).json({ message: "user created successfully" });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      await UserService.update(req.params.id, req.body);
      res.status(200).json({
        message: "user update successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      await UserService.delete(req.params.id);

      res.status(200).json({ message: "user delete successfully" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserController;
