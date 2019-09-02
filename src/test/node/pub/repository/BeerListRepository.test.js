const expect = require("chai").expect;
const sinon = require("sinon");
const BeerListRepository = require("../../../../main/node/pub/repository/beer/BeerListRepository");

describe("BeerListRepository", () => {

    it("Should list beers", async () => {

        const LIST_BEER = "SELECT id, name, description, price FROM beers";

        const rowMapper = () => {};

        const expectedBeer = { id: 1, name: "aNameForList", description: "aDescriptionForList", price: 1 };

        const expectedResultList = [expectedBeer];

        const datasource = {
            query(statement, values, rowMapper) { }
        };

        const mokedDatasource = sinon.mock(datasource);

        const findRepository = new BeerListRepository(datasource, rowMapper);

        const expectedPromise = new Promise(resolve => resolve(expectedResultList));

        mokedDatasource.expects("query").withExactArgs(LIST_BEER, null, rowMapper).returns(expectedPromise);
        
        const beers = await findRepository.list();

        expect(expectedResultList).to.deep.equals(beers);

    });

});