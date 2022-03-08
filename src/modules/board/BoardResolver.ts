
import { Resolver, Arg, Query, Mutation } from "type-graphql";
import { Board, BoardModel } from '../../entities/Board';
import { BoardInput } from './BoardInput';

@Resolver((of) => Board)
export class BoardResolver {

  @Query((_returns) => Board, { nullable: false })
  async returnSingleBoard(@Arg('id') id: string) {
    return await BoardModel.findById({ _id: id });
  }

  @Query(() => [Board])
  async returnAllBoard() {
    return await BoardModel.find();
  }

  @Mutation((returns) => Board)
  async createBoard(
    @Arg("data") {title, description, imageUrl}: BoardInput
  ): Promise<Board> {
    const board = (
      await BoardModel.create({title, description, imageUrl})).save();
    return board;
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Arg('id') id: string) {
    await BoardModel.deleteOne({ id });
    return true;
  }
}