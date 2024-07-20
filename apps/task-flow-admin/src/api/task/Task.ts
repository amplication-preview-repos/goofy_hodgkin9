import { Project } from "../project/Project";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  status?: "Option1" | null;
  priority?: "Option1" | null;
  assignee: string | null;
  project?: Project | null;
};
