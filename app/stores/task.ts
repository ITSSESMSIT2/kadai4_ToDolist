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

  const changeStatus = (oldElement: Task, newStatus: Status) => {
    const equalChangeId = (e: Task) => {
      return e.id === oldElement.id;
    };
    const changeIndex = taskArray.value.findIndex(equalChangeId);
    if (!taskArray.value[changeIndex]) {
      return;
    } else {
      taskArray.value[changeIndex].status = newStatus;
    }
  };

  // 削除のaction
  const deleteTask = (element: Task) => {
    const equalDeleteId = (e: Task) => {
      return e.id === element.id;
    };
    const deleteIndex = taskArray.value.findIndex(equalDeleteId);
    taskArray.value.splice(deleteIndex, 1);
  };

  return {
    taskId,
    taskArray,
    addTask,
    changeStatus,
    deleteTask,
  };
});
