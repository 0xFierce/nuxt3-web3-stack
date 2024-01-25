import { Resolver, Query } from 'type-graphql'

@Resolver()
export default class HelloResolver {

    @Query(() => String)
    async sayHello() {
        return 'Hello World!'
    }
}