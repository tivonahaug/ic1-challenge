# Coupa Travel Technical Challenge

This challenge is designed to evaluate your ability to solve real-world problems that Coupa Travel has faced while building an online booking tool.

Please familiarize yourself with [CodeSandbox](https://codesandbox.io/s/new) 
and have node.js installed on your machine. Also download this repo and have it set up/ready to go for the interview.

### Data

The dataset you will be using is found in [flights.json](./flights.json). It contains a list of 20 real flight search results for a round trip flight search from San Francisco to Boston.

Looking at this array of flight results, you'll see each result is a tuple. The first item in the tuple is the outbound flight, and the second item is the return flight. Each flight object contains some fields (price, score) and a `segmentsArray` which contains the list of flight segments. A flight segment represents one journey, and can be made up of multiple flights.

### Running the Challenge

We've provided a [node program](index.js) that reads in the JSON file and has function stubs for the functions you'll need to implement to solve the challenge.

Run this program with `node index.js`.

If you prefer to solve the challenge using another language, you may replicate this file in the language of your choosing.

### The Challenge

1. **Flight Summary**

   Write a function that accepts a flight segment array and prints a one-line summary of that flight. The summary should include any origin, destination, and layover airports separated by an arrow (->), total flight time, and a list of flight numbers.
   For example, for a flight with one layover in SLC:

   ```
   SFO -> SLC -> BOS [409 minutes] (DL 1211, DL 745)

   ```

2. **Find Layovers**

   Write a function that accepts a number of layovers and flight direction (either outbound or return), and prints a flight summary of that flight. Use the function you wrote in step 1 to print the flight summaries.

   ```JavaScript
   function findFlightsWithNumLayovers(numLayovers, flightDirection) {}
   ```

   For example, lets say there are two outbound flights that have one layover.
   Calling `findFlightsWithNumLayovers(1, 'outbound')` would print

   ```
   SFO -> SLC -> BOS [409 minutes] (DL 1211, DL 745)
   SFO -> DFW -> BOS [450 minutes] (DL 123, DL 789)

   ```

   Calling the function again with 0 as the layover count would print flights with no layovers:

   ```
   SFO -> BOS [200 minutes] (UA 123)
   SFO -> BOS [202 minutes] (AA 678)

   ```

   The function should log an error if invalid input is provided.

3. **Filter Flights**

   Write a function that prints all flights from the dataset that match the provided filters and a flight direction (outbound or return). The filters the function should accept are:

   - number of layovers
   - min price
   - max price
   - total trip duration (in minutes)

   All filters are optional. If none are provided, all flights in that direction are returned. If multiple filters are provided, they should all be applied. If no flights match all provided filters, print "No Results".

   ```JavaScript
   findFlights(
     { numLayovers: 0, minPrice: 0, maxPrice: 500 }, // filters
     'return' // flight direction
   );
   ```

4. **Front End Challenge**
   Go to https://codesandbox.io/s/new
   This should bring up a really basic one page React app
   Try to complete the following
   - Declare a string variable with your name
   - Display Hello "Your Name" on the page
   - Make the Header blue
   - Declare an array variable with a list of dog breeds (or anything you want)
   - Display that list on a page in an unordered list
   - Create a small button component with one prop (bonus)