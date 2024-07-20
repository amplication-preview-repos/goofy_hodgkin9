import { Task } from "../task/Task";
import { Chat } from "../chat/Chat";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  name: string | null;
  description: string | null;
  owner: string | null;
  tasks?: Array<Task>;
  chats?: Array<Chat>;
};
