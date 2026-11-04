import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task, Status } from "~/types";

export const useTaskStore = defineStore("useTaskStore", () => {
  const taskId = ref<number>(1);
  const taskArray = ref<Task[]>([]);
  const addTask = (task: Omit<Task, "id">) => {
    taskArray.value.push({ ...task, id: taskId.value });
    taskId.value++;
  };

  // 更新のaction
  const changeStatus = (id: number, newStatus: Status) => {
    const target = taskArray.value.find((e) => e.id === id);
    if (!target) {
      return;
    } else {
      target.status = newStatus;
    }
  };

  // 削除のaction
  const deleteTask = (element: Task) => {
    const equalDeleteId = (e: Task) => {
      return e.id === element.id;
    };
    const deleteIndex = taskArray.value.findIndex(equalDeleteId);
    if (deleteIndex === -1) {
      return;
    } else {
      taskArray.value.splice(deleteIndex, 1);
    }
  };

  return {
    taskId,
    taskArray,
    addTask,
    changeStatus,
    deleteTask,
  };
});
