import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { ChatCreateNestedManyWithoutProjectsInput } from "./ChatCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  chats?: ChatCreateNestedManyWithoutProjectsInput;
};
