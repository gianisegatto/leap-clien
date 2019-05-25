const INSERT_QUERY = "INSERT INTO  point_of_sale (username, password, brand, country, endpoint, traffic_type) VALUES (?, ?, ?, ?, ?, ?)";

class InsertRepository {
    constructor(datasource) {
        this.datasource = datasource;
    }

    insert(pointOfSale) {
        return this.datasource.query(INSERT_QUERY, [pointOfSale.username,
            pointOfSale.password,
            pointOfSale.brand,
            pointOfSale.country,
            pointOfSale.endpoint,
            pointOfSale.trafficType]);
    }

}

module.exports = InsertRepository;
