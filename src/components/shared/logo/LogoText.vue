<template>
    <span class="logo__text" data-test="shared-logo-text">Жилфонд</span>
</template>

<style scoped lang="scss">
    @import "@/assets/styles/variables/_colors.scss";
    .logo {
        &__text {
            color: $akira-red;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            @media screen and (max-width: 173px) {
                font-size: 16px;
            }
        }
    }
</style>