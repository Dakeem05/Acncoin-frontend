<script setup>
</script>

<template>
  <div class="font-quantico">
     <router-view></router-view>
  </div>
</template>

<style scoped>
   ::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #bd8f31;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #bd8f31;
  border-radius: 4px;
}
</style>
