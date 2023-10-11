<script setup lang="ts">
    import { ref } from 'vue'
    import UserResultCard from '@/components/user/result/UserResultCard.vue'
    const results = ref()
</script>

<template>
    <div class="user-result">
        <p class="user-result__text_not-found" v-if="!results">Ничего не найдено</p>
        <UserResultCard />
        <UserResultCard :selected="true"/>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/_colors.scss';
    .user-result {
        color: $dark-gray;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        &__text {
            &_not-found {
                margin: 0;
            }
        }
    }
</style>