<template>
<section>
    <div class="app-min2-width">
        <h3 class="title">Farm Guide</h3>
        <p class="desc">Let's help you find the right tools for your farm on our platform.</p>
    </div>
</section>
</template>

<script>
export default {
    layout: 'landing'
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 45px;
    font-weight: 500;
    text-align: center;
    color: #27272a;
    margin-top: 30px;
}

.desc {
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
    max-width: 100%;
}

@media screen and (max-width: 700px) {
    .title {
        font-size: 30px;
    }

    .desc {
      font-size: 15px;
    }
}
</style>
