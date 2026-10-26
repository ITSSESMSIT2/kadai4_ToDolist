<template>
  <h2>/tasksのページです</h2>
  <div class="form">
    <h2>新規タスクを追加</h2>
  </div>
  <div class="tasks">
    <h2>タスク一覧</h2>
    <table>
      <thead>
        <th>タスク名</th>
        <th>期限</th>
        <th>ステータス</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="task in useTask.tasksArray">
          <td>{{ task.name }}</td>
          <td>{{ task.limit }}</td>
          <td>{{ task.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { useTaskStore } from "~/stores/task";
const useTask = useTaskStore();
</script>
