import {
  Resolver,
  Mutation,
  Arg,
  Query,
  FieldResolver,
  Root,
} from 'type-graphql';
import {
  Showroom,
  ShowroomModel
} from '../../entities/Showroom';
import {
  ShowroomInput
} from './ShowroomInput';
import {
  Board,
  BoardModel
} from '../../entities/Board';

@Resolver((_of) => Showroom)
export class ShowroomResolver {
  @Query((_returns) => Showroom, {
      nullable: false
  })
  async returnSingleShowroom(@Arg('id') id: string) {
      return await ShowroomModel.findById({
          _id: id
      });
  }

  @Query(() => [Showroom])
  async returnAllShowrooms() {
      return await ShowroomModel.find();
  }

  @Mutation(() => Showroom)
  async createShowroom(@Arg('data') {
      boards
  }: ShowroomInput): Promise < Showroom > {
      const board = (
          await ShowroomModel.create({
              boards,
          })
      ).save();
      return board;
  }

  @Mutation(() => Boolean)
  async deleteShowroom(@Arg('id') id: string) {
      await ShowroomModel.deleteOne({
          id
      });
      return true;
  }

  @FieldResolver((_type) => Board)
  async board(@Root() showroom: Showroom): Promise < Board > {
      console.log(showroom, 'showroom!');
      return (await BoardModel.findById(showroom._doc.boards)) !;
  }
}