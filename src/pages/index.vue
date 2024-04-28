<script setup>
  import "./assets/styles/custom.css"; 
  import UserGreeting from '~/components/UserGreeting.vue';
  import MoodStats from "~/components/MoodStats.vue";
  import MoodChart from "~/components/MoodChart.vue";
</script>

<template> 
  <UserGreeting />
  <MoodStats />
  <div class="max-w-[300px]"><MoodChart /></div>
</template>

<style scoped>
  
</style>
