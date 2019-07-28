const promiseHandler = require("leap-web").promiseHandler;

class BeerUpdateRouterBuilder {
    
    constructor(router, beerUpdateService) {
        this.router = router;
        this.beerUpdateService = beerUpdateService;
    }

    build() {
        this.router.put("/beers/:id", (req, res, next) => {
            const beer = req.body;
            beer.id = req.params.id;
            promiseHandler.handle(this.beerUpdateService.update(beer), req, res, next);
        })
        return this.router;
    }
}

module.exports = BeerUpdateRouterBuilder;