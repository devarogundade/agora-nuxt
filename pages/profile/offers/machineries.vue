<template>
<section>
    <div class="app-min-width">
        <h3 class="title">My Offers</h3>

        <div class="tab-container">
            <div class="tabs">
                <a href="/profile/offers">
                    <div class="item">
                        <i class="fi fi-rr-apps"></i>
                        <p>Lands</p>
                        <!-- <div class="indicator"></div> -->
                    </div>
                </a>

                <a href="/profile/offers/machineries">
                    <div class="item">
                        <i class="fi fi-rr-clock"></i>
                        <p>Machineries</p>
                        <div class="indicator"></div>
                    </div>
                </a>

                <a href="/profile/offers/iots">
                    <div class="item">
                        <i class="fi fi-rr-clock"></i>
                        <p>IoTs</p>
                        <!-- <div class="indicator"></div> -->
                    </div>
                </a>
            </div>
        </div>

        <MachineryOffers :endpoint="'user/offers?type=machinery'" />
    </div>
</section>
</template>

<script>
export default {
    layout: "profile"
}
</script>

<style scoped>
section {
    display: flex;
    padding: 50px 0;
    align-items: center;
    flex-direction: column;
}

.title {
    text-align: center;
    font-size: 40px;
    color: #ffffff;
}
</style>
