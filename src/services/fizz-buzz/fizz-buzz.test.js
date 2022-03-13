const {run, getResult} = require('./fizz-buzz.service');


describe("fizz buzz", () => {
  it('should return a list of the correct size', function() {
    let output = run(5);
    expect(output.length).toEqual(5);
  });

  it('should return results for 1-10', function() {
    let output = run(10);
    expect(output).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'])
  });
});


describe("compute result", () => {
  it('should return 1 for 1', function() {
    let output = getResult(1);
    expect(output).toEqual(1);
  });

  it('should return Fizz for multiples of 3', function() {
    expect(getResult(3)).toEqual('Fizz');
    expect(getResult(6)).toEqual('Fizz');
    expect(getResult(9)).toEqual('Fizz');
  });

  it('should return Buzz for multiples of 5', function() {
    expect(getResult(5)).toEqual('Buzz');
    expect(getResult(10)).toEqual('Buzz');
    expect(getResult(20)).toEqual('Buzz');
  });

  it('should return FizzBuzz for multiples of 5 & 3', function() {
    expect(getResult(15)).toEqual('FizzBuzz');
    expect(getResult(30)).toEqual('FizzBuzz');
    expect(getResult(45)).toEqual('FizzBuzz');
  });
});