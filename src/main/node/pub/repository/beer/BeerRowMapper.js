class BeerRowMapper {

    map(row) {
        return {
            id: row.id,
            name: row.name,
            description: row.description,
            price: row.price
        };
    }
}

module.exports = BeerRowMapper;
