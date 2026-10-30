<template>
  <tr>
    <td>{{ props.task.name }}</td>
    <td>{{ formatDate(props.task.limit) }}</td>
    <td>
      <select
        :value="newStatus"
        @change="taskStore.changeStatus(props.task, newStatus)"
      >
        <option v-for="state in STATUSES" :key="state" :value="state">
          {{ formatStatus(state) }}
        </option>
      </select>
    </td>
    <td>
      <button @click="taskStore.deleteTask(props.task)">
        <img
          src="C:\Users\426711_black\202607Udemy研修\work\kadai4_ToDolist\app\assets\images\trash.svg"
          alt="削除ボタン"
        />
      </button>
    </td>
  </tr>
</template>
<script setup lang="ts">
import { STATUSES, type Status, type Task } from "~/types";
import { useTaskStore } from "#imports";
// フォームで親が受け取った値を、propsでさらに受け取る。
const props = defineProps<{ task: Task }>();
const taskStore = useTaskStore();
const newStatus = ref<Status>(props.task.status);

// formatDateは表示用の関数なのでこちらに配置
const formatDate = (element: string): string => {
  if (!element) {
    return "-";
  } else {
    const day = new Date(element);
    const year = day.getFullYear();
    const monthNum = String(day.getMonth() + 1);
    const month = monthNum.padStart(2, "0");
    const dateNum = String(day.getDate());
    const date = dateNum.padStart(2, "0");
    return `${year}/${month}/${date}`;
  }
};
// ステータスの表示用
const formatStatus = (element: Status) => {
  if (element === "pending") {
    return "未対応";
  } else if (element === "progress") {
    return "処理中";
  } else {
    return "完了";
  }
};
</script>
