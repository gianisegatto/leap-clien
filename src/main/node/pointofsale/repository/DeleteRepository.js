const DELETE_QUERY = "DELETE FROM point_of_sale WHERE username = ?";

class DeleteRepository {
    constructor(datasource) {
        this.datasource = datasource;
    }

    delete(username) {
        return this.datasource.query(DELETE_QUERY, [username]);
    }
}

module.exports = DeleteRepository;
