import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task, Status } from "~/types";

export const useTaskStore = defineStore("useTaskStore", () => {
  const taskId = ref<number>(1);
  const taskName = ref<string>("");
  const status = ref<Status | null>("pending");
  const taskArray = ref<Task[]>([
    // { id:1, name: "サンプル", limit: "2026-10-28", status: "pending" },
    // { id:2, name: "水やり", limit: "2028-11-14", status: "done" },
  ]);

  return {
    taskId,
    taskName,
    status,
    taskArray,
  };
});
