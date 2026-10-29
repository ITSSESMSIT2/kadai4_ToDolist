export type Status = "pending" | "progress" | "done";

export interface Task {
  id: number;
  name: string;
  limit: string;
  status: Status;
}
