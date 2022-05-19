<template>
<section>
    <p class="message">{{ 'Type ' + message + ' to confirm' }}</p>
    <input type="text" :class="error ? 'error' : ''" placeholder="Type here" v-model="text">
    <div class="button" v-on:click="confirm()">Confirm</div>
</section>
</template>

<script>
export default {
    props: ['message'],

    data() {
        return {
            error: false,
            text: ''
        }
    },

    methods: {
        confirm() {
            this.error = false
            if (this.text != this.message) {
                this.error = true
                return
            }

            this.$emit('confirm')
        }
    }
}
</script>

<style scoped>
section {
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
    color: #000;
    font-size: 16px;
    text-align: center;
}

input {
    outline: none;
    background: #ffffff;
    border-radius: 4px;
    margin-top: 10px;
    width: 100%;
    padding: 6px;
    border: #ccc 1px solid;
}

.error {
    border: rgb(255, 158, 158) 1px solid;
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
