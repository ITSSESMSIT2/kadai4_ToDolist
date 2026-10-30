<template>
  <h2>新規タスクを追加</h2>
  <form @submit.prevent="submitTask">
    <div>
      <label for="taskNameInput">タスク名<span class="must">必須</span></label>
      <input
        type="text"
        id="taskNameInput"
        v-model="taskName"
        placeholder="例）API設計ドキュメントを書く"
      />
    </div>

    <div>
      <label for="limitInput">期限</label>
      <input type="date" id="limitInput" v-model="taskDate" />
    </div>

    <div>
      <label for="statusInput">ステータス</label>
      <select id="statusInput" v-model="status">
        <!-- ここで選択された値をどこのstoreで管理している？ -->
        <!-- このvalueが結局v-modelに渡す値 -->
        <option v-for="state in STATUSES" :key="state" :value="state">
          {{ formatStatus(state) }}
        </option>
      </select>
    </div>
    <button type="submit">追加</button>
  </form>
</template>

<script setup lang="ts">
import { useTaskStore } from "#imports";
import { STATUSES } from "~/types";
import type { Status } from "~/types";
const taskStore = useTaskStore();
const taskName = ref<string>("");
const toDay = new Date()
  .toLocaleDateString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .replaceAll("/", "-");
const taskDate = ref<string>(toDay);
const status = ref<Status>("pending");
const submitTask = () => {
  if (taskName.value.trim() === "") {
    alert("タスク名は必須です");
    return;
  }
  taskStore.addTask({
    name: taskName.value,
    limit: taskDate.value,
    status: status.value,
  });
  taskName.value = "";
  taskDate.value = toDay;
  status.value = "pending";
};
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
