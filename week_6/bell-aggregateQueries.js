/**
 * Date:        Feburary 11, 2022
 * Title:       bell-aggregateQueries.js
 * Author:      Exenreco Bell
 * Description: MongoDB Queries for houses and students collections
 */

// Part 1 -> load houses js
// load('houses.js');

// Part 2.a -> Display all students
db.students.find();

// Part 2.b -> Add a new student
db.students.insertOne({
    "firstName": "John",
    "lastName": "Doe",
    "studentId": "s1019",
    "houseId": "h1007"
});

// Verify the new student was added successfully
db.students.find({ "studentId": "s1019" });

// Part 2.c -> Update the newly added student's last name
db.students.updateOne(
    { "studentId": "s1019" },
    { $set: { "lastName": "Smith" } }
);

// Verify the update
db.students.find({ "studentId": "s1019" });

// Part 2.d -> Delete the newly added student
db.students.deleteOne({ "studentId": "s1019" });

// Verify the deletion
db.students.find({ "studentId": "s1019" });

// Part 2.e -> Display all students by house
db.houses.find().forEach(function(house) {
    print("House: " + house.houseId);
    db.students.find({ "houseId": house.houseId }).forEach(printjson);
});

// Part 2.f -> Display all students in house Gryffindor
db.students.find({ "houseId": "h1007" });

// Part 2.g -> Display all students in the house with an Eagle mascot
db.houses.find({ "mascot": "Eagle" }).forEach(function(house) {
    print("House: " + house.houseId);
    db.students.find({ "houseId": house.houseId }).forEach(printjson);
});
