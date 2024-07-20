import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ChatCreateInput = {
  message?: string | null;
  sender?: string | null;
  timestamp?: Date | null;
  project?: ProjectWhereUniqueInput | null;
};
