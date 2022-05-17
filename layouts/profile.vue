<template>
<div>
    <TopBarProfile />
    <Nuxt class="nuxt-app" />
    <BottomBarProfile />
</div>
</template>

<script>
export default {
    middleware: "auth",
};
</script>
