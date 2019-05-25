const FIND_QUERY = "SELECT username, password,brand,country,endpoint,traffic_type FROM point_of_sale WHERE username = ?";

class FindRepository {
    constructor(datasource, rowMapper) {
        this.datasource = datasource;
        this.rowMapper = rowMapper;
    }

    find(username) {
        return this.datasource.query(FIND_QUERY, [username], this.rowMapper);
    }
}

module.exports = FindRepository;
