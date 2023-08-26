/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('reminders');

// Search for documents in the current collection.
db.getCollection('reminders')
  // .find()
  .aggregate([
    {
      $project: {
        createdDate: 1,
        createdDateAfter: {
          $toDate: "$createdDate"
        },
      }
    }
    , {
      $match: {
        $and: [
          { createdDateAfter: { $lt: ISODate("2023-01-01") } },
          { createdDateAfter: { $gt: ISODate("2021-01-01") } }
        ]
      }
    }
  ]);

  // db.getCollection('reminders')
  // .updateMany(
  //   { lastModifiedDate: { $type: "string" } },
  //   [
  //     {
  //       $set: {
  //         lastModifiedDate: {
  //           $toDate: "$lastModifiedDate"
  //         }
  //       }
  //     }
  //   ]
  // )


