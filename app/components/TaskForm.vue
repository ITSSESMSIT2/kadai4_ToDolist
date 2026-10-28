<template>
  <h2>新規タスクを追加</h2>
  <form @submit.prevent="resetForm()">
    <div>
      <label for="taskNameInput">タスク名<span class="must">必須</span></label>
      <input
        type="text"
        id="taskNameInput"
        v-model="taskStore.taskName"
        placeholder="例）API設計ドキュメントを書く"
      />
    </div>

    <div>
      <label for="limitInput">期限</label>
      <input type="date" id="limitInput" v-model="taskStore.taskDate" />
    </div>

    <div>
      <label for="statusInput">ステータス</label>
      <select id="statusInput" v-model="taskStore.status">
        <option value="pending">未対応</option>
        <option value="progress">処理中</option>
        <option value="done">完了</option>
      </select>
    </div>
    <button @click="addTask()">追加</button>
  </form>
</template>

<script setup lang="ts">
import { useTaskStore } from "#imports";
import type { Task } from "~/types";
const taskStore = useTaskStore();
const addTask = () => {
  if (taskStore.taskName.trim() !== "") {
    const newTask: Task = {
      id: taskStore.taskId,
      name: taskStore.taskName,
      limit: taskStore.taskDate,
      status: taskStore.status,
    };
    taskStore.taskArray.push(newTask);
    taskStore.taskId++;
  } else {
    alert("タスク名は必須です");
  }
};
const resetForm = () => {
  taskStore.taskName = "";
  taskStore.taskDate = "";
  taskStore.status = "pending";
};
</script>
