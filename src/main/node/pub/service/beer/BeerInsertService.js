class BeerInserService {

    constructor(beerInsertRepository) {
        this.beerInsertRepository = beerInsertRepository;
    }

    insert(beer) {
        this.beerInsertRepository.insert(beer);
    }
}

module.exports = BeerInserService;