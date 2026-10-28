import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task, Status } from "~/types";

export const useTaskStore = defineStore("useTaskStore", () => {
  const taskId = ref<number>(0);
  const taskName = ref<string>("");
  const taskDate = ref<string>("");
  const status = ref<Status>("pending");
  const taskArray = ref<Task[]>([]);

  return {
    taskId,
    taskName,
    taskDate,
    status,
    taskArray,
  };
});
