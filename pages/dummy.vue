<template>
  <main>
    <NuxtLink class="d1">dummy button</NuxtLink>
    <NuxtLink class="d2">dummy button2</NuxtLink>
  </main>
</template>
<style scoped>
body {
  background: black !important;
}
a.d1 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  padding: 40px 120px;
  user-select: none;
  cursor: pointer;
}
a.d2 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 160px;
  padding: 10px 20px;
  user-select: none;
  cursor: pointer;
}
</style>
