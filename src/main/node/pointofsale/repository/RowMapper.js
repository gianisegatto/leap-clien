class rowMapper {

    map(row) {
        return {
            username: row.username,
            password: row.password,
            brand: row.brand,
            country: row.country,
            endpoint: row.endpoint,
            trafficType: row.traffic_type
        };
    }
}

module.exports = rowMapper;
