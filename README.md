# GraphQL CRUD
CRUD API built with Node, GraphQL and Mongo for database


## Feature List
* Seed Database
* View a single listing
* View most recent listings
* Create listing with `name, address, description, website, email and phone`.
* Update Listing.
* Delete listing

## Getting Started
### GraphiQL
Open up a browser and visit
```bash
https://graphql-crud-mongo.herokuapp.com/graphql
```

Send any of the following queries via the GraphiQL window:

### CREATE New Listing
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


### VIEW Recent Listings:
  ```bash
  {
    recentListings{
      address
      name
      description
      website
      _id
    }
  }
  ```


### VIEW Single Listing:
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

### UPDATE Listing:
  ```bash
  mutation{
    updateListing(_id:"5a844e76e65f591b984f6b3c", name:"Seyi Law Slayers"){
      _id,
      name
    }
  }
  ```

### DELETE Listing:
  ```bash
  mutation{
    deleteListing(_id:"5a844e76e65f591b984f6b39"){
      name
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

You can send any of the queries previously mentioned above.

You can also seed your database with the following command:
### SEED Database:
  ```bash
  mutation{
    seedDatabase{
      name
      description
    }
  }
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