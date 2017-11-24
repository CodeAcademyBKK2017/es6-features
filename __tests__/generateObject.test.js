const generateObject = require('../generateObject');

test('generateObject', () => {
    return expect(generateObject('test', 20)).toEqual({
        test1: 1,
        test2: 2,
        test3: 3,
        test4: 4,
        test5: 5,
        test6: 6,
        test7: 7,
        test8: 8,
        test9: 9,
        test10: 10,
        test11: 11,
        test12: 12,
        test13: 13,
        test14: 14,
        test15: 15,
        test16: 16,
        test17: 17,
        test18: 18,
        test19: 19,
        test20: 20
    })
});

test('generateObject', () => {
    return expect(generateObject('hi', 15)).toMatchObject({
        hi1: 1,
        hi2: 2,
        hi3: 3,
        hi4: 4,
        hi5: 5,
        hi6: 6,
        hi7: 7,
        hi8: 8,
        hi9: 9,
        hi10: 10,
        hi11: 11,
        hi12: 12,
        hi13: 13,
        hi14: 14,
        hi15: 15
    })
});