const promiseHandler = require("leap-web").promiseHandler;

class BeerCreateRouterBuilder {
    
    constructor(router, beerInsertService) {
        this.router = router;
        this.beerInsertService = beerInsertService;
    }

    build() {
        this.router.post("/beers/", (req, res, next) => {
            promiseHandler.handle(this.beerInsertService.insert(req.body), req, res, next, 204);
        })
        return this.router;
    }
}

module.exports = BeerCreateRouterBuilder;