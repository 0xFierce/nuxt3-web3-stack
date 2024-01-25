import type { NonEmptyArray } from 'type-graphql'

import hello from './hello/resolvers/hello.resolver'

const resolvers: NonEmptyArray<Function> = [
    hello
]

export default resolvers