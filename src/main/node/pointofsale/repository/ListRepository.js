const LIST_QUERY = "SELECT username, password,brand,country,endpoint,traffic_type FROM point_of_sale";

class ListRepository {
    constructor(datasource, rowMapper) {
        this.datasource = datasource;
        this.rowMapper = rowMapper;
    }

    list() {
        return this.datasource.query(LIST_QUERY, null, this.rowMapper);
    }
}

module.exports = ListRepository;
