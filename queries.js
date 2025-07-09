// Week 1: MongoDB Fundamentals Assignment

// Task 2: Basic CRUD Operations

// Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });

// Find books published after a certain year (e.g., 1950)
db.books.find({ published_year: { $gt: 1950 } });

// Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });

// Update the price of a specific book (e.g., "The Hobbit")
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
);

// Delete a book by its title (e.g., "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" });


// Task 3: Advanced Queries

// Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Use projection to return only the title, author, and price fields
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Implement sorting to display books by price (ascending)
db.books.find().sort({ price: 1 });

// Implement sorting to display books by price (descending)
db.books.find().sort({ price: -1 });

// Use the limit and skip methods to implement pagination (5 books per page, page 2)
db.books.find().skip(5).limit(5);


// Task 4: Aggregation Pipeline

// Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      average_price: { $avg: "$price" }
    }
  }
]);

// Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      book_count: { $sum: 1 }
    }
  },
  {
    $sort: { book_count: -1 }
  },
  {
    $limit: 1
  }
]);

// Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $floor: {
          $divide: ["$published_year", 10]
        }
      },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: {
        $multiply: ["$_id", 10]
      },
      count: 1,
      _id: 0
    }
  },
  {
    $sort: {
      decade: 1
    }
  }
]);


// Task 5: Indexing

// Create an index on the `title` field
db.books.createIndex({ title: 1 });

// Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: -1 });

// Use the `explain()` method to demonstrate performance improvement
db.books.find({ title: "1984" }).explain("executionStats");
db.books.find({ author: "George Orwell", published_year: { $lt: 1950 } }).explain("executionStats");
