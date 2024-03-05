<template>
  <div>
    <p>Redirecting...</p>
  </div>
</template>
<script setup>
onMounted(() => {
  location.href = 'https://old-070ry.pages.dev/hp';
});
</script>
<style lang="scss">
.size,
.warn {
  visibility: hidden !important;
}
body {
  background-color: #040616;
  color: white;
  text-align: center;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.7);
  }
  a {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, 300%);
    background-color: #6464643a !important;
    border-radius: 16px !important;
    padding: 8px !important;
    font-size: 20px !important;
    color: white;
  }
  a:hover {
    background-color: #6464648e !important;
    outline: 4px solid rgba(245, 60, 174, 0.6) !important;
  }
  a:active {
    outline: 4px solid rgb(255, 67, 161);
  }
}
</style>
