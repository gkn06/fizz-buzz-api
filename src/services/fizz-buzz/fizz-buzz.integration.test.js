const supertest = require("supertest");
const app = require('../../app');

describe("fizz buzz integration test", () => {
  it('GET /api/fizz-buzz/10', async function() {
    await supertest(app).get("/api/fizz-buzz/10").expect(200).then((response)=> {
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(10);
      // Check Response Data
      expect(response.body).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']);
    });
  });

  it('Bad Request 400 - GET /api/fizz-buzz/aa', async function() {
    await supertest(app).get("/api/fizz-buzz/aa").expect(400).then((response)=> {
      expect(response.body.name).toBe('InvalidCountParam');
    });
  });

});