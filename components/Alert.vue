<template>
<div class="section">
    <p class="message">{{ message ? message : 'No message passed' }}</p>
    <div class="button" v-on:click="$emit('exit')">Close</div>
</div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style scoped>
.section {
    width: 300px;
    max-width: 100%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    z-index: 100;
    padding: 20px;
    background: #e6fcf3;
}

p {
    color: #27272a;
    font-size: 16px;
    text-align: center;
    width: 100%;
}

.button {
    background: blue;
    color: #ffffff;
    padding: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    user-select: none;
    text-align: center;
    border-radius: 12px;
    margin-top: 10px;
}
</style>
