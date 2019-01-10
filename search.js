"use strict";

// **************************************
// Paste your data in the sampleData file
// between the `back ticks` and then run
// $ npm start from the command line.
// **************************************

const data = require("./sampleData.js");
const re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;

function returnMatches(data) {
  const matches = data.match(re);
  return matches;
}

function sortMatches(matches) {
  let sortedArray = [];
  while (matches.length > 0) {
    let email = matches.pop();
    if (!sortedArray.includes(email)) {
      sortedArray.push(email);
    }
  }
  sortedArray.sort();
  return sortedArray;
}

console.log(sortMatches(returnMatches(data)));
