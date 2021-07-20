const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
}

  type City {
    _id: ID
    drinkCity: String!
  
  }

  type Liquor {
    _id: ID
    drinkLiquor: String!

  }
  input DrinkInput{
    drinkCity: String!
    drinkLiquor: String!
  }

  

  type Query {
    user: User
  
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDrink(drinkData: DrinkInput!): User
  }
`;

module.exports = typeDefs;
