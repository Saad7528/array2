const fnd = ["babu","kabu", "shabu", "jabu"];
const sortedFnd = fnd.sort();
console.log(sortedFnd) 

const numbers = [1,12,5,8,5,3,2,4,7,9,1];

const sortNumbers_asc = [...numbers].sort(function (a, b) {return a - b});
const sortNumbers_dsc = [...numbers].sort(function (a, b) {return b - a});
console.log(sortNumbers_asc)
console.log(sortNumbers_dsc)