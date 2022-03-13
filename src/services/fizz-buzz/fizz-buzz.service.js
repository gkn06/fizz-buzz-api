const run = (max, min=1) => {
  let output = [];

  for(let i = min; i<=max; i++) {
    output.push(getResult(i));
  }

  return output;
}


const getResult = (value) => {
  if (value % 15 == 0) return 'FizzBuzz';
  else if (value % 3 == 0) return 'Fizz';
  else if (value % 5 == 0) return 'Buzz';
  else return value;
}


module.exports = { run, getResult };
