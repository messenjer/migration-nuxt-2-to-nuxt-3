<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <AppLogo />

  Current route: {{ route.path }}
</template>
