import { GraphQLSchema } from 'graphql';
import query from './queries/rootQuery';
import mutation from './mutations/rootMutations';

export default new GraphQLSchema({
  query,
  mutation,
});

/*
Queries and Mutations

// --- Create Listing
mutation{
  addListing(name:"Bolu Ventures", address: "ajibawo house, ibadan", description:"techie things", website:"http://boluajibawo.xyz", email:"bolu@yahoo.com", phone:"+23457927938"){
   _id
   name
  }
}

// --- Update Listing
mutation{
  updateListing(_id:"5a84054385d8c93468d89e15", name:"Seyi Law Slayers"){
    _id,
    name
  }
}

// --- Delete Listing
mutation{
  deleteListing(_id:"5a84054385d8c93468d89e15"){
    name
  }
}

// --- Single Listing
{
  singleListing(_id:"5a84054385d8c93468d89e13"){
    _id
    name
  }
}

// --- Recent Listings
{
  recentListings{
    name
    _id
  }
}

// --- Seed Database
mutation{
  seedDatabase{
    name
    address
    description
  }
}

*/
