class BeerListService {

    constructor(beerListRepository) {
        this.beerListRepository = beerListRepository;
    }

    list() {
        return this.beerListRepository.list();
    }
}

module.exports = BeerListService;