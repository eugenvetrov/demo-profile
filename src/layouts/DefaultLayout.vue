<template>
    <main class="main">
      <slot></slot>
    </main>
  </template>
  
<style scoped lang="scss">
    @import "@/assets/styles/variables/colors.scss";
    .main {
        display: flex;
        width: 100%;
        min-height: 100vh;
        background-color: $white;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>