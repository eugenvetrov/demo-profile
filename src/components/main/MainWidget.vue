<script setup lang="ts">
    defineProps({
        title: String
    })
</script>

<template>
    <div>
        <p class="main-widget__title">{{ title }}</p>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    .main-widget {
        &__title {
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
        }
    }
</style>