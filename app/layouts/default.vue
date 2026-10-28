<!-- PR1: このヘッダーを app/layouts/default.vue に移し、両ページで共通に使う -->
<template>
  <div>
    <header class="header">
      <h1 class="title">進捗管理ボード</h1>
      <nav class="nav">
        <NuxtLink to="/">トップ</NuxtLink>
        <NuxtLink to="/tasks">タスク一覧</NuxtLink>
      </nav>
    </header>
    <slot />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 var(--space-xl);
  background: var(--primary);
}

.title {
  margin: 0;
  color: var(--surface);
  font-size: 19px;
}
.nav {
  display: flex;
  gap: var(--space-md);
  margin-left: auto;
}
.nav a {
  color: var(--surface);
}
</style>
