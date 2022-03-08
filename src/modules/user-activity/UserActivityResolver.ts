import {
    Resolver,
    Mutation,
    Arg,
    Query,
    FieldResolver,
    Root,
  } from 'type-graphql';
import { UserActivity, UserActivityModel } from '../../entities/UserActivity';
import { Board, BoardModel } from '../../entities/Board';
import { UserActivityInput } from './UserActivityInput';
  
  @Resolver((_of) => UserActivity)
  export class UserActivityResolver {
    @Query((_returns) => UserActivity, { nullable: false })
    async returnSingleUserActivity(@Arg('id') id: string) {
      return await UserActivityModel.findById({ _id: id });
    }
  
    @Query(() => [UserActivity])
    async returnAllUserActivities() {
      return await UserActivityModel.find();
    }
  
    @Mutation(() => UserActivity)
    async createUserActivity(
      @Arg('data') { timestamp, eventType, page, loggedIn, board_id }: UserActivityInput
    ): Promise<UserActivity> {
      const userActivity = (
        await UserActivityModel.create({
            timestamp, 
            eventType, 
            page, 
            loggedIn, 
            board_id 
        })
      ).save();
      return userActivity;
    }
  
    @Mutation(() => Boolean)
    async deleteUserActivity(@Arg('id') id: string) {
      await UserActivityModel.deleteOne({ id });
      return true;
    }
  
    @FieldResolver((_type) => Board)
    async board(@Root() userActivity: UserActivity): Promise<Board> {
      console.log(userActivity, 'userActivity!');
      return (await BoardModel.findById(userActivity._doc.board_id))!;
    }
  }