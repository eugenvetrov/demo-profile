<template>
    <div class="main-content">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/_colors.scss';
    .main-content {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>