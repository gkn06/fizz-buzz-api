# FizzBuzz Problem

Design an API which Returns data as Fizz Buzz Pattern:
 - A program that prints each number from 1 to 100 on a new line.
 - For each multiple of 3, print "Fizz" instead of the number.
 - For each multiple of 5, print "Buzz" instead of the number.
 - For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.  

More on Fizz Buzz: https://en.wikipedia.org/wiki/Fizz_buzz

# FizzBuzz Api

The application exposes a few REST endpoints 

`HTTP` `GET` /api/fizz-buzz/:count

# Run the app locally

 - `npm install`
 - `npm start` - Starts the application and run on port 8080
 - `npm run dev` - Starts the application in development mode
 - `npm run test` - Runs all the test cases - unit test cases + integration tests

# Swagger UI 

- `http://localhost:8080/swagger-ui`


# Application is Hosted in Vercel

- https://fizz-buzz-api.vercel.app/api/fizz-buzz/:count

> Example:- https://fizz-buzz-api.vercel.app/api/fizz-buzz/10

## Note

- Vercel has some issue with handling static files. So swagger UI is not loaded properly.
 `https://fizz-buzz-api.vercel.app/swagger-ui` - Won't work due to above issue.