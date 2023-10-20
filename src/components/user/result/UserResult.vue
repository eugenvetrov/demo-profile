<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import { mainStoreKey } from '../../../stores/main'
    import UserResultCard from '@/components/user/result/UserResultCard.vue'

    const results = ref()
    const store = useStore(mainStoreKey)
    await store.dispatch('fetchUserData')
    const userData = computed(() => store.state.userData)
    const selectedUser = computed(() => store.state.selectedUser)
    const selectUser = (user: IUser) => {        
        store.commit('selectUser', user)
    }
</script>

<template>
    <div class="user-result">
        <p class="user-result__text_not-found" v-if="!results">Ничего не найдено</p>
        <UserResultCard v-for="user in userData"
            :key="user.id"
            :userId = "user.id"
            :userName = "user.name"
            :userEmail = "user.email"
            @click="selectUser(user)"
            :class="selectedUser?.id === user.id ? 'user-result__card_selected' : ''"
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
    }
</style>