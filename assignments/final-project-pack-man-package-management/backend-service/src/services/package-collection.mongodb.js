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

// Insert a few documents into the sales collection.
db.getCollection('packages').insertMany([
    {'from':ObjectId('64cc35ddaf0296047e806afa'), 'toName': 'Faisal', 'toAddress': 'Torronto', 'dimension': {'length': 10, 'breadth': 5, 'height': 5}, 'packageType': 'BOX'},
    {'from':ObjectId('64cc35ddaf0296047e806afd'), 'toName': 'Akshath', 'toAddress': 'Cannada', 'dimension': {'length': 15, 'breadth': 15, 'height': 1.5}, 'packageType': 'FOOD_ITEMS'},
    {'from':ObjectId('64cc35ddaf0296047e806afc'), 'toName': 'Shruti', 'toAddress': 'Boston', 'dimension': {'length': 20, 'breadth': 2.5, 'height': 15}, 'packageType': 'DOCUMENT'},

]);


