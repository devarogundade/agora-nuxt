<template>
<div class="loading">
    <div class="lds-dual-ring"></div>
    <p>{{ message ? message : 'Loading' }}</p>
</div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style scoped>
.loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    width: fit-content;
    transform: translate(-50%, -50%);
    padding: 20px 30px;
    background: rgba(0, 0, 0, 0.295);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    height: 100px;
    border: 1px solid #ffffff20;
}

.lds-dual-ring {
    display: inline-block;
    width: 20px;
    height: 20px;
}

.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    margin-left: -6px;
}

p {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
