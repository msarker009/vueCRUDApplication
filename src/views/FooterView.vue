<template>
<div class="footer">
  @{{date}} - Developed By Mehedi Hasan Sarker
</div>
</template>
<script setup lang="ts">
const date = new Date().getFullYear();
</script>
