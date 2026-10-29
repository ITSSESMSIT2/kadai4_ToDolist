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

  return {
    taskId,
    taskArray,
    addTask,
  };
});
