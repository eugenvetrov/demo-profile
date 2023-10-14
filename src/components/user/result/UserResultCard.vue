<script setup lang="ts">
    import { ref } from 'vue'
    const props = defineProps<{
        selected?: boolean,
        image?: string
    }>()
    const isSelected = ref(props?.selected)
    const imageSrc = ref(props?.image)
    if (!imageSrc.value) {
        imageSrc.value = 'src/assets/images/svg/empty_image_card.svg'
    }
</script>

<template>
    <div class="user-result-card">
        <img :src="imageSrc" class="user-result-card__image" alt="user image"/>
        <div class="user-result-card__text-content" :class="{ 'user-result-card__text-content_selected': isSelected}">
            <p class="user-result-card__text-content_title">title</p>
            <p class="user-result-card__text-content_description">description</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import "@/assets/styles/variables/_colors.scss";
    .user-result-card {
        display: flex;
        width: 100%;
        height: 100%;
        max-width: 241px;
        max-height: 70px;
        border: 1px $gray88 solid;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba($black, 0.1);
        margin-top: 10px;

        @media screen and (max-width: 270px) {
            flex-direction: column;
            max-height: 250px;
            word-wrap: break-word;
            text-overflow: ellipsis;
        }

        &__image {
            display: flex;
            width: 100%;
            height: 100%;
            min-width: 70px;
            min-height: 70px;
            max-width: 70px;
            max-height: 70px;
            aspect-ratio: auto;
            object-fit: contain;
        }

        &__text-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            min-height: 70px;
            border-left: 1px $gray88;

            &_title {
                margin: auto 10px auto 20px;
            }

            &_description {
                margin: auto 10px auto 20px;
            }

            &_selected {
                background-color: $gray88;
            }
        }
    }
</style>