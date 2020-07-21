<template>
    <div class="layout">
        <div class="header">头部</div>
        <div class="main-container">
            <router-view class="container" />
        </div>
        <div>尾部</div>
    </div>
</template>

<script>
    export default {
        name: "layout.vue"
    }
</script>

<style lang="scss" scoped>
    .layout {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        .main-container {
            flex: 1;
        }
    }
</style>
