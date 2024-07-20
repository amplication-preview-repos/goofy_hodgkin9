import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ChatUpdateInput = {
  message?: string | null;
  sender?: string | null;
  timestamp?: Date | null;
  project?: ProjectWhereUniqueInput | null;
};
