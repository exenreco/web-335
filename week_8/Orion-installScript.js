/** Title: MongoDB Install.js
 ** Date: February 25, 2025
 ** Group Name: Orion
 ** Group Members: Exenreco Bell, Caleb Goforth, Rachel White
 **======================================================================*/


/** DELETE EXISTING COLLECTIONS
 ** Remove collection if collection exists
 **======================================================================*/

db.users.drop(); // delete user collection if exists

db.books.drop(); // delete books collection if exists

db.wishlists.drop(); // delete wishlist collection if exists


/** CREATE USER COLLECTION
 ** create the What a book collection for users
 **======================================================================*/
db.createCollection("users", { validator: { $jsonSchema: {
  bsonType:   "object",
  required:   ["role", "email", "password", "firstName", "lastName", "userId"],
  properties: {
    role:             { bsonType: "string" },
    email:            { bsonType: "string", pattern: "^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$" },
    userId:           { bsonType: "string" },
    password:         { bsonType: "string", pattern: "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$" },
    lastName:         { bsonType: "string" },
    firstName:        { bsonType: "string" },
    wishlist:         { bsonType: "array", items: { bsonType: "string" } },
    ratings:          { bsonType: "array", items: { bsonType: "object" } },
    reviews:          { bsonType: "array", items: { bsonType: "object" } },
    readHistory:      { bsonType: "array", items: { bsonType: "object" } },
    borrowedBooksIds: { bsonType: "array", items: { bsonType: "string" } },
  }
}}});


/** CREATE BOOK COLLECTION
 ** create the What a book collection for books
 **======================================================================*/
 db.createCollection("books", { validator: { $jsonSchema: {
  bsonType:   "object",
  required:   ["title", "author", "totalCopies", "availableCopies", "bookId"],
  properties: {
    ISBN:             { bsonType: "string" },
    title:            { bsonType: "string" },
    cover:            { bsonType: "string", pattern: "^(https?:\\/\\/.*\\.(jpg|jpeg|png|gif|bmp))$" },
    genres:           { bsonType: "array", items: { bsonType: "string" } },
    author:           { bsonType: "string" },
    bookId:           { bsonType: "string" },
    ratings:          { bsonType: "array", items: { bsonType: "object" } },
    reviews:          { bsonType: "array", items: { bsonType: "object" } },
    publisher:        { bsonType: "string" },
    pageCount:        { bsonType: "int" },
    readHistory:      { bsonType: "array", items: { bsonType: "object" } },
    totalCopies:      { bsonType: "int" },
    availableCopies:  { bsonType: "int" }
  }
}}});


/** CREATE WISHLIST COLLECTION
 ** create the What a book collection for wishlist
 **======================================================================*/
 db.createCollection("wishlists", { validator: { $jsonSchema: {
  bsonType:   "object",
  required:   ["userId", "bookId", "timestamp", "wishlistId"],
  properties: {
    userId:           { bsonType: "string" },
    bookId:           { bsonType: "string" },
    timestamp:        { bsonType: "date" },
    wishlistId:       { bsonType: "string" },
  }
}}});


/** SAMPLE BOOKS COLLECTION
 ** a collection of books
 **======================================================================*/
