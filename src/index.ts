import { GraphQLServer } from 'graphql-yoga'
// import { resolvers } from './resolvers'

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
    },
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
} as any);

server.start(() => console.log('Server is running on http://localhost:4000'))