// @flow

const server = require('apollo-server-micro');
const { makeExecutableSchema } = require('graphql-tools');

const Combinator = require('./Combinator');

const typeDefs = `
  type Query {
    combinations(pressedNumbers: [Int!]!): [String]
  }

  schema {
    query: Query
  }
`;


module.exports = async function(req: mixed, res: { setHeader: Function }) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return server.microGraphql({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers: {
        Query: {
          combinations: (_, args) => Combinator(...args.pressedNumbers),
        },
      },
    }),
  })(req, res);
};
