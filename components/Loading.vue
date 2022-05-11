<template>
<div class="loading">
    <div class="lds-dual-ring"></div>
    <p>{{ message + '..' }}</p>
</div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style scoped>
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
}

.loading {
  display: grid;
  grid-template-columns: 20px auto;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: fit-content;
  max-width: calc(100% - 80px);
  padding: 8px 10px;
  border-radius: 4px;
}

p {
  margin-left: 20px;
  margin-top: 10px;
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