booksCollection = [
  {

    ISBN:             '9780439708180',
    title:            "Harry Potter and the Sorcerer's",
    cover:            'https://whatabook.com/images/sorcerers-stone.jpg',
    genres:            ['Fantasy', 'Young Adult'],
    author:           'J.K. Rowling',
    bookId:           'book-001',
    ratings:          [
                        { ratingId:'rating-001', userId: 'user-001', rating: 4, timestamp: new Date() },
                        { ratingId:'rating-002', userId: 'user-003', rating: 2, timestamp: new Date() },
                        { ratingId:'rating-003', userId: 'user-005', rating: 5, timestamp: new Date() }
                      ],
    reviews:          [
                        { reviewId: 'review-001', userId: 'user-003', review: 'better than the movie?', timestamp: new Date() },
                        { reviewId: 'review-002', userId: 'user-007', review: 'magic magic magic!', timestamp: new Date() },
                        { reviewId: 'review-003', userId: 'user-005', review: 'love this book', timestamp: new Date() }
                      ],
    publisher:        'Bloomsbury Publishing',
    readHistory:      [
                        { historyId: 'history-001', userId: 'user-004', currentPage: 16, startDate: new Date(), completeDate: null },
                        { historyId: 'history-002', userId: 'user-006', currentPage: 220, startDate: new Date(), completeDate: null },
                        { historyId: 'history-003', userId: 'user-004', currentPage: 8, startDate: new Date(), completeDate: null },
                      ],
    pageCount:        223,
    totalCopies:      12,
    availableCopies:  10
  },
  {
    ISBN:             '9780618968627',
    title:            'To Kill a Mockingbird',
    cover:            'https://whatabook.com/images/kill-a-mockingbird.jpg',
    genres:            ['Fiction', 'Classic'],
    author:           'Harper Lee',
    bookId:           'book-002',
    ratings:          [],
    reviews:          [],
    publisher:        'J.B. Lippincott & Co.',
    readHistory:      [],
    pageCount:        281,
    totalCopies:      15,
    availableCopies:  15
  },
  {
    ISBN:             '9780141439518',
    title:            'The Great Gatsby',
    cover:            'https://whatabook.com/images/the-great-gatsby.jpg',
    genres:            ['Fiction', 'Classic'],
    author:           'F. Scott Fitzgerald',
    bookId:           'book-003',
    ratings:          [],
    reviews:          [],
    publisher:        'Penguin Books',
    readHistory:      [],
    pageCount:        208,
    totalCopies:      5,
    availableCopies:  1
  },
  {
    ISBN:             '9780061120084',
    title:            'The Catcher in the Rye',
    cover:            'https://whatabook.com/images/rye-catcher.jpg',
    genres:            ['Fiction', 'Young Adult'],
    author:           'J.D. Salinger',
    bookId:           'book-004',
    ratings:          [],
    reviews:          [],
    publisher:        'Little, Brown and Company',
    readHistory:      [],
    pageCount:        277,
    totalCopies:      10,
    availableCopies:  8
  },
  {
    ISBN:             '9780345391803',
    title:            'The Hobbit',
    cover:            'https://whatabook.com/images/th-hobbit.jpg',
    genres:            ['Fantasy', 'Adventure'],
    author:           'J.R.R. Tolkien',
    bookId:           'book-005',
    ratings:          [],
    reviews:          [],
    publisher:        'Houghton Mifflin Harcourt',
    readHistory:      [],
    pageCount:        310,
    totalCopies:      14,
    availableCopies:  3
  }
];

/** SAMPLE USER COLLECTION
 ** a collection of users
 **======================================================================*/
