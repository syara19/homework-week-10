const MovieService = require("../services/movieService");

class MovieController {
  static findAll = async (req, res, next) => {
    try {
      const movies = await MovieService.findAll();
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  };

  static findOne = async (req, res, next) => {
    try {
      const movie = await MovieService.findOne(req.params);
      if (!movie) {
        throw { name: "ErrorNotFound" };
      }
      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  };
  static create = async (req, res, next) => {
    try {
      if (!photo) {
        throw Error;
      }

      await MovieService.create(req.body, req.file);

      res.status(201).json({ message: "movie created successfully" });
    } catch (error) {
      next(error);
    }
  };
  static update = async (req, res, next) => {
    try {
      await MovieService.update(req.params, req.body);
      res.status(200).json({
        message: "movie update successfully",
      });
    } catch (error) {
      next(error);
    }
  };
  static delete = async (req, res, next) => {
    try {
      const movie = await MovieService.delete(req.params);

      if (!movie) throw { name: "ErrorNotFound" };

      res.status(200).json({ message: "movie delete successfully" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MovieController;
