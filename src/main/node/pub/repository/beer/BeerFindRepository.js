const FIND_BEER = "SELECT id, name, description, price FROM beers WHERE id = ?";

class BeerFindRepository {
    constructor(datasource, beerRowMapper) {
        this.datasource = datasource;
        this.beerRowMapper = beerRowMapper;
    }

    findById(id) {
        return this.datasource.query(FIND_BEER, [id], this.beerRowMapper);
    }
}

module.exports = BeerFindRepository;
