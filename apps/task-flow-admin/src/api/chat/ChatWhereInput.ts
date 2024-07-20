import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ChatWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  project?: ProjectWhereUniqueInput;
};
