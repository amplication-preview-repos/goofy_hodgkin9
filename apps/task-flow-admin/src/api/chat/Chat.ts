import { Project } from "../project/Project";

export type Chat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  sender: string | null;
  timestamp: Date | null;
  project?: Project | null;
};