usersCollection = [
  // users with librarian role
  {
    role:          "librarian",
    email:         "mthompson@whatabook.com",
    userId:        'user-001',
    password:      'TheSwiftFox$323',
    lastName:      'Thompson',
    firstName:     'Mark',
    ratings:       [ {bookId: 'book-001', ratingId: 'rating-001'}, {bookId: 'book-002', ratingId: 'rating-001'}  ],
    reviews:       [ { bookId: 'book-001', reviewId: 'review-001' }, {bookId: 'book-002', reviewId: 'review-002' } ],
    wishlist:      [ 'wishlist-001' ],
    readHistory:   [ {bookId: 'book-001', historyId: 'history-001'}, {bookId: 'book-002', historyId: 'history-001'}],
    borrowedBooks: [ 'borrowedId-005'  ]
  },
  {
    role:          "librarian",
    email:         "ssteel@whatabook.com",
    userId:        'user-002',
    password:      'theOreOfMetal$10',
    lastName:      'Steel',
    firstName:     'Sora',
    ratings:       [],
    reviews:       [],
    wishlist:      [ 'wishlist-002', 'wishlist-003' ],
    readHistory:   [],
    borrowedBooks: []
  },

  // Fictitious Users with subscriber role
  {
    role:          "subscriber",
    email:         "johnsonemaily@whatabook.com",
    userId:        'user-003',
    password:      'letItBee$011',
    lastName:      'Johnson',
    firstName:     'Emily',
    ratings:       [ {bookId: 'book-001', ratingId: 'rating-002'} ],
    reviews:       [ {bookId: 'book-001', reviewId: 'review-001' } ],
    wishlist:      [ 'wishlist-004', 'wishlist-005' ],
    readHistory:   [],
    borrowedBooks: [ 'borrowedId-002' ]
  },
  {
    role:          "subscriber",
    email:         "lee25@whatabook.com",
    userId:        'user-004',
    password:      'theBirdIsTheWord$01',
    lastName:      'Lee',
    firstName:     'Sarah',
    ratings:       [],
    reviews:       [],
    wishlist:      [ 'wishlist-006' ],
    readHistory:   [ {bookId: 'book-001', historyId: 'history-001'}, {bookId: 'book-001', historyId: 'history-003'} ],
    borrowedBooks: [ 'borrowedId-001' ]
  },
  {
    role:          "subscriber",
    email:         "blunt23@whatabook.com",
    userId:        'user-005',
    password:      '23#Bolder$',
    lastName:      'Blunt',
    firstName:     'James',
    ratingIds:     [ {bookId: 'book-001', ratingId: 'rating-003'}  ],
    reviewIds:     [ {bookId: 'book-001', reviewId: 'review-003'} ],
    wishlist:      [],
    readHistory:   [],
    borrowedBooks: []
  },


  // users with developer role
  {
    role:          "developer",
    email:         "eebell@whatabook.com",
    userId:        'user-006',
    password:      'randomString$3230',
    lastName:      'Bell',
    firstName:     'Exenreco',
    ratings:       [],
    reviews:       [],
    wishlist:      [],
    readHistory:   [ {bookId: 'book-001', historyId: 'history-002'}],
    borrowedBooks: [ 'borrowedId-002' ]
  },
  {
    role:          "developer",
    email:         "rwhite@whatabook.com",
    userId:        'user-007',
    password:      'secretAgent#007',
    lastName:      'White',
    firstName:     'Rachel',
    ratings:       [],
    reviews:       [ {bookId: 'book-001', reviewId: 'review-002'} ],
    wishlist:      [],
    readHistory:   [],
    borrowedBooks: []
  },
  {
    role:          "developer",
    email:         "cgoforth@whatabook.com",
    userId:        'user-008',
    password:      'stringOfLife$30',
    lastName:      'Goforth',
    firstName:     'Caleb',
    ratings:       [],
    reviews:       [],
    wishlist:      [],
    readHistory:   [],
    borrowedBooks: []
  },
];


/** SAMPLE WISHLIST COLLECTION
 ** a collection of wishlist
 **======================================================================*/
wishlistCollection = [
  {
    userId:     'user-001',
    bookId:     'book-003',
    timestamp:  new Date(),
    wishlistId: 'wishlist-001'
  },
  {
    userId:     'user-002',
    bookId:     'book-001',
    timestamp:  new Date(),
    wishlistId: 'wishlist-002'
  },
  {
    userId:     'user-002',
    bookId:     'book-003',
    timestamp:  new Date(),
    wishlistId: 'wishlist-003'
  },
  {
    userId:     'user-003',
    bookId:     'book-005',
    timestamp:  new Date(),
    wishlistId: 'wishlist-004'
  },
  {
    userId:     'user-003',
    bookId:     'book-002',
    timestamp:  new Date(),
    wishlistId: 'wishlist-005'
  },
  {
    userId:     'user-004',
    bookId:     'book-004',
    timestamp:  new Date(),
    wishlistId: 'wishlist-006'
  },
];


/** INSERT COLLECTIONS
 ** adds collections to the database
 **======================================================================*/
db.books.insertMany( [ ...booksCollection ] );
db.users.insertMany( [ ...usersCollection ] );
db.wishlists.insertMany( [ ...wishlistCollection ] );