import {
  InputType,
  Field,
  ID
} from 'type-graphql';
import {
  ObjectId
} from 'mongodb';
import {
  UserActivity
} from '../../entities/UserActivity';
import {
  EUserActivityEventType
} from '../../models/EUserActivityEventType';

@InputType()
export class UserActivityInput implements Partial < UserActivity > {
  @Field()
  timestamp: Date;

  @Field()
  eventType: EUserActivityEventType;

  @Field()
  page: string;

  @Field()
  loggedIn: Boolean;

  @Field(() => ID)
  board_id: ObjectId;
}