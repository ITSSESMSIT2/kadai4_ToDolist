import { defineStore } from "pinia";
import { ref } from "vue";
import type { task, status } from "~/types";

export const useTaskStore = defineStore("useTaskStore", () => {
  const taskName = ref<string>("");
  const limitDate: string = () => {
    const day = new Date();
    const year = day.getFullYear();
    const monthNum = String(day.getMonth() + 1);
    const month = monthNum.padStart(2, "0");
    const dateNum = String(day.getDate());
    const date = dateNum.padStart(2, "0");
    return `${year}/${month}/${date}`;
  };
  const status = ref<status | null>("pending");

  const tasksArray = ref<task[]>([]);

  const addTask = () => {
    const taskValue = {
      name: taskName.value,
      limit: limitDate,
      status: status.value,
    };
    tasksArray.value.push(taskValue);
    return tasksArray.value;
  };

  return {
    taskName,
    limitDate,
    status,
    tasksArray,
    addTask,
  };
});

// 見た目と削除を一緒
// 見た目、操作の二種類に分ける
// 機能として→タスク管理UI表示、操作は同じ意図
// idとセレクトボタンで管理する→並べ替えの時には楽（日本語のソートは設定が面倒）
// stringで幅がでかくなりすぎる→三パターンだけで制限を強くすることでほかの値が入るようなエラーを防ぐ。
// どちらもあり得る形ではある。
