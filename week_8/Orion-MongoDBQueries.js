/** Title: MongoDB Queries
 ** Date: February 25, 2025
 ** Group Name: Orion
 ** Group Members: Exenreco Bell, Caleb Goforth, Rachel White
 **======================================================================*/

// Write a query to display a list of books.
db.books.find();

// Write a query to display a list of books by genre.
db.books.find({ genres: "Fiction" }).pretty();

// Write a query to display a list of book by author.
db.books.find({ author: "Harper Lee" }).pretty();

//Write a query to display a book by bookId.
db.books.findOne({ bookId: 'book-002' });

// Display a wishlist by customerId.
db.wishlists.aggregate([ { $match: { userId: "user-001" } }, { $lookup: { from: "books", localField: "bookId", foreignField: "bookId", as: "wishlistBooks" } } ]).pretty();

// Add books to a customer’s wishlist.
db.wishlists.updateOne( { userId: "user-001", bookId: "book-005" }, { $setOnInsert: { wishlistId: "wishlist-007", timestamp: new Date() } }, { upsert: true } ); db.users.updateOne( { userId: "user-001" }, { $addToSet: { wishlist: "wishlist-007" } } );

// Remove book from a customer’s wishlist.
db.wishlists.deleteOne({ userId: "user-001", wishlistId: "wishlist-007" }); db.users.updateOne({ userId: "user-001" }, { $pull: { wishlist: "wishlist-007" } });