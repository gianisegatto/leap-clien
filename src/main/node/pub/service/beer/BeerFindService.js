class BeerFindService {

    constructor(beerFindRepository) {
        this.beerFindRepository = beerFindRepository;
    }

    findById(id) {
        this.beerFindRepository.findById(id);
    }

}

module.exports = BeerFindService;