<template>
<section>
    <div class="head">
        <i class="fi fi-rr-cross" v-on:click="$emit('exit')"></i>
        <p>Offer Timeline</p>
    </div>
    <div class="body">
        <div class="line">
            <div class="progress">
            </div>
        </div>
        <i class="fi fi-rr-check"></i>

        <div class="steps">
            <p>Offer accepted</p>
            <p>{{ offer.user.name }} has successfully pass verification process</p>
            <p>{{ offer.user.name }} now has access to utilize the {{ offer.asset.type }} located at {{ offer.asset.location }}</p>
            <p>This offer will end at {{ offer.expires_at }}</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: ['offer']
}
</script>

<style scoped>
section {
    position: fixed;
    height: calc(100% - 40px);
    right: 20px;
    top: 20px;
    width: 400px;
    max-width: calc(100% - 40px);
    border: 1px solid #ccc;
    z-index: 10;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #000;

    padding: 0 !important;
}

.head {
    display: grid;
    grid-template-columns: 40px auto 40px;
    height: 55px;
    border-bottom: 1px solid #ccc;
    width: 100%;
    align-items: center;
    padding: 0 20px;
}

.head p {
    text-align: center;
}

.head i {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.line {
    height: 500px;
    position: absolute;
    width: 6px;
    border-radius: 200px;
    background: #ccc;
    left: 20px;
    top: 75px;
    overflow: hidden;
}

.line .progress {
    width: 100%;
    height: 66%;
    border-radius: 200px;
    background: blue;
}

.body i {
    background: blue;
    width: 24px;
    height: 24px;
    border-radius: 200px;
    color: #fff;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 12px;
    top: 390px;
    z-index: 10;
}

.steps {
    padding: 20px 40px;
    height: 540px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.steps p {
    font-size: 14px;
    line-height: 16px;
}
</style>
