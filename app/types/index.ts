// 末尾にas constを付けることでreadonlyなリテラル型を用意
export const STATUSES = ["pending", "progress", "done"] as const;
// 変数から型を抽出するtypeofを利用
export type Status = (typeof STATUSES)[number];

export interface Task {
  id: number;
  name: string;
  limit: string;
  status: Status;
}
