const dynamic = require('../dynamic');
test('test',()=>{
    let result = dynamic('test',5);
    let total = "{test:1,test:2,test:3,test4,test5}";
    expect(result).not.toEqual(total);
})