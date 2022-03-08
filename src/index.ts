import 'reflect-metadata'
import {
    ApolloServer
} from 'apollo-server-express'
import express from 'express'
import {
    buildSchema
} from 'type-graphql'
import {
    connect
} from 'mongoose';
import {
    resolvers
} from './modules/index';
import * as dotenv from 'dotenv';
import env from '../env.config'

const main = async () => {
    const schema = await buildSchema({
        resolvers: [
            ...resolvers
        ],
        emitSchemaFile: true,
        validate: false,
    });

    dotenv.config();
    
    const mongoUri = env.MongoBaseUrl
    const mongoose = await connect(mongoUri);
    await mongoose.connection;

    const server = new ApolloServer({
        schema,
    })

    const app = express()
    await server.start()
    await server.applyMiddleware({
        app
    })

    app.listen(env.MongoBasePort, () =>
        console.log('Server is running on http://localhost:4000/graphql')
    )
}

main().catch((error) => {
    console.log(error, 'error');
});