<template>
  <h2>新規タスクを追加</h2>
  <form>
    <div>
      <label for="taskNameInput">タスク名<span class="must">必須</span></label>
      <input type="text" v-model="taskStore.taskName" id="taskNameInput" />
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
    <button @submit="taskStore.addTask()">ボタン</button>
  </form>
</template>

<script setup lang="ts">
import { useTaskStore } from "#imports";
import type { Status, Task } from "~/types";
const taskStore = useTaskStore();
// ユーザーの入力値をTask型にできる関数を作成する→コンストラクタ関数？
const inputTask = (id: number, name: string, limit: string, status: Status) => {
  this.id = id;
  this.name = name;
  this.limit = limit;
  this.status = status;
};
const newTask = new inputTask(
  taskStore.taskId,
  taskStore.taskName,
  taskStore.taskDate,
  taskStore.status,
);
</script>
