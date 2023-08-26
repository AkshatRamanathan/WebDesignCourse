/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Pac-Man');

// Insert a few documents into the user collection.
db.getCollection('users').insertMany([
  { 'userName': 'Abhishek', 'email': 'abhishek@gmail.com', 'address': 'Bangalore', 'password': 'pass1', 'userType': 'ADMIN' },
  { 'userName': 'Faisal', 'email': 'faisal@gmail.com', 'address': 'Torronto', 'password': 'pass2', 'userType': 'USER' },
  { 'userName': 'Akshath', 'email': 'akshath@gmail.com', 'address': 'Cannada', 'password': 'pass3', 'userType': 'ADMIN' },
  { 'userName': 'Shruti', 'email': 'shruti@gmail.com', 'address': 'Boston', 'password': 'pass4', 'userType': 'USER' },
  { 'userName': 'Becky', 'email': 'becky@gmail.com', 'address': 'Boston', 'password': 'pass5', 'userType': 'ADMIN' },
]);


