const { run } = require("../services/fizz-buzz/fizz-buzz.service");
const { InvalidCountParam } = require("../shared/custom-error");
const { isNumeric } = require("../shared/utils");

const get = (req, res) => {
  const count = req.params.count;
  if(!count) throw new Error('Empty params')
  if(!isNumeric(count)) throw new InvalidCountParam('Enter Count');

  const result = run(req.params.count)
  res.send(result)
}

module.exports = {get};