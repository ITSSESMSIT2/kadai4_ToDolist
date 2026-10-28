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

  // elementのidを拾って、そのidの元のstatusを得たい。@changeで変えたい

  // 削除のaction
  const deleteTask = (element: Task) => {
    const equalDeleteId = (e: Task) => {
      e.id === element.id;
    };
    const deleteIndex = taskArray.value.findIndex(equalDeleteId);
    taskArray.value.splice(deleteIndex, 1);
  };

  return {
    taskId,
    taskArray,
    addTask,
    deleteTask,
  };
});
