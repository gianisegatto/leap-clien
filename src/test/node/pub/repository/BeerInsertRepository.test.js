const expect = require("chai").expect;
const sinon = require("sinon");
const BeerInsertRepository = require("../../../../main/node/pub/repository/beer/BeerInsertRepository");

describe("BeerInsertRepository", () => {

    it("Should insert beer", () => {

        const INSERT_BEER = "INSERT INTO beers (name, description, price) VALUES(?, ?, ?)";

        const beer = {
            name: "aName",
            description: "aDescription",
            price: 1
        };

        const parameters = ["aName", "aDescription", 1];

        const datasource = {
            query(statement, values) { }
        };

        const mokedDatasource = sinon.mock(datasource);

        const insertRepository = new BeerInsertRepository(datasource);

        const expectedPromise = new Promise(resolve => resolve());

        mokedDatasource.expects("query").withExactArgs(INSERT_BEER, parameters).returns(expectedPromise);
        
        const promise = insertRepository.insert(beer);

        expect(expectedPromise).to.deep.equals(promise);

    });

});