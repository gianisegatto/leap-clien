const DELETE_BEER = "DELETE FROM beers WHERE id = ?";

class BeerDeleteRepository {
    constructor(datasource) {
        this.datasource = datasource;
    }

    delete(id) {
        return this.datasource.query(DELETE_BEER, [id]);
    }
}

module.exports = BeerDeleteRepository;
