const getPercents = require('../../utils/getPercents');

describe("tests for getPercents function", () => {

    it("30 percents from 254", () => { 
        const result = getPercents(30, 254)
        expect(result).toBe(76.2)
    })

    it("0 percents from 999", () => { 
        const result = getPercents(0, 999)
        expect(result).toBe(0)
    })


    it("50 percents from \'name\'", () => { 
        const result = getPercents(50, 'name')
        expect(result).toBe(NaN)
    })

});