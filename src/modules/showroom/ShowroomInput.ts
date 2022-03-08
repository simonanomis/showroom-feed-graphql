import {
  InputType,
  Field,
  ID
} from 'type-graphql';
import {
  ObjectId
} from 'mongodb';
import {
  Showroom
} from '../../entities/Showroom';

@InputType()
export class ShowroomInput implements Partial < Showroom > {
  @Field()
  title: String;

  @Field(() => ID)
  boards: ObjectId;
}