import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task, Status } from "~/types";

export const useTaskStore = defineStore("useTaskStore", () => {
  const taskId = ref<number>(0);
  const taskName = ref<string>("");
  const taskDate = ref<string>("");
  const status = ref<Status>("pending");
  const taskArray = ref<Task[]>([]);
  const addTask = () => {
    if (taskName.value.trim() !== "") {
      const newTask: Task = {
        id: taskId.value,
        name: taskName.value,
        limit: taskDate.value,
        status: status.value,
      };
      taskArray.value.push(newTask);
      taskId.value++;
    } else {
      alert("タスク名は必須です");
    }
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
