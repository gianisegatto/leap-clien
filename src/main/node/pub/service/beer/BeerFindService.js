const WebErrorBuilder = require("leap-web").WebErrorBuilder;
const ErrorCode = require("leap-web").ErrorCode;

class BeerFindService {

    constructor(beerFindRepository) {
        this.beerFindRepository = beerFindRepository;
    }

    findById(id) {
        return this.beerFindRepository.findById(id)
            .then(beers => {
                if (beers === null || beers.length === 0) {
                    throw WebErrorBuilder.build("BeerFindService", "Beer: " + id + " not found", ErrorCode.NOT_FOUND);
                }
                return beers;
            });
    }

}

module.exports = BeerFindService;