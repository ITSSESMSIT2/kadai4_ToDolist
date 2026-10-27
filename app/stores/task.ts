import { defineStore } from "pinia";
import { ref } from "vue";
import type { Task, Status } from "~/types";

export const useTaskStore = defineStore("useTaskStore", () => {
  const taskName = ref<string>("");
  const limitDate = (element: string): string => {
    const day = new Date(element);
    const year = day.getFullYear();
    const monthNum = String(day.getMonth() + 1);
    const month = monthNum.padStart(2, "0");
    const dateNum = String(day.getDate());
    const date = dateNum.padStart(2, "0");
    return `${year}/${month}/${date}`;
  };
  const status = ref<Status | null>("pending");
  const taskArray = ref<Task[]>([
    // { name: "サンプル", limit: "2026-10-28", status: "pending" },
    // { name: "水やり", limit: "2028-11-14", status: "done" },
  ]);

  return {
    taskName,
    limitDate,
    status,
    taskArray,
  };
});
