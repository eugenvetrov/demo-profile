<script setup lang="ts">
    import UserResultDetail from '@/components/user/result/UserResultDetail.vue'
    import BackToTopButton from '@/components/shared/back-to-top/BackToTopButton.vue'

    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import { mainStoreKey } from '../../stores/main'
    const mainStore = useStore(mainStoreKey)
    const selectedUser = computed(() => mainStore.state.selectedUser)
</script>

<template>
    <div class="main-content">
        <p v-if="!selectedUser" class="main-content__text_select-employee">Выберите сотрудника, чтобы посмотреть его профиль</p>
        <UserResultDetail v-else />
        <BackToTopButton />
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/_colors.scss';
    .main-content {
        display: flex;
        width: 100%;
        padding: 27px 0;
        flex-direction: column;
        @media screen and (max-width: 767px) {
                flex-direction: column;
        }
        &__text {
            &_select-employee {
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: $dark-gray;
            }
        }
    }
</style>