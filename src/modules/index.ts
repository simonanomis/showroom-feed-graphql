import {BoardResolver} from "./board/BoardResolver";
import { ShowroomResolver } from './showroom/ShowroomResolver';
import { UserActivityResolver } from './user-activity/UserActivityResolver';

// Important: Add all your module's resolver in this
export const resolvers: [Function, ...Function[]] = [
  BoardResolver,
   ShowroomResolver,
   UserActivityResolver
];