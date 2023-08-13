const { Movie } = require("../models");

class MovieRepository {
  static create = async (payload, fileImg) => {
    const movie = await Movie.create(payload, fileImg);
    return movie;
  };

  static findAll = async () => {
    const movies = await Movie.findAll();
    return movies;
  };

  static findOne = async (id) => {
    const movies = await Movie.findByPk(id);
    return movies;
  };

  static update = async (id, payload) => {
    const movie = await MovieRepository.findOne(id);
    if (!movie) throw { name: "ErrorNotFound" };
    return await movie.update(payload);
  };

  static delete = async (id) => {
    const movie = await MovieRepository.findOne(id);
    if (!movie) throw { name: "ErrorNotFound" };
    return await movie.destroy();
  };
}

module.exports = MovieRepository;
