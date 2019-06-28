class BeerCreateRouterBuilder {
    
    constructor(router, beerInsertService) {
        this.router = router;
        this.beerInsertService = beerInsertService;
    }

    build() {
        this.router.post("/beer/", (req, res, next) => {
            this.beerInsertService.insert(req.body);
        })
        return this.router;
    }
}

module.exports = BeerCreateRouterBuilder;