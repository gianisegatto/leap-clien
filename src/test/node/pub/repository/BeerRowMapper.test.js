const expect = require("chai").expect;
const BeerRowMapper = require("../../../../main/node/pub/repository/beer/BeerRowMapper");

describe("BeerRowMapper", () => {
    
    it("Should map beer from database", () => {
        const beerRowMapper = new BeerRowMapper();

        const row = {
            id: 1,
            name: "aNameFromRow",
            description: "aDescriptionFromRow",
            price: 2
        };

        const expectedResult = {
            id: 1,
            name: "aNameFromRow",
            description: "aDescriptionFromRow",
            price: 2
        };

        const beer = beerRowMapper.map(row);

        expect(expectedResult).to.deep.equals(beer);
    });
});