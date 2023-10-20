<script setup lang="ts">
    defineProps({
        title: String
    })
</script>

<template>
    <div class="main-widget">
        <p class="main-widget__title">{{ title }}</p>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    .main-widget {
        display: flex;
        flex-direction: column;
        margin: 0 20px 20px 20px;
        outline: none;
        &__title {
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            margin-top: 0;
        }
    }
</style>