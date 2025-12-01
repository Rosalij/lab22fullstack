# A simple RESTful API to manage books using Hapi.js and MongoDB.
## This web service allows users to create, read, update, and delete books. 
It uses Hapi.js as the server framework and MongoDB with Mongoose for data storage.

| Endpoint         | Method | Description                         |
| ---------------- | ------ | ----------------------------------- |
| `/books`      | GET    | Retrieve all books              |
| `/books`      | POST   | Add a new book                  |
| `/books/{id}` | GET    | Retrieve a single book          |
| `/books/{id}` | PUT    | Update a book                   |
| `/books/{id}` | DELETE | Delete a book                   |
| `/`           | GET    | Test route, returns "Hello, world!" |

### Database structure 
| Field     | Type    | Description                 |
| --------- | ------- | --------------------------- |
| title     | String  | Book title (required)       |
| author    | String  | Book author (required)      |
| rating    | Number  | Book rating ( required) |
| read      | Boolean | Read status (default: true) |

Getting started:

git clone https://github.com/Rosalij/lab22fullstack.git

npm install

add .env (MONGO_URI, PORT)

npm run start
