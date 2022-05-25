<template>
<div>
    <TopBar />
    <Nuxt class="nuxt-app" />
    <BottomBar />
</div>
</template>

<script>
export default {
    middleware: "auth",
};
</script>
