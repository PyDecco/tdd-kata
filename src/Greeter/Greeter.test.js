const Greeter = require('./Greeter');
test('shoud be able return Hello with name from greeter ', () => {
  const greeter = new Greeter()
  expect(greeter.greet('Deco')).toEqual('Hello Deco');
  
});