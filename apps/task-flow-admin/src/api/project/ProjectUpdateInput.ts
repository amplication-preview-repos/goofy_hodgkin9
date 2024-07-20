import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { ChatUpdateManyWithoutProjectsInput } from "./ChatUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  chats?: ChatUpdateManyWithoutProjectsInput;
};
