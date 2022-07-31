// function definition
const printMePlz = function(x) {
    console.log(x);
};

// invocations (calling the function)
printMePlz('Sup Bro');
printMePlz('Tommy');
printMePlz('Charles');


// function definition
const printThisArray = function(nums) {
    console.log(nums);
};

// invocations (calling the function)
printThisArray([1,4,8]);
printThisArray([1,4,99]);
printThisArray([1,33,99]);
printMePlz('Mack');

// function definition
const printValueAtIndex = function(nums, index) {
    index = index + -1;
    console.log(nums[index]);
    console.log(nums[index]);
};

// invocations (calling the function)
printValueAtIndex([3,5,7], 1);


// function definition
let getSumOfArray = function(nums) {
    // THIS IS WHERE YOU SHOULD WRITE CODE
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; 
    }
    return sum;
};

// invocations (calling the function)
const answer = getSumOfArray([3,8,12,-10]);
console.log(answer);



let num = 0; 

if (num < 0) {


    console.log("This is a positive");
 
}