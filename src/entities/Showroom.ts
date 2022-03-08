import {
  Field,
  ObjectType,
  ID
} from 'type-graphql'
import {
  prop as Property,
  getModelForClass
} from "@typegoose/typegoose";
import {
  Board
} from './Board';
import {
  Ref
} from './Types';

@ObjectType({
  description: 'The Showroom model'
})
export class Showroom {
  @Field(() => ID)
  id: String

  @Field()
  @Property()
  title: String

  @Field((_type) => String)
  @Property({
      ref: Board,
      required: true
  })
  boards: Ref < Board > ;
  _doc: any;
}

export const ShowroomModel = getModelForClass(Showroom);