const LIST_BEERS = "SELECT id, name, description, price FROM beers";

class BeerListRepository {
    constructor(datasource, beerRowMapper) {
        this.datasource = datasource;
        this.beerRowMapper = beerRowMapper;
    }

    list() {
        return this.datasource.query(LIST_BEERS, null, this.beerRowMapper);
    }
}

module.exports = BeerListRepository;
