<script setup lang="ts">
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import { mainStoreKey } from '../../../stores/main'
    import UserResultCard from '@/components/user/result/UserResultCard.vue'
    import SpinnerLdsFacebook from '@/components/shared/spinner/SpinnerLdsFacebook.vue'

    const mainStore = useStore(mainStoreKey)
    await mainStore.dispatch('fetchUserData')
    const userData = computed(() => mainStore.state.userData)
    const results = computed(() => userData.value?.length)
    const selectedUsers = computed(() => mainStore.state.selectedUsers)
    const selectUser = (user: IUser) => {        
        mainStore.commit('selectUser', user)
    }
    const userLoading = computed(() => mainStore.state.userLoading)
    const isUserSelected = (user: IUser) => selectedUsers.value.find((selectedUser) => selectedUser.id === user.id)
</script>

<template>
    <div class="user-result">
        <SpinnerLdsFacebook v-if="userLoading" class="user-result__spinner" />
        <p class="user-result__text_not-found" v-if="!results">Ничего не найдено</p>
        <UserResultCard v-for="user in userData"
            :key="user.id"
            :userId = "user.id"
            :userName = "user.name"
            :userEmail = "user.email"
            @click="selectUser(user)"
            :class="isUserSelected(user) ? 'user-result__card_selected' : ''"
            />
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/_colors.scss';
    .user-result {
        color: $dark-gray;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        outline: none;
        position: relative;

        &__text {
            &_not-found {
                margin: 0;
            }
        }

        &__card {
            &_selected {
                background-color: $gray88;
            }
        }

        &__spinner {
            position: absolute;
            top: -48px;
            right: 0;
        }
    }
</style>