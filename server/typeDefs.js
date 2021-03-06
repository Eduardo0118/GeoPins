const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    _id: ID
    name: String
    email: String
    picture: String
  }

  type Pin {
    _id: ID
    title: String
    content: String
    image: String
    createdAt: String
    latitude: Float
    longitude: Float
    author: User
    comments: [Comment]
  }

  type Comment {
    text: String
    createdAt: String
    author: String
  }

  type Query {
    me: User
  }
`;
