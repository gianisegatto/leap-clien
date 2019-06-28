const INSERT_BEER = "INSERT INTO beers (name, description, price) VALUES(?, ?, ?)";

class BeerInsertRepository {
    
    constructor(datasource) {
        this.datasource = datasource;
    }

    insert(beer) {
        return this.datasource.query(INSERT_BEER, [beer.name, beer.description, beer.price]);
    }

}

module.exports = BeerInsertRepository;
