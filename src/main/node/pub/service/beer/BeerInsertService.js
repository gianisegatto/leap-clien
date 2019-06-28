class BeerInserService {

    constructor(beerInsertRepository) {
        this.beerInsertRepository = beerInsertRepository;
    }

    insert(beer) {
        return this.beerInsertRepository.insert(beer);
    }
}

module.exports = BeerInserService;