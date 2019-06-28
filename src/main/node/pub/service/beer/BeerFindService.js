class BeerFindService {

    constructor(beerFindRepository) {
        this.beerFindRepository = beerFindRepository;
    }

    findById(id) {
        return this.beerFindRepository.findById(id);
    }

}

module.exports = BeerFindService;