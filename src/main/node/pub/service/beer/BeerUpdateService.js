class BeerUpdateService {
    constructor(beerUpdateRepository) {
        this.beerUpdateRepository = beerUpdateRepository;
    }

    update(beer) {
        return this.beerUpdateRepository.update(beer);
    }
}

module.exports = BeerUpdateService;