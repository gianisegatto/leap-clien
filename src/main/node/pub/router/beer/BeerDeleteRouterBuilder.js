const promiseHandler = require("leap-web").promiseHandler;

class BeerDeleteRouterBuilder {
    
    constructor(router, beerDeleteService) {
        this.router = router;
        this.beerDeleteService = beerDeleteService;
    }

    build() {
        this.router.delete("/beers/:id", (req, res, next) => {
            promiseHandler.handle(this.beerDeleteService.delete(req.params.id), req, res, next, 204);
        })
        return this.router;
    }
}

module.exports = BeerDeleteRouterBuilder;