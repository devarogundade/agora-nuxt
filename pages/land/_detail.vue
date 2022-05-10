<template>
<div>
    <section>
        <div class="app-min-width">
            <a href="/land">
                <div class="back">
                    <i class="fi fi-rr-arrow-small-left"></i>
                    <p>Back to lands</p>
                </div>
            </a>
        </div>
    </section>
</div>
</template>

<script>
export default {
    layout: "landing",
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.back {
    display: grid;
    grid-template-columns: 35px auto;
    height: 35px;
    border-radius: 10px;
    background: #003543;
    overflow: hidden;
    width: fit-content;
    color: #ffffff;
}

.back i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00c675;
}

.back p {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 10px;
    font-size: 14px;
    font-weight: 400;
}
</style>
