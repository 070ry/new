<template>
  <div>
    <div class="size">{{ size.width }} x {{ size.height }}</div>
    <header>
      <nav>
        <img src="/assets/images/gorila.svg" width="32px" />
      </nav>
    </header>
    <NuxtPage />
    <footer><NuxtLink to="https://old-070ry.pages.dev/">Old page</NuxtLink></footer>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';

const size = reactive({ width: 0, height: 0 });
onMounted(() => {
  getWindowSize();
  window.addEventListener('resize', getWindowSize);
});

function getWindowSize() {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
}
</script>
