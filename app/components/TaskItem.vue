<template>
  <tr>
    <td>{{ props.task.name }}</td>
    <td>{{ formatDate(props.task.limit) }}</td>
    <td>
      <select :value="props.task.status" @change="onChangeStatus">
        <option v-for="state in STATUSES" :key="state" :value="state">
          {{ STATUS_LABELS[state] }}
        </option>
      </select>
    </td>
    <td>
      <button @click="taskStore.deleteTask(props.task)">
        <img src="~\..\app\assets\images\trash.svg" alt="削除ボタン" />
      </button>
    </td>
  </tr>
</template>
<script setup lang="ts">
import { STATUSES, type Status, type Task, STATUS_LABELS } from "~/types";
import { useTaskStore } from "#imports";
// フォームで親が受け取った値を、propsでさらに受け取る。
const props = defineProps<{ task: Task }>();
const taskStore = useTaskStore();

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

// storeのchangeStatusを呼び出す関数を作成
const onChangeStatus = (event: Event) => {
  const select = event.target as HTMLSelectElement;
  taskStore.changeStatus(props.task.id, select.value as Status);
};
</script>
