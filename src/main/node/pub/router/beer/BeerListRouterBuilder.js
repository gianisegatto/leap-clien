const promiseHandler = require("leap-web").promiseHandler;

class BeerCreateRouterBuilder {
    
    constructor(router, beerListService) {
        this.router = router;
        this.beerListService = beerListService;
    }

    build() {
        this.router.get("/beers/", (req, res, next) => {
            promiseHandler.handle(this.beerListService.list(), res, next);
        })
        return this.router;
    }
}

module.exports = BeerCreateRouterBuilder;