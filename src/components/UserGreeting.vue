<script setup>
  let userName = ref("Bogdan");
  import "./assets/styles/custom.css"; 
</script>

<template>
  <h1 class="text-2xl font-bold">Hello, {{ userName }}!</h1>
  <p>How is your day?</p>
</template>

<style>
</style>