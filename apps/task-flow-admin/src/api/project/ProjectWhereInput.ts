import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  owner?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  chats?: ChatListRelationFilter;
};
