const { gql, ApolloServer } = require("apollo-server");

const resolvers = {
  Query: {
    hello() {
      return "word";
    },
  },
};

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
