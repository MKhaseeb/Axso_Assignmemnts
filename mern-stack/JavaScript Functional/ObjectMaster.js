const groceryList = Object.freeze([
    {"item" : "carrots", "haveingedient" : false},
    {"item" : "onions" , "haveingedient" : true},
    {"item" : "potatoes", "haveingedient" : true},
    {"item" : "tomatoes", "haveingedient" : false},
    {"item" : "peppers", "haveingedient" : true}
]);
const needThyme = [...groceryList,{"item" : "thyme", "haveingedient" : false}];
console.log(needThyme);
const needThyme2 = groceryList.concat({"item" : "thyme", "haveingedient" : false});
console.log(needThyme2);
const gotThyne = [...needThyme.slice(0.5),{...needThyme[5], "haveingedient" : true}];
console.log(gotThyne);



const numbers = [4, 5, 3, 1, 2];
numbers.sort()
console.log(numbers); // [1, 2, 3, 4, 5]