[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19665049&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. # MongoDB Fundamentals Assignment

This repository contains the solution for the Week 1 MongoDB Fundamentals assignment.

## Setup and Execution

1.  **Install Dependencies:**
    Open your terminal and run the following command to install the required `mongodb` package:
    ```bash
    npm install mongodb
    ```

2.  **Start MongoDB:**
    Ensure your local MongoDB server is running. If you are using MongoDB Atlas, update the `uri` in `insert_books.js` with your connection string.

3.  **Populate the Database:**
    Run the following command to execute the `insert_books.js` script, which will create the `plp_bookstore` database and the `books` collection, and then populate it with sample data:
    ```bash
    node insert_books.js
    ```

4.  **Run Queries:**
    The `queries.js` file contains all the required MongoDB queries for this assignment. You can copy and paste these queries into your MongoDB Shell (`mongosh`) or use them in MongoDB Compass to interact with the database.

## Included Files

-   `insert_books.js`: A script to populate the MongoDB database with sample book data.
-   `queries.js`: Contains all the MongoDB queries for the assignment tasks.
-   `README.md`: This file, providing setup and execution instructions.
-   `database_screenshot.png`: A screenshot of the MongoDB database after population.

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)
