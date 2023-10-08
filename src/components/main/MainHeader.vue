<template>
    <header class="main__header">
        <slot></slot>
    </header>
</template>

<style sccoped lang="scss">
    .main {
        &__header {
            display: flex;
            width: 90%;
            height: auto;
            min-height: 39px;
            margin-top: 46px;
            justify-content: space-between;
            align-items: center;

            @media screen and (max-width: 295px) {
                flex-direction: column;
            }
        }
    }
</style>