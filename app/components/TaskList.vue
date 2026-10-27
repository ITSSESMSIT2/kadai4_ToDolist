<template>
  <h2>タスク一覧</h2>
  <template v-if="useTask.taskArray.length === 0">
    <h3>タスクがありません</h3>
  </template>
  <template v-else>
    <table>
      <thead>
        <th>タスク名</th>
        <th>期限</th>
        <th>ステータス</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="task in useTask.taskArray">
          <td>{{ task.name }}</td>
          <td>{{ useTask.limitDate(task.limit) }}</td>
          <td>{{ task.status }}</td>
        </tr>
      </tbody>
    </table>
  </template>
</template>
<script setup lang="ts">
import { useTaskStore } from "#imports";
const useTask = useTaskStore();
</script>
