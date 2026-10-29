<template>
  <h2>タスク一覧</h2>
  <template v-if="taskStore.taskArray.length === 0">
    <h3>タスクがありません</h3>
  </template>
  <template v-else>
    <table>
      <thead>
        <tr>
          <th>タスク名</th>
          <th>期限</th>
          <th>ステータス</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <TaskItem
          v-for="task in taskStore.taskArray"
          :key="task.id"
          :task="task"
        />
      </tbody>
    </table>
  </template>
</template>

<script setup lang="ts">
import { useTaskStore } from "~/stores/task";
const taskStore = useTaskStore();
</script>
