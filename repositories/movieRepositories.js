const Movie = require("../models/movie");

class MovieRepository {
  static create = async (payload) => {
    const movie = await Movie.create(payload);
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
    return await movie.update(payload);
  };

  static delete = async (id) => {
    const movie = await MovieRepository.findOne(id);

    return await movie.destroy();
  };
}

module.exports = MovieRepository;
