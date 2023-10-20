<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'

    const showButton = ref(false)

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
       showButton.value = window.scrollY > 300
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    }
</script>

<template>
    <img v-if="showButton"
     src="../../../assets/images/png/up-squared-50.png"
     class="back-to-top__button"
     alt="back to top button"
     @click="scrollToTop" />
</template>

<style scoped lang="scss">
    .back-to-top {

        &__button {
            display: flex;
            position: fixed;
            bottom: 10%;
            right: 10%;
            width: 50px;
            height: 50px;
        }
    }
</style>