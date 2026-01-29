const numbers = [1,2,3,4,5,6,7];

// console.log(numbers);

// const reverse = numbers.reverse();

// console.log(reverse)


const rev_numbers = [];

for (const num of numbers){
    // console.log(num)
    rev_numbers.unshift(num)
}
// console.log(rev_numbers)

const reversed_numbers = [];
for (let i=0; i < numbers.length; i++){
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
// console.log(reversed_numbers)

//  console.log(numbers.length)

//Reverse
for(let i= numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    // console.log(num)
}


const num_rev = [];
for(let i= numbers.length - 1; i >= 0; i--){
    const num = numbers[i];
    console.log(num)
    num_rev.push(num)
    // console.log(num_rev)
}
    console.log(num_rev)
