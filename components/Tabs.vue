<template>
<section>
    <div class="tabs">
        <div class="item">
            <i class="fi fi-rr-apps"></i>
            <p>Lands</p>
            <div class="indicator"></div>
        </div>

        <div class="item">
            <i class="fi fi-rr-clock"></i>
            <p>Machineries</p>
            <!-- <div class="indicator"></div> -->
        </div>

        <div class="item">
            <i class="fi fi-rr-clock"></i>
            <p>IoTs</p>
            <!-- <div class="indicator"></div> -->
        </div>
    </div>
</section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    border-bottom: 1px #003543 solid;
}

.tabs {
    display: flex;
    align-items: center;
    justify-content: center;
}

.tabs .item {
    padding: 0 20px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    user-select: none;
    cursor: pointer;
    color: white;
}

.tabs i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tabs .item p {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 500;
}

.tabs .indicator {
    height: 5px;
    width: 100%;
    background: #003543;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    bottom: 0;
}
</style>
