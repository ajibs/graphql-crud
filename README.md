# GraphQL CRUD
CRUD API built with GraphQL, Node and Mongo for database


## Feature List
* View a single listing
* View most recent listings
* Create listing with `name, address, description, website, email and phone`
* Update Listing
* Delete listing
* Seed Database


## Getting Started
Open up a browser and visit
```bash
https://graphql-crud-mongo.herokuapp.com/graphql
```

Send any of the following requests via the GraphiQL window:

### Example GraphQL Query to CREATE New Listing
```bash
  mutation{
    addListing(name:"Bolu Ventures", address: "ajibawo house, ibadan", description:"techie things", website:"http://boluajibawo.xyz", email:"bolu@yahoo.com", phone:"+23457927938"){
    _id
    name
    description
    address
    }
  }
```

### Example Response to CREATE New Listing
```bash
  {
    "data": {
      "addListing": {
        "_id": "5a859392b5e4d40014e96591",
        "name": "Bolu Ventures",
        "description": "techie things",
        "address": "ajibawo house, ibadan"
      }
    }
  }
```


### Example GraphQL Query to VIEW Recent Listings:
```bash
  {
    recentListings{
      name
      description
      _id
    }
  }
```

### Example Response to VIEW Recent Listings
```bash
  {
    "data": {
      "recentListings": [
        {
          "name": "Bolu Ventures",
          "description": "techie things",
          "_id": "5a859392b5e4d40014e96591"
        },
        {
          "name": "booking.com",
          "description": "largest hotel booking website",
          "_id": "5a844e76e65f591b984f6b3c"
        },
        {
          "name": "hotels.ng",
          "description": "book hotels in nigeria",
          "_id": "5a844e76e65f591b984f6b3b"
        },
        {
          "name": "flutterwave",
          "description": "powerful payments apis",
          "_id": "5a844e76e65f591b984f6b3a"
        },
        {
          "name": "jumia",
          "description": "best online shopping",
          "_id": "5a844e76e65f591b984f6b39"
        },
        {
          "name": "andela",
          "description": "training world class developers",
          "_id": "5a844e76e65f591b984f6b38"
        }
      ]
    }
  }
```


### Example GraphQL Query to VIEW Single Listing:
```bash
  {
    singleListing(_id:"5a844e76e65f591b984f6b3c"){
      _id
      name
      email
      phone
    }
  }
```

### Example Response to VIEW Single Listing:
```bash
  {
    "data": {
      "singleListing": [
        {
          "_id": "5a844e76e65f591b984f6b3c",
          "name": "booking.com",
          "email": "hello@domain.com",
          "phone": "+23412345678"
        }
      ]
    }
  }
```


### Example GraphQL Query to UPDATE Listing:
```bash
  mutation{
    updateListing(_id:"5a844e76e65f591b984f6b3c", name:"Black Panther"){
      _id,
      name
    }
  }
```

### Example Response to UPDATE Listing:
```bash
  {
    "data": {
      "updateListing": {
        "_id": "5a844e76e65f591b984f6b3c",
        "name": "Black Panther"
      }
    }
  }
```


### Example GraphQL Query to DELETE Listing:
```bash
  mutation{
    deleteListing(_id:"5a844e76e65f591b984f6b39"){
      name
    }
  }
```

### Example Response to DELETE Listing:
```bash
  {
    "data": {
      "deleteListing": null
    }
  }
```



## Setup
#### Local Copy
To create a local copy, run the following in your terminal:
```bash
git clone https://github.com/ajibs/graphql-crud.git
```
Then change into the local directory, run the following in your terminal:
```bash
cd graphql-crud
```

#### Install Node.js and Yarn
If you don't have Node.js installed, please go ahead and grab it [here](https://nodejs.org/). This project uses ES6+ features and requires Node version `8.9.4`

Yarn is a package manager for Node.js and can be installed from [here](https://yarnpkg.com/en/docs/install).

To confirm that you have Node.js installed, run the following in your terminal:
```bash
node -v
```
You should get something like `v8.9.4`.

To confirm that you have Yarn installed, run the following in your terminal:
```bash
yarn -v
```
You should get something like `1.3.2`.

#### Setup Database and .env file
You can setup a database on [mlab](https://mlab.com/). You should also create a `.env` file using `.env.sample` as a prototype.

#### Install Node.js Modules
To install all dependencies, run the following in your terminal:
```bash
yarn
```

## Development
To kickstart the application, run the following in your terminal:
```bash
npm run dev
```

Open up a browser and visit
```bash
  http://localhost:5000/graphql
```

You can send any of the requests previously mentioned above.

You can also seed your database with the following command:
### Example Query to SEED Database:
```bash
  mutation{
    seedDatabase{
      name
      description
    }
  }
```

## Production
To build and serve the app for production, run the following in your terminal:
```bash
npm run build
```
Then:
```bash
npm run start
```

## Built With
- [Git](https://git-scm.com/) - Version Control
- [Node.js](https://nodejs.org/) - JS Runtime Environment
- [GraphQL](http://graphql.org/) - API Query Language and Runtime
- [MongoDb](https://www.mongodb.com/download-center#community)
- [Yarn](https://yarnpkg.com) - Package Manager
- [Express](https://expressjs.com/en/starter/installing.html) - Web Framework
- [ESLint](https://eslint.org/) - Linting Tool
- [VS Code](https://code.visualstudio.com/) - Code Editor


## Author
* [Bolu Ajibawo](https://github.com/ajibs)