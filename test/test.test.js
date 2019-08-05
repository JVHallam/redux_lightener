const testFunctions = require("../index.js");

describe("The user must use a file", () => {
  it("The user must use a file!", () => {
    const returnValue = testFunctions.value();
    expect( returnValue ).toBe( 1 );
  });
});
