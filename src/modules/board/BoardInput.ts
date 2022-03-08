import { InputType, Field } from 'type-graphql';
import { Length } from 'class-validator';
import { Board } from '../../entities/Board';

@InputType()
export class BoardInput implements Partial<Board> {
  @Field()
  title: String;

  @Field()
  @Length(1, 255)
  description: String;

  @Field()
  @Length(1, 255)
  imageUrl: String;
}
