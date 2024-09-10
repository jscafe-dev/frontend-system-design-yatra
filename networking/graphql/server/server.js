const { gql, ApolloServer } = require("apollo-server");

const users = [
  {
    id: 0,
    name: "JS Cafe",
    problems: [0, 1],
  },
  {
    id: 1,
    name: "Roadside Coder",
    problems: [1, 2],
  },
];

const problems = [
  {
    id: 0,
    title: "Two Sum",
    solvers: [0],
  },
  {
    id: 1,
    title: "Three Sum",
    solvers: [0, 1],
  },
  {
    id: 2,
    title: "Four Sum",
    solvers: [1],
  },
];

const typeDefs = gql(`
    type User {
        id: ID,
        name: String,
        problems: [Problem]
    }

    type Problem {
        id: ID,
        title: String,
        solvers: [User]
    }
    
    type Query {
        users: [User],
        problems: [Problem]
    }
    `);

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    problems: () => {
      return problems;
    },
  },
  User: {
    problems: (user) => {
      return problems.filter((problem) => problem.solvers.includes(user.id));
    },
  },
  Problem: {
    solvers: (problem) => {
      return users.filter((user) => user.problems.includes(problem.id));
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(4000).then(({ url }) => {
  console.log(`GraphQL started on ${url}`);
});
