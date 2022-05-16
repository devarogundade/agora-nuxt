<template>
<div>
    <TopBarProfile />
    <Nuxt />
    <BottomBarProfile />
</div>
</template>

<script>
export default {
    middleware: "auth",
};
</script>
