const strReverse = require('../../utils/strReverse');

xdescribe("tests for strReverse function", () => {

    it("should reverse a string", () => expect(strReverse("ball")).toBe("llab"));

});