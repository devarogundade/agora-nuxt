<template>
<section>
    <div class="app-min2-width">
        <div class="ad">
            <p>Invest in Digital Farming and earn massively with no stress for you.</p>
            <a href="/register">
                <div class="button">Get Started</div>
            </a>
        </div>
    </div>
</section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    background: linear-gradient(to bottom, #ebebeb, #FFF);
    margin-top: -4px;
}

.ad {
    background: #90aeb6;
    border-radius: 20px;
    min-height: 150px;
    width: 100%;
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    background-image: url('/images/leaf.png');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.ad p {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    margin-right: 20px;
}

.ad .button {
    padding: 10px 25px;
    border-radius: 10px;
    background: #002028;
    color: white;
    font-weight: 600;
    font-size: 15px;
    width: max-content;
}

@media screen and (max-width: 800px) {
    section {
        padding: 40px 0;
    }

    .ad {
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;
    }

    .ad p {
        margin-bottom: 10px;
        font-size: 20px;
    }

    .ad .button {
        padding: 8px 20px;
    }

}
</style>
