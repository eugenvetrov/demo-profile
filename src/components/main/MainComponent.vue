<script setup lang="ts">
    import MainBody from '@/components/main/MainBody.vue'
    import MainContent from '@/components/main/MainContent.vue'
    import MainHeader from '@/components/main/MainHeader.vue'
    import MainSidebar from '@/components/main/MainSidebar.vue'
    import MainWidget from '@/components/main/MainWidget.vue'
    import UserSearch from '@/components/user/UserSearch.vue'
    import UserResult from '@/components/user/result/UserResult.vue'
    import LogoText from '@/components/shared/logo/LogoText.vue'
    import UserText from '@/components/shared/user/UserText.vue'
</script>

<template>
    <MainHeader>
        <LogoText />
        <UserText />
    </MainHeader>
    <MainBody>
        <MainSidebar side="left">
            <MainWidget title="Поиск сотрудников">
                <UserSearch />
            </MainWidget>
            <MainWidget title="Результаты">
                <UserResult />
            </MainWidget>
        </MainSidebar>
        <MainContent />
    </MainBody>
</template>