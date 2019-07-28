const promiseHandler = require("leap-web-express").promiseHandler;

class BeerListRouterBuilder {
    
    constructor(router, beerListService) {
        this.router = router;
        this.beerListService = beerListService;
    }

    build() {
        this.router.get("/beers/", (req, res, next) => {
            promiseHandler.handle(this.beerListService.list(), req, res, next);
        })
        return this.router;
    }
}

module.exports = BeerListRouterBuilder;