<script setup lang="ts">
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import { mainStoreKey } from '../../../stores/main'
    import UserResultDetail from '../result/UserResultDetail.vue'

    const mainStore = useStore(mainStoreKey)
    const selectedUsers = computed(() => mainStore.state.selectedUsers)
</script>

<template>
    <div class="user-content">
        <p v-if="!selectedUsers.length" class="user-content__text_select-employee">Выберите сотрудника, чтобы посмотреть его профиль</p>
        <UserResultDetail v-else />
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/_colors.scss';
    .user-content {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 27px 0;
        flex-direction: column;
        @media screen and (max-width: 767px) {
                flex-direction: column;
        }
        &__text {
            &_select-employee {
                display: flex;
                height: 100%;
                min-height: 80vh;
                justify-content: center;
                margin-left: 20px;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: $dark-gray;

                @media screen and (max-width: 767px) {
                    min-height: 100%;
                }
            }
        }
    }
</style>