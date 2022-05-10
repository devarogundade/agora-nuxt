<template>
<div>
    <section>
        <div class="app-min-width">
            <a href="/land">
                <div class="back">
                    <i class="fi fi-rr-arrow-small-left"></i>
                    <p>Back to lands</p>
                </div>
            </a>
        </div>
    </section>

    <section>
        <div class="app-min-width grid">
            <div class="image"></div>
            <div class="text">
                <div class="name">
                    <h3>CAT 2005</h3>
                    <p>Machinery</p>
                </div>

                <div class="price">
                    <div class="stock">
                        Availability <span>In stock</span>
                    </div>
                    <div class="amount">
                        <p class="fixed">Rate per month</p>
                        <h3>$50.00</h3>
                        <div class="btn">
                            Request
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    layout: "landing",
};
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    color: #ffffff;
}

.back {
    display: grid;
    grid-template-columns: 35px auto;
    height: 35px;
    border-radius: 10px;
    background: #003543;
    overflow: hidden;
    width: fit-content;
}

.back i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00c675;
}

.back p {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 10px;
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
}

.grid {
    display: grid;
    grid-template-columns: 400px auto;
    column-gap: 40px;
}

.name h3 {
  font-size: 36px;
  line-height: 46px;
  font-weight: 500;
}

.name p {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.6;
}

.image {
    background: #003543;
    border-radius: 10px;
    height: 450px;
}

.price {
    margin-top: 20px;
    border: 1px #003543 solid;
    border-radius: 10px;
    overflow: hidden;
}

.stock {
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px #003543 solid;
    font-size: 14px;
}

.stock span {
    padding: 2px 8px;
    border-radius: 10px;
    background: #99f1cd;
    margin-left: 10px;
    color: #00181e;
}

.amount {
    padding: 20px;
    background: #003543;
}

.btn {
    height: 50px;
    background: #00dc82;
    border-radius: 12px;
    width: 200px;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-size: 17px;
    font-weight: 500;
    margin-top: 20px;
    justify-content: center;
}
</style>
