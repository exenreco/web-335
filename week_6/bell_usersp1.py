"""
Date:         February 10, 2025
File:         bell_usersp1.py
Title:        Python with MongoDB, Part I
Author:       Exenreco Bell
Description:  A class that allows access to a MongoDB
"""

# Import the MongoClient from pymongo
from pymongo import MongoClient

class Database:
    """
      A class to manage MongoDB connections and queries.
    """


    def __init__(self, databaseURI=None, databaseName=None):
      """ INIT
          Initializes the Database class.

          Attributes:
            databaseURI (str): The URI for connecting to the MongoDB server.
            databaseName (str): The name of the target database.
            connection (MongoClient): The MongoDB client connection.
            database (Database): The selected database object.
      """

      # Validate database URI and name before setting
      if not databaseURI or not isinstance(databaseURI, str):
        raise ValueError("Invalid database URI")
      if not databaseName or not isinstance(databaseName, str):
        raise ValueError("Invalid database name")

      self.databaseURI = databaseURI # Stores the database URI

      self.databaseName = databaseName # Stores the database name

      self.connection = None # Placeholder for MongoDB connection

      self.database = None # Placeholder for the database object


    def connect(self):
      """ CONNECT
          Establishes a connection to the MongoDB database.
      """
      try:
        if self.connection is None:
          # Connect to MongoDB
          self.connection = MongoClient(self.databaseURI)
          # Select the database
          self.database = self.connection[self.databaseName]

      except Exception as e:
        # error when setting up connection
        exit(f"Connection error: {e}")


    def disconnect(self):
      """ DISCONNECT
          Closes the MongoDB connection if it is active.
      """
      if self.connection:

        self.connection.close() # Close the connection

        self.connection = None # Reset the connection object

        self.database = None  # Reset the database object


    def __enter__(self):
      """ Enter
          Establishes a connection to the MongoDB database when used in a `with` statement.

          Returns:
            Database: The instance of the Database class with an active connection.
      """
      self.connect() # Establish MongoDB connection

      return self # return the class instance


    def __exit__(self, exc_type, exc_value, traceback):
      """ EXIT
          Ensures the database connection is closed when exiting a `with` block.
      """

      self.disconnect() # Disconnect from the database


    def findAll(self, filter={}):
      ''' FIND ALL
          Retrieves all documents from the 'users' collection that match the filter.

          Args:
            filter (dict): A dictionary specifying query conditions.

          Returns:
            list: A list of dictionaries containing firstName and lastName of matched users.
      '''
      if self.database is None:
        self.connect()  # Ensure connection before querying
      return list(self.database.users.find(filter, {"firstName": 1, "lastName": 1, "_id": 0}))


    def findOne(self, filter={}):
      """ FIND ONE
          Retrieves a single document from the 'users' collection that matches the filter.

          Args:
            filter (dict): A dictionary specifying query conditions.

          Returns:
            dict: A dictionary containing the matched document (excluding _id).
      """
      if self.database is None:
        self.connect()  # Ensure connection before querying
      return self.database.users.find_one(filter, {"_id": 0})

# Hands-On 4.2, Part I:

#stores the database name and uri respectively
name, uri = "web335DB", "mongodb+srv://web335_user:s3cret@bellevueuniversity.3mpby.mongodb.net/web335DB?retryWrites=true&w=majority"

# Initialize database connection
with Database( databaseURI=uri, databaseName=name ) as db:
  # Fetch and display all users
  allUsers = db.findAll()
  print(f"\nAll Database Users:\n{allUsers}")

  # Fetch and display user by employeeId
  userById = db.findOne({"employeeId": "1011"})
  print(f"\nUser with employeeId '1011':\n{userById}\n")

  # Fetch and display user by last name
  userByLastName = db.findOne({"lastName": "Mozart"})
  print(f"\nUser with last name 'Mozart':\n{userByLastName}\n")

  # The database connection is automatically closed after exiting the `with` block.