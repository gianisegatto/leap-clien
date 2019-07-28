const WebErrorBuilder = require("leap-web-express").WebErrorBuilder;
const ErrorCode = require("leap-web-express").ErrorCode;

class BeerDeleteService {
    constructor(beerDeleteRepository) {
        this.beerDeleteRepository = beerDeleteRepository;
    }

    delete(id) {
        return this.beerDeleteRepository.delete(id)
            .then(result => {
                if (result.affectedRows === 0) {
                    throw WebErrorBuilder.build("BeerDeleteService", "Beer: " + id + " not found", ErrorCode.NOT_FOUND);
                }
                return;
            });
    }
}

module.exports = BeerDeleteService;