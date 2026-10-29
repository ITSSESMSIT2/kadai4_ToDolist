<!-- タスク追加用のフォームの機能　STEP2にて実装 -->
<template>
  <h2>新規タスクを追加</h2>
  <div>
    <label for="taskNameInput">タスク名<span class="must">必須</span></label>
    <input type="text" id="taskNameInput" />
    <label for="limitInput">期限</label>
    <input type="date" id="limitInput" />
    <label for="statusInput">ステータス</label>
    <select id="statusInput">
      <option value="pending">未対応</option>
      <option value="progress">処理中</option>
      <option value="done">完了</option>
    </select>
  </div>
</template>
