/**
 * Date:        February 6, 2025
 * file:        bell_projections.js
 * Title:       Hands on 5.1 - MongoDB Document Manipulation and Projections
 * Author:      Exenreco Bell
 * Description: MongoDB Shell script for document manipulation and projections.
 */

/**
*** Part a: Add a new user to the users collection.
*** =======================================================*/
newUser = {
  "firstName": "Antonio",
  "lastName": "Vivaldi",
  "employeeId": "1013",
  "email": "avivaldi@me.com",
  "dateCreated": new Date()
}

db.users.insertOne(newUser);

// Verify the new user was added successfully
db.users.findOne({ "employeeId": "1013" });

/**
*** Part b: Update Mozart’s email address to mozart@me.com.
*** =======================================================*/
db.users.updateOne(
  { "email": "wmozart@me.com" },
  { $set: { "email": "mozart@me.com" } }
);

// Verify the update was successful
db.users.findOne({ "email": "mozart@me.com" });

/**
*** Part c: Display all users with projections. Only show first name, last name, and email address.
*** =======================================================*/
db.users.find({}, { "firstName": 1, "lastName": 1, "email": 1, "_id": 0 });