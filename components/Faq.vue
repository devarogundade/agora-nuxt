<template>
<section>
    <div class="app-min3-width">
        <h3 class="title">FAQs</h3>
        <div class="faqs">
            <div class="faq">
                <a href="https://dev-arogundade.gitbook.io/agoralease/" target="_blank">
                    <div class="head">
                        <p>What is AgoraLease?</p> <i class="fi fi-rr-arrow-small-right"></i>
                    </div>
                </a>
                <div class="body">
                    <p>
                        We are building a platform that helps farmers to have access to farm machines, IoTs, lands and other farm requirements in a very affordable way by renting for a certain period of time instead of buying them, and also creating an investment platform for leasors or institutions.
                    </p>
                </div>
            </div>
            <div class="faq">
                <a href="https://dev-arogundade.gitbook.io/agoralease/" target="_blank">
                    <div class="head">
                        <p>How safe am I?</p> <i class="fi fi-rr-arrow-small-right"></i>
                    </div>
                </a>
                <div class="body">
                    <p>
                        The AgoraLease Team verifies the lands and other assets, to reduce fraudulent activities as possible on the platform.
                    </p>
                </div>
            </div>
            <div class="faq">
                <a href="https://dev-arogundade.gitbook.io/agoralease/" target="_blank">
                    <div class="head">
                        <p>Why AgoraLease?</p> <i class="fi fi-rr-arrow-small-right"></i>
                    </div>
                </a>
                <div class="body">
                    <p>
                        Research has shown that Digital Agriculture is the solution to boost food production to about 70% in the next few years. <br> <br> At AgoraLease we are ensuring that any farmers are is left out by having access to this farm technologies in an affordable price for them. <br> <br> Join AgoraLease today and grow with us.
                    </p>
                </div>
            </div>
            <div class="faq">
                <a href="https://dev-arogundade.gitbook.io/agoralease/" target="_blank">
                    <div class="head">
                        <p>How to rent on AgoraLease</p> <i class="fi fi-rr-arrow-small-right"></i>
                    </div>
                </a>
                <div class="body">
                    <p>
                        An interested farmer would place an offer with price per unit(plot) per day, duration in days and unit (for land plots). So it's possible for farmers to rent a portion of the land (and other category items like IoT).
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

a {
    color: #000;
}
</style>
