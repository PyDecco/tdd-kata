const Greeter = require('./Greeter');

describe('Greeter', () => {
  let greeter;
  let date;
  beforeEach(() => {
    greeter = new Greeter
    
  });

test('shoud be able return Hello with name from greeter ', () => {
  expect(greeter.greet('Deco')).toEqual('Hello Deco');
});

test('shoud be able trim function effect ', () => {
  expect(greeter.greet('Deco       ')).toEqual('Hello Deco');
  expect(greeter.greet('             Joe ')).toEqual('Hello Joe');
});

test('should be able first letter uppercase ', () => {
  expect(greeter.greet('deco')).toEqual(('Hello Deco'));
});

test('should be able greet according to the hours 6:00 - 12:00', () => {
  jest.spyOn(global, "Date").mockImplementation(() => {
    return {
      getHours() {
        return 10;
      },
    };
  });
  expect(greeter.greet('deco')).toEqual(('good morning Deco'));
});
});
