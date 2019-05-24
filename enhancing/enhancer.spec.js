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
