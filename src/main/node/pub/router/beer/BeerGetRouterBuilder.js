const promiseHandler = require("leap-web").promiseHandler;

class BeerGetRouterBuilder {
    
    constructor(router, beerFindService) {
        this.router = router;
        this.beerFindService = beerFindService;
    }

    build() {
        this.router.get("/beers/:id", (req, res, next) => {
            promiseHandler.handle(this.beerFindService.findById(req.params.id), req, res, next);
        })
        return this.router;
    }
}

module.exports = BeerGetRouterBuilder;