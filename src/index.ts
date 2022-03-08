import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { buildSchema } from 'type-graphql'
import {BoardResolver} from './modules/board/BoardResolver';
import { connect } from 'mongoose';
import { ShowroomResolver } from './modules/showroom/ShowroomResolver';
import { UserActivityResolver } from './modules/user-activity/UserActivityResolver';

  const main = async () => {
    const schema = await buildSchema({
      resolvers: [
        BoardResolver, 
        ShowroomResolver, 
        UserActivityResolver
      ],
      emitSchemaFile: true,
      validate: false,
    });
  const MONGODB_URI="mongodb+srv://simonauser:admin123@cluster0.wjpvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

  // create mongoose connection
  const mongoose = await connect(MONGODB_URI);
  await mongoose.connection;

  const server = new ApolloServer({
    schema,
  })

  const app = express()

  await server.start()
  await server.applyMiddleware({ app })

  app.listen(4000, () =>
    console.log('Server is running on http://localhost:4000/graphql')
  )
}

main().catch((error) => {
  console.log(error, 'error');
});