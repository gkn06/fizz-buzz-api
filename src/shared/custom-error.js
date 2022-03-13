class InvalidCountParam extends Error {
  constructor(input) {
    super();
    this.name = this.constructor.name
    this.message = `Invalid input: ${input}. Pleave provide only valid number`;
    this.statusCode = 400
  }
}


module.exports = {InvalidCountParam}