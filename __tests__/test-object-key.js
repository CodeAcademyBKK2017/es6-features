const objectKey = require("../object-key.js");

test("success", () => {
    expect(objectKey("test", 3)).toMatchObject({test1:1,test2:2,test3:3});
});

test("fail", () => {
    expect(objectKey(1, 3)).toBe(false);
    expect(objectKey(1, "test")).toBe(false);
});