<template>
<section>
    <div class="app-min3-width">
        <h3 class="title">FAQs</h3>
        <div class="faqs">
            <div class="faq">
                <div class="head">
                    <p>What is AgoraLease?</p> <i class="fi fi-rr-arrow-small-right"></i>
                </div>
                <div class="body">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, ab commodi? Nostrum, hic. Nesciunt itaque fugiat quibusdam saepe, aperiam dignissimos modi sunt libero facere. Quam dolores nulla modi cupiditate aspernatur?
                    </p>
                </div>
            </div>
            <div class="faq">
                <div class="head">
                    <p>What is AgoraLease?</p> <i class="fi fi-rr-arrow-small-right"></i>
                </div>
                <div class="body">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, ab commodi? Nostrum, hic. Nesciunt itaque fugiat quibusdam saepe, aperiam dignissimos modi sunt libero facere. Quam dolores nulla modi cupiditate aspernatur?
                    </p>
                </div>
            </div>
            <div class="faq">
                <div class="head">
                    <p>What is AgoraLease?</p> <i class="fi fi-rr-arrow-small-right"></i>
                </div>
                <div class="body">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, ab commodi? Nostrum, hic. Nesciunt itaque fugiat quibusdam saepe, aperiam dignissimos modi sunt libero facere. Quam dolores nulla modi cupiditate aspernatur?
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin: 50px 0;
    user-select: none;
}

.title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 40px;
}

.faqs {
    border-radius: 20px;
    border: 1px #ccc solid;
    overflow: hidden;
}

.head {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;
    font-size: 15px;
}

.body {
    font-size: 15px;
    padding: 20px;
    background: #fafafa;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
}

.faq:last-child .body {
    border-bottom: none;
}
</style>
