const WebErrorBuilder = require("leap-web-express").WebErrorBuilder;
const ErrorCode = require("leap-web-express").ErrorCode;

class BeerListService {

    constructor(beerListRepository) {
        this.beerListRepository = beerListRepository;
    }

    list() {
        return this.beerListRepository.list()
            .then(beers => {
                if (beers === null || beers.length === 0) {
                    throw WebErrorBuilder.build("BeerListService", "Beers not found", ErrorCode.NOT_FOUND);
                }
                return beers;
            });
    }
}

module.exports = BeerListService;