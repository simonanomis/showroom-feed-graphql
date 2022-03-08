import { Field, ObjectType, ID } from 'type-graphql'
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { Board } from './Board';
import { EUserActivityEventType } from '../models/EUserActivityEventType';
import { Ref } from './Types';

@ObjectType({ description: 'The User Activity model' })
export class UserActivity {
    @Field(() => ID)
    id: String

    @Field()
    @Property({ default: new Date(), required: true, nullable: true })
    timestamp: Date;

    @Field()
    @Property()
    eventType: EUserActivityEventType

    @Field()
    @Property()
    page: string

    @Field()
    @Property({ required: true })
    loggedIn: Boolean;

    @Field((_type) => String)
    @Property({ ref: Board, required: true })
    board_id: Ref<Board>;
    _doc: any;
}

export const UserActivityModel = getModelForClass(UserActivity);