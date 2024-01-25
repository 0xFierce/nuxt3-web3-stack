import { renderPlaygroundPage } from 'graphql-playground-html'

export default defineEventHandler(async (event) => {

    try {
        const body = await renderPlaygroundPage({
            endpoint: '/api/graphql'
        })

        event.res.end(body)
    } catch (error: any) {
        event.res.end({ message: error.message })
    }
})

