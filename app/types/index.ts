// 末尾にas constを付けることでreadonlyなリテラル型を用意
export const STATUSES = ["pending", "progress", "done"] as const;

// 変数から型を抽出するtypeofを利用
export type Status = (typeof STATUSES)[number];

// Task一つ当たりの型を指定
export interface Task {
  id: number;
  name: string;
  limit: string;
  status: Status;
}

// Statusの表示を文字に変更
export const STATUS_LABELS: Record<Status, string> = {
  pending: "未対応",
  progress: "処理中",
  done: "完了",
};
