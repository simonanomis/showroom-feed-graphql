import {
  BoardResolver
} from "./board/BoardResolver";
import {
  ShowroomResolver
} from './showroom/ShowroomResolver';
import {
  UserActivityResolver
} from './user-activity/UserActivityResolver';

export const resolvers: [Function, ...Function[]] = [
  BoardResolver,
  ShowroomResolver,
  UserActivityResolver
];