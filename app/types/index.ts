export type Status = "pending" | "progress" | "done";
// ↑これをタイプとして扱う必要がある

// ①配列自体をタイプにする→増減するなら。動的に変わる場合。例）その配列を別で管理していたり…柔軟
// ②UNION形でこれこれこれを宣言→絶対変更されない。見やすさ、降順昇順とか選択肢が少なくて固定になる値に使いがち
// 書き方の違いがあるだけで、配列で持っていたとしてもやることはUNION形だったり→配列からUNION形を作る感じ

export interface Task {
  id: number;
  name: string;
  limit: string;
  status: Status | null;
}
