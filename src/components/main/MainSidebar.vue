<script setup lang="ts">
    const props = defineProps({
        side: String
    })
    const { side } = props
    const isLeftSide = side === 'left'
    const isRightSide = side === 'right'
</script>

<template>
    <div
        class="main__sidebar"
        :class="{
            'main__sidebar_left': isLeftSide,
            'main__sidebar_right': isRightSide
        }"
        data-test="main-sidebar"
        >
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
    @import '@/assets/styles/variables/colors.scss';
    .main {
        &__sidebar {
            display: flex;
            flex-direction: column;
            width: 100%;
            border-radius: 10px;
            border: 1px solid $gray87;
            justify-content: start;
            padding: 69px 20px;

            @media screen and (min-width: 768px) {
                width: 40%;
            }

            @media screen and (min-width: 1265px) {
                width: 23%;
            }

            &_left {
                border-radius: 10px 0 0 10px;
                @media screen and (max-width: 767px) {
                    border-radius: 10px;
                }
            }

            &_right {
                border-radius: 0 10px 10px 0;
                @media screen and (max-width: 767px) {
                    border-radius: 10px;
                }
            }
        }
    }
</style>