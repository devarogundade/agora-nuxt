<template>
<section>
    <div class="app-min3-width">
        <h3>In Partnership with</h3>
        <div class="images">
            <img src="/images/cat.png" alt="CAT">
            <img src="/images/case-ih.png" alt="Case IH">
            <img src="/images/john-deere.png" alt="John Deere">
        </div>
    </div>
</section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin: 40px 0;
}

h3 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
}

.images {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

img {
    height: 60px;
}
</style>
