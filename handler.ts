import {GraphQLServer, GraphQLServerLambda} from 'graphql-yoga'
import {resolvers} from "./src/resolvers";

const typeDefs = `
type Person {
    name: String!
    age: Int!
}

type Query {
    hello: String
    owner: Person
    allPersons: [Person!]!
}

type Mutation {
    createPerson(name: String!, age: Int!): Person!
}
`;

// const resolvers = {
//     Query: {
//         hello: (_, { name }) => `Hello ${name || 'world'}`,
//     },
// }

const lambda = new GraphQLServerLambda({
    typeDefs: typeDefs,
    resolvers,
})

export const server = lambda.graphqlHandler