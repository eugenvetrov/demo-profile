<script setup lang="ts">
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import { mainStoreKey } from '../../../stores/main'

    const mainStore = useStore(mainStoreKey)
    const selectedUser = computed(() => mainStore.state.selectedUser)
</script>

<template>
    <div class="user-result-detail">
        <img class="user-result-detail__image_profile" src="@/assets/images/svg/empty_image.svg" alt="empty image" />
        <div class="user-result-detail__content">
            <p class="user-result-detail__content-title">{{ selectedUser?.name }}</p>
            <p class="user-result-detail__content-text">
                <span class="user-result-detail__content-subtitle">email: </span>{{ selectedUser?.email }}</p>
            <p class="user-result-detail__content-text">
                <span class="user-result-detail__content-subtitle">phone: </span>{{ selectedUser?.phone }}</p>
            <p v-if="selectedUser?.about" class="user-result-detail__content-title">О себе:</p>
            <p v-if="selectedUser?.about" class="user-result-detail__content-text">about content</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .user-result-detail {
        display: flex;
        max-width: 924px;
        height: auto;
        margin: 0 20px 20px 20px;
        flex-wrap: wrap;
        align-items: flex-start;
        &__image {
            &_profile {
                width: 46%;
                height: auto;
                max-width: 424px;
                max-height: 286px;
                aspect-ratio: auto;
                object-fit: contain;
                margin-bottom: 20px;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            margin-left: 10%;
            @media screen and (max-width: 200px) {
                word-break: break-all;
            }
            &-title {
                font-size: 16px;
                font-weight: 600;
                line-height: 22px;
                margin-top: 0;
            }
        }
    }
</style>