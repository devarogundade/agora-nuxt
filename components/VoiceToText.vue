<template>
<section>
    <div class="voice-to-text">
        <p>I'm listening..</p>
        <div class="input">
            <input type="text" placeholder="Text" v-model="text" id="" />
            <div class="button">Search</div>
        </div>
        <i class="fi fi-rr-cross" v-on:click="$emit('exit')"></i>
    </div>
</section>
</template>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: #000000ee;
    width: 100%;
    height: 100vh;
    z-index: 30;
    top: 0;
    left: 0;
}

.input {
    display: grid;
    grid-template-columns: 220px 80px;
    column-gap: 10px;
    align-items: center;
    margin-top: 10px;
}

input {
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
}

p {
    font-size: 24px;
}

.voice-to-text {
    color: white;
    text-align: center;
}

.button {
    background: #00c675;
    color: #000;
    padding: 5px 15px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
}

.voice-to-text i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    background: #ffffff;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    right: 40px;
}
</style>
