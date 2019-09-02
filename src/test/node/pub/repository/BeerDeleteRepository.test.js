const expect = require("chai").expect;
const sinon = require("sinon");
const BeerDeleteRepository = require("../../../../main/node/pub/repository/beer/BeerDeleteRepository");

describe("BeerDeleteRepository", () => {

    it("Should delete beer", () => {

        const DELETE_BEER = "DELETE FROM beers WHERE id = ?";

        const beerId = 1;

        const datasource = {
            query(statement, values) { }
        };

        const mokedDatasource = sinon.mock(datasource);

        const deleteRepository = new BeerDeleteRepository(datasource);

        const expectedPromise = new Promise(resolve => resolve());

        mokedDatasource.expects("query").withExactArgs(DELETE_BEER, [beerId]).returns(expectedPromise);
        
        const deletedBeerPromise = deleteRepository.delete(beerId);

        expect(expectedPromise).to.deep.equals(deletedBeerPromise);

    });

});