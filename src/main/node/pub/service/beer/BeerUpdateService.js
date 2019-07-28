const WebErrorBuilder = require("leap-web-express").WebErrorBuilder;
const ErrorCode = require("leap-web-express").ErrorCode;

class BeerUpdateService {
    constructor(beerUpdateRepository) {
        this.beerUpdateRepository = beerUpdateRepository;
    }

    update(beer) {
        return this.beerUpdateRepository.update(beer)
            .then(result => {
                if (result.affectedRows === 0) {
                    throw WebErrorBuilder.build("BeerUpdateService", "Beer: " + beer.id + " not found", ErrorCode.NOT_FOUND);
                }
                return beer;
            });
    }
}

module.exports = BeerUpdateService;