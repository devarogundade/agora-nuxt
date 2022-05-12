<template>
<div>
    <TopBarProfile />
    <Nuxt />
</div>
</template>

<script>
export default {
    middleware: "auth",
};
</script>
