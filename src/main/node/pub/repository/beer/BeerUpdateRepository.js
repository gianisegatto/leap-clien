const UPDATE_BEER = "UPDATE beers SET name = ? , description = ? , price = ? WHERE id = ?";

class BeerUpdateRepository {
    constructor(datasource) {
        this.datasource = datasource;
    }

    update(beer) {
        return this.datasource.query(UPDATE_BEER, [beer.name, beer.description, beer.price, beer.id]);
    }
}

module.exports = BeerUpdateRepository;