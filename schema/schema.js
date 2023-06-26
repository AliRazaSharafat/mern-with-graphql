import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

module.exports = UserType;
