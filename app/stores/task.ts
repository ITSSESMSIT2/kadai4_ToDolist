import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task, Status } from "~/types";

export const useTaskStore = defineStore("useTaskStore", () => {
  const taskId = ref<number>(1);
  const taskName = ref<string>("");
  const taskDate = ref<Date>();
  const status = ref<Status | null>("pending");
  const taskArray = ref<Task[]>([]);
  const addTask = (task: Task) => {
    taskArray.value.push(task);
    // 削除したときに再登場するけど大丈夫？
    // 何をstoreで管理したら追加と削除がやりやすい？
    // まとめて管理か一つずつ管理かの判断
    taskId.value++;
  };

  return {
    taskId,
    taskName,
    taskDate,
    status,
    taskArray,
    addTask,
  };
});

// storeで管理する項目とそのトリガーを整理
// 入力したそれをすぐ入れる→処理が増える
// inputで入ったものをどこで管理？取り出せるようにしておく
// ↑を取り出して、submitでstoreの
// 初期値やトップの日はいつにする？にも対応できる
