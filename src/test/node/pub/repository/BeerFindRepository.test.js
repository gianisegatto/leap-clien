const expect = require("chai").expect;
const sinon = require("sinon");
const BeerFindRepository = require("../../../../main/node/pub/repository/beer/BeerFindRepository");

describe("BeerFindRepository", () => {

    it("Should find beer by id", async () => {

        const FIND_BEER = "SELECT id, name, description, price FROM beers WHERE id = ?";

        const beerId = 1;

        const rowMapper = () => { };

        const expectedBeer = { id: 1, name: "test", description: "test", price: 1 };

        const expectedResultList = [expectedBeer];

        const datasource = {
            query(statement, values, rowMapper) { }
        };

        const mokedDatasource = sinon.mock(datasource);

        const findRepository = new BeerFindRepository(datasource, rowMapper);

        const expectedPromise = new Promise(resolve => resolve(expectedResultList));

        mokedDatasource.expects("query").withExactArgs(FIND_BEER, [beerId], rowMapper).returns(expectedPromise);
        
        const beers = await findRepository.findById(beerId);

        expect(expectedResultList).to.deep.equals(beers);

    });

});