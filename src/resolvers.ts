function createPerson(args: MutationToCreatePersonArgs): GQLPerson {
    return {
        name: args.name,
        age: args.age
    }
}

import {GQLPerson, GQLResolver, MutationToCreatePersonArgs} from "./schemas";

export const resolvers = {
    Mutation: {
        createPerson: (root: any, args: MutationToCreatePersonArgs) => createPerson(args)
    },
    Query: {
        hello: () => 'Hello world!',
        owner: () => {
            return {
                name: "Sergey",
                age: 25
            }
        },
        allPersons: () => [
            {
                name: "Sergey",
                age: 25
            },
            {
                name: "Vasya",
                age: 36
            }
        ]
    },
} as GQLResolver;