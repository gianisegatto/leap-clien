const expect = require("chai").expect;
const sinon = require("sinon");
const BeerInsertRepository = require("../../../../main/node/pub/repository/beer/BeerUpdateRepository");

describe("BeerUpdatedRepository", () => {

    it("Should update beer", () => {

        const UPDATE_BEER = "UPDATE beers SET name = ? , description = ? , price = ? WHERE id = ?";

        const beer = {
            id: 1,
            name: "aName",
            description: "aDescription",
            price: 2
        };

        const parameters = ["aName", "aDescription", 2, 1];

        const datasource = {
            query(statement, values) { }
        };

        const mokedDatasource = sinon.mock(datasource);

        const insertRepository = new BeerInsertRepository(datasource);

        const expectedPromise = new Promise(resolve => resolve());

        mokedDatasource.expects("query").withExactArgs(UPDATE_BEER, parameters).returns(expectedPromise);
        
        const promise = insertRepository.update(beer);

        expect(expectedPromise).to.deep.equals(promise);

    });

});