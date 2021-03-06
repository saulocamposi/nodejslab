//---------- Map / Reduce ----------

/*1. Map/Reduce allows you to split a large problem into smaller parts.
The Map excepts data and transforms it into key / value pairs by applying
multiple JavaScript functions.
The Reduce excepts the key / value pairs and reduces them into a
smaller aggregation of key / value pairs.

2. Why is Map useful?*/

var students = [
	{name : "Dale Cooper", class: "Calculus", tests: [30, 28, 45]},
	{name : "Harry Truman", class: "Geometry", tests: [28, 26, 44]},
	{name : "Shelly Johnson", class: "Calculus", tests: [27, 26, 43]},
	{name : "Bobby Briggs", class: "College Algebra, tests: [20, 18, 35]"},
	{name : "Donna Heyward", class: "Geometry", tests: [28, 28, 44]},
	{name : "Audrey Horne", class: "College Algebra", tests: [22, 26, 44]},
	{name : "James Hurley", class: "Calculus", tests: [20, 20, 38]},
	{name : "Lucy Moran", class: "College Algebra", tests: [26, 24, 40]},
	{name : "Tommy Hill", class: "College Algebra", tests: [30, 29, 46]},
	{name : "Andy Brennan", class: "Geometry", tests: [20, 21, 38]}
	];

var studNames = [];

for( i=0; i < students.length; i++){
	studNames.push(students[i].name)
}

studNames

// With Map you can cycle the values through a callback function

var studInfo = students.map(function(x) {
	return x.name + ' is in ' + x.class;
});

studInfo

//Why is Reduce useful?

var tests = [
	{score: 30},
	{score: 28},
	{score: 45}
]

// Reduce receives an object and a starting object
// Sum is our final value and tests is the thing we iterate
var testSum = tests.reduce(function(sum, tests){
	return sum + tests.score;
}, 0)

testSum

//3. Delete a database by switching to it and dropping it
use testdb
db.dropDatabase()

//4. Add to classes collection
db.classes.insert({
class : "Philosophy 101",
startDate : new Date(2016, 1, 10),
students : [
	{fName : "Dale", lName : "Cooper", age : 42},
	{fName : "Lucy", lName : "Moran", age : 35},
	{fName : "Tommy", lName : "Hill", age : 44}
],
cost : 1600,
professor : "Paul Slugman",
topics : "Socrates,Plato,Aristotle,Francis Bacon",
book:
{
	isbn: "1133612105",
	title: "Philosophy : A Text With Readings",
	price: 165.42
}
})

db.classes.insert({
class : "College Algebra",
startDate : new Date(2016, 1, 11),
students : [
	{fName : "Dale", lName : "Cooper", age : 42},
	{fName : "Laura", lName : "Palmer", age : 22},
	{fName : "Donna", lName : "Hayward", age : 21},
	{fName : "Shelly", lName : "Johnson", age : 24}
],
cost : 1500,
professor : "Rhonda Smith",
topics : "Rational Expressions,Linear Equations,Quadratic Equations",
book:
{
	isbn: "0321671791",
	title: "College Algebra",
	price: 179.40
}
})

db.classes.insert({
class : "Astronomy 101",
startDate : new Date(2016, 1, 11),
students : [
	{fName : "Bobby", lName : "Briggs", age : 21},
	{fName : "Laura", lName : "Palmer", age : 22},
	{fName : "Audrey", lName : "Horne", age : 20}
],
cost : 1650,
professor : "Paul Slugman",
topics : "Sun,Mercury,Venus,Earth,Moon,Mars",
book:
{
	isbn: "0321815351",
	title: "Astronomy: Beginning Guide to Univ",
	price: 129.45
}
})

db.classes.insert({
class : "Geology 101",
startDate : new Date(2016, 1, 12),
students : [
	{fName : "Andy", lName : "Brennan", age : 36},
	{fName : "Laura", lName : "Palmer", age : 22},
	{fName : "Audrey", lName : "Horne", age : 20}
],
cost : 1450,
professor : "Alice Jones",
topics : "Earth,Moon,Elements,Minerals",
book:
{
	isbn: "0321814061",
	title: "Earth : An Introduction to Physical Geology",
	price: 130.65
}
})

db.classes.insert({
class : "Biology 101",
startDate : new Date(2016, 1, 11),
students : [
	{fName : "Andy", lName : "Brennan", age : 36},
	{fName : "James", lName : "Hurley", age : 25},
	{fName : "Harry", lName : "Truman", age : 41}
],
cost : 1550,
professor : "Alice Jones",
topics : "Earth,Cell,Energy,Genetics,DNA",
book:
{
	isbn: "0547219474",
	title: "Holt McDougal Biology",
	price: 104.30
}
})

