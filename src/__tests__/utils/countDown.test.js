const countDown = require('../../utils/countDown');

xdescribe("tests for countDown function", () => {

    it("should print to console 3 2 1", () => { 
        expect(countDown(3)).toBe(console.log(3,2,1))
    })

    it("should\'t countdown words", () => { 
        expect(countDown('cat')).toBe(console.log('This counter can\'t countdown words'))
    })

    it("should\'t countdown numbers < 1", () => { 
        expect(countDown(-99)).toBe(console.log('Number is < 1'))
    })

});