<template>
    <span class="user__text" data-test="shared-user-text">Пользователь</span>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/_colors.scss';
    .user {
        &__text {
            color: $dark-charcoal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
        }
    }
</style>