const dynamic = require('../dynamic')
test ('test',()=>{
    const result = dynamic('test',3)
    expect(result).not.toEqual('');
})
