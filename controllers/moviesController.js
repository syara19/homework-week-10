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
      const movie = await MovieService.findOne(req.params.id);

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
      const { title, genres, year } = req.body;
      let linkImg = `http://localhost:3000/uploads/${req.file.filename}`;
      const data = {
        title,
        genres,
        year,
        photo: linkImg,
      };

      if (!req.file) throw new Error();

      await MovieService.create(data);
      res.status(201).json({ message: "movie created successfully" });
    } catch (error) {
      next(error);
    }
  };
  static update = async (req, res, next) => {
    try {
      await MovieService.update(req.params.id, req.body);
      res.status(200).json({
        message: "movie update successfully",
      });
    } catch (error) {
      next(error);
    }
  };
  static delete = async (req, res, next) => {
    try {
      await MovieService.delete(req.params.id);
      res.status(200).json({ message: "movie delete successfully" });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MovieController;
