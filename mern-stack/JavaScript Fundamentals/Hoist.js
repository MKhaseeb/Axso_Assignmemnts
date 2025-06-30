// var example
// console.log(example);
// example = "im the example!"


// console.log(example);
// var example = "im the example!"

// ===================================1==========================================

console.log(hello);
var hello = 'world'

//hoist

var hello
console.log(hello);
hello = 'world'

// ===================================2==========================================

var needle = 'haystack';

test();

function test() {
    var needle = 'magnet';
    console.log(needle);
}

//hoist

var needle
function test(){
    var needle
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';

test();

// ===================================3==========================================

var brendan = 'super cool';

function print() {
    brendan = 'only okay';
    console.log(brendan);
}

console.log(brendan); 

//hoist

var brendan
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool'
console.log(brendan); 

// ===================================4==========================================

var food = 'chicken';
console.log(food);

eat();

function eat() {
    var food = 'half-chicken';
    console.log(food);
    food = 'gone';
}

//hoist

var food
console.log(food)
function eat(){
    var food
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chickem'
console.log(food);
eat();

// ===================================5==========================================

//not so sure

mean();
console.log(food);

var mean = function() {
    food = "chicken";
    console.log(food);

    var food = "fish";
    console.log(food);
}

console.log(food);

//hoist

var mean
console.log(food);
mean = function(){
    var food
    food = "chicken";
    console.log(food);
    
    food = "fish"
    console.log(food);
}
console.log(food);
mean()

// ===================================6==========================================

console.log(genre);

var genre = "disco";

rewind();

function rewind() {
    genre = "rock";
    console.log(genre);

    var genre = "r&b";
    console.log(genre);
}

console.log(genre);

//hoist 


var genre

function rewind(){
    var genre
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind()
console.log(genre);

// ===================================7==========================================

dojo = "san jose";
console.log(dojo);

learn();

function learn() {
    dojo = "seattle";
    console.log(dojo);

    var dojo = "burbank";
    console.log(dojo);
}

console.log(dojo);

//hoist

var dojo
function learn(){
    var dojo
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose"
console.log(dojo);
learn();
console.log(dojo);