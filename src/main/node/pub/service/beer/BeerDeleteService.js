class BeerDeleteService {
    constructor(beerDeleteRepository) {
        this.beerDeleteRepository = beerDeleteRepository;
    }

    delete(id) {
        return this.beerDeleteRepository.delete(id);
    }
}

module.exports = BeerDeleteService;