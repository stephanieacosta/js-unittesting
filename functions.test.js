const functions = require("./functions.js");

describe("multiply function", () => {
  it("should be return multiple when I sent two numbers", () => {
    //ARRANGE
    const num1 = 2;
    const num2 = 3;
    //ACT
    const result = functions.multiply(num1, num2);
    //ASSERT
    expect(result).toBe(6);
  });
  it("should return 0 when one of the numbers is 0", () => {
    //ARRANGE
    const num1 = 6;
    const num2 = 0;

    //ACT
    const result = functions.multiply(num1, num2);

    //ASSERT
    expect(result).toBe(0);
  });
});

describe("isNull function", () => {
  it("should be return null", () => {
    //ARRANGE
    //ACT
    const result = functions.isNull();
    //ASSERT
    expect(result).toBeNull();
  });
  it("should return null when isNull function is called with any argument", () => {
    //ARRANGE

    //ACT
    const result = functions.isNull("hola");

    //ASSERT
    expect(result).toBeNull();
  });
});

describe("checkTruthy function", () => {
  it("should be return true when I sent true", () => {
    //ARRANGE
    const value = true;
    //ACT
    const result = functions.checkTruthy(value);
    //ASSERT
    expect(result).toBeTruthy();
  });
  it("should be return false when I sent false", () => {
    //ARRANGE
    const value = false;
    //ACT
    const result = functions.checkTruthy(value);
    //ASSERT
    expect(result).toBe(false);
  });
});

describe("addLastName function", () => {
  it("should be return Pepito Perez when I sent Perez", () => {
    //ARRANGE
    const lastName = "Perez";
    const user = { firstname: "Pepito", lastname: "Perez" };

    //ACT
    const result = functions.addLastName(lastName);
    //ASSERT
    expect(result).toEqual(user);
  });
  it("should be return Pepito when lastName is undefined", () => {
    //ARRANGE

    const user = { firstname: "Pepito", lastname: undefined };

    //ACT
    const result = functions.addLastName();

    //ASSERT
    expect(result).toEqual(user);
  });
});
