<script setup lang="ts">
    import { ref, watch, computed } from 'vue';
    import { useStore } from 'vuex'
    import { mainStoreKey } from '../../stores/main'

    const searchField = ref('')
    const store = useStore(mainStoreKey)
    watch (searchField, async (newValue) => {
        await store.dispatch('fetchUserData', newValue)
    })
    const errorMessage = computed(() => store.state.errorMessage)
</script>

<template>
    <div class="user-search__container">
        <input v-model="searchField"
               name="user-search-field"
               class="user-search__input"
               placeholder="Введите id или имя"/>
         <p class="user-search__error">{{ errorMessage }}</p>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/_colors.scss';
    .user-search {
        &__container {
            display: flex;
            width: 100%;
            height: 100%;
            flex-wrap: wrap;
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

        &__error {
            width: 100%;
            font-size: 12px;
            line-height: 16px;
            color: $akira-red;
            margin-left: 16px;
        }
    }
</style>