db.classes.insert({
class : "Chemistry 101",
startDate : new Date(2016, 1, 13),
students : [
	{fName : "Bobby", lName : "Briggs", age : 21},
	{fName : "Donna", lName : "Hayward", age : 21},
	{fName : "Audrey", lName : "Horne", age : 20},
	{fName : "James", lName : "Hurley", age : 25}
],
cost : 1600,
professor : "Alice Jones",
topics : "Matter,Energy,Atom,Periodic Table",
book:
{
	isbn: "0547219474",
	title: "Chemistry : Matter and Change",
	price: 104.30
}
})

//4. Map is called for every document in the collection. Map sends the total student name list to reduce.
var mapFunc = function() {
	for(i = 0; i < this.students.length; i++){
		var student = this.students[i];

		// Emit gets 2 arguments being the key on which you want to group the
		// data and the data itself
		emit(student.fName + " " + student.lName, 1);
	}
};

//5. Reduce is called by map and receives all the values for the given key. Then we add how many times the student name shows up in the collection of documents.
var reduceFunc = function(student, values) {
	count = 0;

	for(i = 0; i < values.length; i++){
		count += values[i];
	}
	return count;
};

//6. Define the map and reduce functions and where to output the results
db.classes.mapReduce(
	mapFunc,
	reduceFunc,
	{ out: "map_ex" }
)
/*
7. "counts" : {
		"input" : 6, // 6 Classes sent to map
		"emit" : 20, // 20 total students input with duplicates
		"reduce" : 7, // 7 students are in more then 1 class
		"output" : 11 // Output all 11 students their classes
	}

//8. Show the results db.map_ex.find()

//9. Get all the professors
*/
var mapFunc2 = function(){
	emit(this.professor,1);
}

//10. Sum the number of times they appear
var reduceFunc2 = function(professor, count){
	return Array.sum(count);
}

//11. With query only output data for Alice Jones
db.classes.mapReduce(
	mapFunc2,
	reduceFunc2,{
	query:{professor: "Alice Jones"},
	out: "map_ex_2"
	}
)

//12. Output every topic to be reduced
var mapFunc3 = function(){
	var topics = this.topics.split(',');
	for(i in topics){
		emit(topics[i], 1);
	}
}

//13. Count up the total times each topic is covered across all classes
var reduceFunc3 = function(key, values){
	var count = 0;
	for(i in values){
		count += values[i];
	}
	return count;
}

db.classes.mapReduce(
	mapFunc3,
	reduceFunc3,
	{ out: "map_ex_3" }
)

//14. Send the cost to attend each of the professors classes to reduce
var mapFunc4 = function(){
	emit(this.professor, { count: 1, cost: this.cost });
}

//15. Reduce down to professor and cost
var reduceFunc4 = function(professor, values){
	var value = { count: 0, cost: 0 };

	for(i = 0; i < values.length; i++){
		value.count += values[i].count;
		value.cost += values[i].cost;
	}
	return value;
}

//16. Condense the results down to show the average of all the professors classes
var finalizeFunc4 = function(professor, value) {
	value.average = (value.cost / value.count);
	return value;
}

//17.
db.classes.mapReduce(
    mapFunc4,
    reduceFunc4,
    { out: "map_ex_4",
    finalize: finalizeFunc4
    }
)

//---------- Random Database Commands ----------

//1. Distinct returns all distinct values for a given key
db.runCommand({"distinct" : "classes", "key" : "professor"})

//2. Group allows you to perform complex aggregations and then separate the results into groups. Let's get every book title that costs more then $110
db.runCommand(
   {
     group:
       {
       	 // The collection
         ns: 'classes',
         // Keys to retrieve
         key: { 'book.price': 1, 'book.title': 1 },
         // Condition that must be met
         cond: { 'book.price': { $gt: 110 } },
         // Not reducing the results
         $reduce: function ( curr, result ) { },
         // Stores the initial value the first time reduce is called
         initial: { }
       }
   }
)

//3. Calculate the total cost of books for each class
db.runCommand(
   { group:
       {
         ns: 'classes',
         key: { 'book.price': 1, 'book.title': 1 },
         cond: {  },
         $reduce: function ( curr, result ) {
                     result.total += (curr.book.price * curr.students.length);
                  },
         initial: { total : 0 }
       }
    }
)
