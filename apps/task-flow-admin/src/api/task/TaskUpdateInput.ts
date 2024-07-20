import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  title?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  priority?: "Option1" | null;
  assignee?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
