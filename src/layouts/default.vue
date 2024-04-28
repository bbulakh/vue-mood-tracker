<template>
    <div class="px-5 py-5 h-screen"><NuxtPage></NuxtPage></div>
    <v-layout class="overflow-visible" style="height: 46px;">
    <v-bottom-navigation
      v-model="value"
      :bg-color="red"
      mode="shift"
    >
      <v-btn>
        <v-icon>mdi-television-play</v-icon>

        <span>Video</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-music-note</v-icon>

        <span>Music</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-book</v-icon>

        <span>Book</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-image</v-icon>

        <span>Image</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script>
    import "./assets/styles/custom.css"; 
</script>