<template>
  <div>
    <div class="debug">{{ size.width }} x {{ size.height }}</div>
    <div class="warn" id="warn">
      <p>Your browser window size is too small. Some designs may be broken. <strong>Recommended size is >480x320</strong></p>
      <button class="warn-button" ref="cfa">Ok! nevermind!</button>
    </div>
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
