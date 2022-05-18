<template>
<section>
    <div class="app-min-width">
        <h3 class="title">My Offers</h3>

        <UserOffers />
    </div>
</section>
</template>

<script>
export default {
    layout: "profile"
}
</script>

<style scoped>
section {
    display: flex;
    padding: 50px 0;
    align-items: center;
    flex-direction: column;
}

.title {
    text-align: center;
    font-size: 40px;
    color: #ffffff;
}
</style>
