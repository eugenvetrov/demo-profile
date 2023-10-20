<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { useStore } from 'vuex'
    import { mainStoreKey } from '../../stores/main'

    const searchField = ref('')
    const store = useStore(mainStoreKey)
    watch (searchField, async (newValue) => {
        await store.dispatch('fetchUserData', newValue)
    })
</script>

<template>
    <div class="user-search__container">
        <input v-model="searchField"
         name="user-search-field"
         class="user-search__input"
         placeholder="Введите id или имя"/>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/_colors.scss';
    .user-search {
        &__container {
            display: flex;
            width: 100%;
            height: 100%;
        }
        &__input {
            width: 100%;
            max-width: 240px;
            height: 100%;
            max-height: 46px;
            min-height: 46px;
            display: flex;
            border: 1.5px $medium-gray;
            border-radius: 8px;
            padding: 0 16px;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: $dark-gray;
            text-overflow: ellipsis;

            &:focus {
                border: 1.5px $medium-gray;
            }
        }
    }
</style>