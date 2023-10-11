<template>
    <div class="main__component">
        <slot></slot>
    </div>
</template>

<stile scoped lang="scss">
    @import '@/assets/styles/variables/colors.scss';
    .main {
        &__component {
            display: flex;
            width: 90%;
            height: 100%;
            min-height: 75vh;
            background-color: $white-smoke;
            border: 1px solid $gray87;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba($black, 0.1);
            justify-content: space-between;
            margin: 30px auto;
            @media screen and (max-width: 767px) {
                flex-direction: column;
            }
        }
    }
</stile>