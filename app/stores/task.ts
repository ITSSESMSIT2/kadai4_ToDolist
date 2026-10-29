import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task } from "~/types";

export const useTaskStore = defineStore("useTaskStore", () => {
  const taskId = ref<number>(0);
  const taskArray = ref<Task[]>([]);
  const addTask = (task: Omit<Task, "id">) => {
    taskArray.value.push({ ...task, id: taskId.value });
    taskId.value++;
  };

  // 更新のaction

  const changeStatus = (element: Task) => {
    const equalChangeId = (e: Task) => {
      return e.id === element.id;
    };
    const changeIndex = taskArray.value.findIndex(equalChangeId);
    // 上記までで変えたい要素のインデックスまで拾えている
    console.log(changeIndex);
    // taskArray[changeIndex].value.task.status = element.status;
  };

  // 削除のaction
  // elementの中に入るのはprops.task→クリックされたタスク
  const deleteTask = (element: Task) => {
    const equalDeleteId = (e: Task) => {
      return e.id === element.id;
    };
    const deleteIndex = taskArray.value.findIndex(equalDeleteId);
    taskArray.value.splice(deleteIndex, 1);
  };
  // 今回は元の配列を破壊して問題ないのでsplice?

  return {
    taskId,
    taskArray,
    addTask,
    deleteTask,
  };
});
