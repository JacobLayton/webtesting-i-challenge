const enhancer = require("./enhancer.js");
// test away!
describe("repair", () => {
  it("repairs to full durability", () => {
    const item = {
      name: "Sword",
      durability: 50,
      enhancement: 10
    };
    const repair = enhancer.repair(item);
    expect(repair.durability).toBe(100);
  });
});

describe("succeed", () => {
  it("Increases enhancement by 1", () => {
    const item = {
      name: "Sword",
      durability: 50,
      enhancement: 10
    };
    const enhance = enhancer.succeed(item);
    expect(enhance.enhancement).toBe(11);
  });
});

describe("fail", () => {
  it("Decreases durability by 5 if enhancement < 15", () => {
    const item = {
      name: "Sword",
      durability: 50,
      enhancement: 10
    };
    const fail = enhancer.fail(item);
    expect(fail.durability).toBe(45);
  });

  it("Decreases durability by 10 if enhancement is 15 or 16", () => {
    const item = {
      name: "Sword",
      durability: 50,
      enhancement: 15
    };
    const fail = enhancer.fail(item);
    expect(fail.durability).toBe(40);
  });

  it("Decreases durability by 10 and enhancement by 1 if enhancement > 16", () => {
    const item = {
      name: "Sword",
      durability: 51,
      enhancement: 20
    };
    const fail = enhancer.fail(item);
    expect(fail.durability).toBe(41);
    expect(fail.enhancement).toBe(19);
  });
});
