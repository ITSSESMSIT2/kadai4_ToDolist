<template>
  <tr>
    <td>{{ props.task.name }}</td>
    <td>{{ formatDate(props.task.limit) }}</td>
    <td>{{ formatStatus(props.task.status) }}</td>
  </tr>
</template>
<script setup lang="ts">
import type { Status, Task } from "~/types";
// フォームで親が受け取った値を、propsでさらに受け取る。
const props = defineProps<{ task: Task }>();

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
