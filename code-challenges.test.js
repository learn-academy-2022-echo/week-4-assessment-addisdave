// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// a describe method that lists the name of the function OR naming of the particular test.


// describe("hello", () => {
//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("returns a string that says hi", () => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(hello()).toEqual("hi");
//     });
//   });

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.


// a) Create a test with an expect statement using the variable provided. 

// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("my_Shuffler", () => {
    
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {

        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]    

     expect(my_Shuffler(colors1)).not.toEqual(["yellow", "blue", "pink", "green"]);
     expect(my_Shuffler(colors2)).not.toEqual(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]);

    });
  });

//    ****** GOOD FAIL *****

//   FAIL  ./code-challenges.test.js
//   my_Shuffler
//     ✕ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)

//   ● my_Shuffler › takes in an array, removes the first item from the array and shuffles the remaining content.

//     ReferenceError: my_Shuffler is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// Create a function named my_Shuffler.
// Inputs are array of colors named colors1 and colors2.
// Outputs should show an array that removes the first item from the array and shuffles the remaining content.
// Use built-in methods .pop, .length and  to shuffle and remove items in array.

 const my_Shuffler = (array) => {
    let shuffler1 = array.pop()
    let shaffler2 = (arr) => {
    let thisIndex = arr.lenth, randomIndex;
    while (thisIndex) {
        randomIndex = math.floor(math.random() * thisIndex)
    ;
    thisIndex;
    [arr[thisIndex], arr[randomIndex]]
= [arr[randomIndex], arr[thisIndex]];   
     }
     return arr
    }
   shaffler2(shuffler1)
}


// const my_Shuffler = (array) => {
//     let shuffler1 = array.shift();
//     let shuffler2 =(array) => {
//         let currentIndex = array.shuffle()
//     }
//        return shuffler2
// }
// my_Shuffler

// PASS  ./code-challenges.test.js
// my_Shuffler
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (2 ms)



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.



describe("my_Votter", () => {
    
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {

        const votes1 = {upVotes: 13, downVotes: 2}
        // Expected output: 11
        const votes2 = {upVotes: 2, downVotes: 33}
        // Expected output: -31  

     expect(my_Votter(votes1)).toEqual(11);
     expect(my_Votter(votes2)).toEqual(-31);

    });
  });


//             ***** GOOD FAIL ****

// b) Create the function that makes the test pass.

// PSUDOCODE:
// Create a function called my_Votter.
// Iputs are objects of key values with down and up upvotes total.
// Returns are net total votes
// Use Ruby built-in method in to function. 

const my_Votter = (object) => {
    let total_votes = (object.upVotes - object.downVotes);
    return total_votes
}

// PASS  ./code-challenges.test.js
// my_Votter
//   ✓ takes in an object that contains up votes and down votes and returns the net total of votes. (2 ms)



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

//const dataArray1 = ["array", "object", "number", "string", "Boolean"]
//const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
//Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

 describe("my_Returner", () => {
    
    it("takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {

       const dataArray1 = ["array", "object", "number", "string", "Boolean"]
       const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
       //Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

     expect(my_Returner(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]);
     

    });
  });


//          **** GOOD FAIL ****    

//   FAIL  ./code-challenges.test.js
//   my_Returner
//     ✕ takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments. (1 ms)

//   ● my_Returner › takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//     ReferenceError: my_Returner is not defined


// b) Create the function that makes the test pass.

// PSUEDOCODE:
// Write a function called my_Returner
// Inputs are two arrays dataArray1&2
// Output is one array wthat combines the two by omitting duplicates.
// Use built-in methods of 
// .concat() to create a new array by combining element in array, 
// .filter() to callback function once for each element in array and constructs a new array,
// .indexOf() to compare an elemt to elements in array using strict equality. If greater than 

const my_Returner = (array1, array2) => {
    let dataArray1 = [];
    let dataArray2 = dataArray1.concat(dataArray1)
    let myArray2 = () => {
       (myArray1.filter(), dataArray1.indexOf() < 0)
    }

    
  //omit_Duplicator = secondArray.filter((item) => dataArray1.indexOf(item) < 0))

    return myArray2

}
//****** MY FUNCTION FAILED */ CAN USE (...array1, array2) to join them or use concat. How to remove the duplicates?

//dataArray1.concat(dataArray2.filter((item) => dataArray1.indexOf(item) < 0))