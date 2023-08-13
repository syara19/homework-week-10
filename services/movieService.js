const MovieRepository = require("../repositories/movieRepositories");

class MovieService {
  static findAll = async () => {
    const movie = await MovieRepository.findAll();
    return movie;
  };

  static findOne = async (id) => {
    const movie = await MovieRepository.findOne(id);
    return movie;
  };

  static create = async (payload, fileImg) => {
    const movie = await MovieRepository.create(payload, fileImg);
    return movie;
  };

  static update = async (id, payload) => {
    const movie = await MovieRepository.update(id, payload);
    return movie;
  };

  static delete = async (id) => {
    const movie = await MovieRepository.delete(id);
    return movie;
  };
}

module.exports = MovieService;
