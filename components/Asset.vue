<template>
<div class="item">
    <div class="image">
        <img v-if="asset.images.length > 0" :src="asset.images[0].url" alt="">
        <img v-else src="/images/land.png" alt="">
    </div>
    <div class="content">
        <h3 class="ellipsis">{{ asset.location }}</h3>
        <p class="state">{{ asset.state }}</p>

        <p class="price">₦{{ asset.price }} / 24hr</p>

        <ul>
            <li>
                <i class="fi fi-rr-clock"></i>
                <p class="single">{{ asset.occupied }} plots on lease</p>
                <div :style="'width: ' + (asset.occupied / asset.unit) * 100 + '%;'" class="progress"></div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: ['asset']
}
</script>

<style scoped>
.item {
    border: 1px #ccc solid;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
}

.image {
    width: 100%;
    height: 250px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    text-align: center;
    color: #000;
    margin-top: 10px;
}

.content h3 {
    font-size: 16px;
    height: 50px;
    font-weight: 500;
    margin: 0 10px;
}

.content .state {
    font-size: 12px;
    color: #00303c;
    margin: 10px;
}

.content ul {
    margin-top: 10px;
}

.content li {
    display: grid;
    grid-template-columns: 40px auto;
    height: 45px;
    box-shadow: 0 0 10px #ccc;
    position: relative;
    overflow: hidden;
}

.content .progress {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: #4577ff;
}

.content li i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.content li p {
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
}

.price {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10px;
    background: rgba(0, 0, 0, 0.3);
    padding: 2px 10px;
    border-radius: 10px;
    font-size: 14px;
    color: white;
}
</style>
