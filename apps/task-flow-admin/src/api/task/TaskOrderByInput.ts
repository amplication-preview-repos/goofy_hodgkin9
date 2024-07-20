import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  priority?: SortOrder;
  assignee?: SortOrder;
  projectId?: SortOrder;
};
