# Recipe Management System

The Recipe Management System is a web application that allows users to manage recipes using a database. It provides CRUD (Create, Read, Update, Delete) operations for recipes and interacts with an online API, such as Postman, to make changes to the database.

## Dependencies

To ensure successful utilization of the Recipe Management System, you need to have the following dependencies installed:

### Prerequisites

- Node.js installed on your machine

### Install Express

```bash
npm install express
```

### Install Nodemon

Install Nodemon globally or locally:

```bash
npm install -g nodemon
```

or

```bash
npm install --save-dev nodemon
```

Add a start script in your package.json file:

```json
"scripts": {
  "start": "nodemon server.js"
}
```

### Install PostgreSQL

Install PostgreSQL or any other supported database management system.

To install the `pg` library, which allows your Node.js application to interact with PostgreSQL, run the following command:

```bash
npm install pg
```

### Install Sequelize

```bash
npm install --save sequelize sequelize-cli pg-hstore
```

### Installation

1. Clone the repository or download the source code.

```bash
git clone https://github.com/junyaokh822/Recipe_Management_system.git
```

2. Navigate to the project directory.

```bash
cd Recipe-Management-System/
```

3. Install the dependencies by running the following command:

```bash
npm install
```

### Configure the Database Connection

Open the `config/config.js` file and update the `development` object with your PostgreSQL database credentials, including the username, password, host, port, and database details.

### Set Up the Database Tables

Run the following command to create the necessary tables:

```bash
npx sequelize-cli db:migrate
```

## Usage

Run the application with the following command:

```bash
npm start
```

The application will start and connect to the PostgreSQL database using the provided configuration.

## Endpoints

The application provides the following endpoints:

- GET `/api/recipes`: Retrieve all recipes.
- GET `/api/recipes/:id`: Retrieve a specific recipe by its ID.
- POST `/api/recipes`: Create a new recipe. Provide the recipe data in the request body.
- PUT `/api/recipes/:id`: Update an existing recipe. Provide the updated recipe data in the request body.
- DELETE `/api/recipes/:id`: Delete a recipe by its ID.

Note: Replace `/api/recipes` with the appropriate route base path if you have configured a different base path in your application.

## Data Validation

The application utilizes Sequelize's built-in validation methods to enforce data validation rules. Each field in the model definition includes validation rules that ensure the data meets specific criteria. You can modify the validation rules according to your application's requirements.

For example, the "title" field may have a minimum length rule as follows:

```javascript
title: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notEmpty: {
      msg: 'Title is required.',
    },
    minThreeChar(value) {
      if (value.length < 3) {
        throw new Error('Title must be at least 3 characters long.');
      }
    }
  }
},
```

## Conclusion

The Recipe Management System allows you to efficiently perform CRUD operations on your PostgreSQL database while benefiting from Sequelize's built-in data validation capabilities. By following the setup instructions and utilizing the provided endpoints, you can manage recipes with ease. If you encounter any issues or have questions, feel free to reach out for support.

## Credits

This project was inspired by the tutorial available at: [https://github.com/CSI-Tech-Talent-Pipeline/Summer-2023-preinternship](https://github.com/CSI-Tech-Talent-Pipeline/Summer-2023-preinternship).