/**
 * PRE-REQUISITES
 *
 * @see projectInstructions - for required info such as: {
 *  user:     web335_user
 *  Password: ******
 *  Database: web335DB
 * }
 *
 * @see mongoDBCommands - To Switch database and load database contents {
 *
 *    1st - @see connectToDatabase - Connects to the Atlas Database: {
 *      mongosh "mongodb+srv://web335_user:<password>@bellevueuniversity.3mpby.mongodb.net/"
 *    }
 *
 *    2nd - @see switchDatabase - Switch to the web335DB database using atlas Command: {
 *      use web335DB
 *    }
 *
 *    3rd - @see loadDatabase - Adds contents to the web335DB database {
 *      load("users.js")
 *    }
 *
 *  NOTE: Before running any of the commands below, ensure you switch to the web335DB database.
 *
 * }
 **/

// Display all users in the collection
db.users.find();

// Display user with email jbach@me.com
db.users.findOne({ email: "jbach@me.com" });

// Display user with last name Mozart
db.users.findOne({ lastName: "Mozart" });

// Display user with first name Richard
db.users.findOne({ firstName: "Richard" });

// Display user with employeeId 1010
db.users.findOne({ employeeId: "1010" });