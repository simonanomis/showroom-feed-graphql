export default {
    MongoBaseUrl: process.env.MONGODB_URI ?? '',
    MongoBasePort: process.env.PORT ?? '',
    GraphqlPath: process.env.GRAPHQL_PATH ?? ''
}