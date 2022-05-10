<template>
<section>
    <div class="app-max-width">

        <h3 class="title">Popular Locations</h3>

        <div class="items">
            <div class="item">
                <div class="action">
                    <div class="button">Rent</div>
                    <div class="button">Lease</div>
                </div>

                <div class="image">
                    <img src="images/land.png" alt="">
                </div>
                <div class="content">
                    <h3>Lagos</h3>
                    <p class="price">starting from $10/month</p>

                    <ul>
                        <li>
                            <i class="fi fi-rr-raindrops"></i>
                            <p>Rain</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-sun"></i>
                            <p>Sunlight</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-humidity"></i>
                            <p>Humidity</p>
                            <div class="progress"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="item">
                <div class="action">
                    <div class="button">Rent</div>
                    <div class="button">Lease</div>
                </div>

                <div class="image">
                    <img src="images/land.png" alt="">
                </div>
                <div class="content">
                    <h3>Abeokuta</h3>
                    <p class="price">starting from $10/month</p>

                    <ul>
                        <li>
                            <i class="fi fi-rr-raindrops"></i>
                            <p>Rain</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-sun"></i>
                            <p>Sunlight</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-humidity"></i>
                            <p>Humidity</p>
                            <div class="progress"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="item">
                <div class="action">
                    <div class="button">Rent</div>
                    <div class="button">Lease</div>
                </div>

                <div class="image">
                    <img src="images/land.png" alt="">
                </div>
                <div class="content">
                    <h3>Ibadan</h3>
                    <p class="price">starting from $10/month</p>

                    <ul>
                        <li>
                            <i class="fi fi-rr-raindrops"></i>
                            <p>Rain</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-sun"></i>
                            <p>Sunlight</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-humidity"></i>
                            <p>Humidity</p>
                            <div class="progress"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="item">
                <div class="action">
                    <div class="button">Rent</div>
                    <div class="button">Lease</div>
                </div>

                <div class="image">
                    <img src="images/land.png" alt="">
                </div>
                <div class="content">
                    <h3>Sokoto</h3>
                    <p class="price">starting from $10/month</p>

                    <ul>
                        <li>
                            <i class="fi fi-rr-raindrops"></i>
                            <p>Rain</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-sun"></i>
                            <p>Sunlight</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-humidity"></i>
                            <p>Humidity</p>
                            <div class="progress"></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="item">
                <div class="action">
                    <div class="button">Rent</div>
                    <div class="button">Lease</div>
                </div>

                <div class="image">
                    <img src="images/land.png" alt="">
                </div>
                <div class="content">
                    <h3>Enugu</h3>
                    <p class="price">starting from $10/month</p>

                    <ul>
                        <li>
                            <i class="fi fi-rr-raindrops"></i>
                            <p>Rain</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-sun"></i>
                            <p>Sunlight</p>
                            <div class="progress"></div>
                        </li>

                        <li>
                            <i class="fi fi-rr-humidity"></i>
                            <p>Humidity</p>
                            <div class="progress"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -15px;
    background: #fafafa;
    padding-bottom: 50px;
}

.title {
  font-size: 35px;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
}

.swiper-container {
    overflow-x: hidden;
    position: relative;
}

.swiper-wrapper {
    height: 300px;
    display: flex;
    width: 100%;
}

.slide {
    border-radius: 20px;
    background: #345158;
}

.swiper-button-prev {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #00c675;
    left: 40px;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
}

.swiper-button-prev i,
.swiper-button-next i {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
}

.swiper-button-next {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #00c675;
    right: 40px;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
}

.items {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 20px;
}

.item {
    background: #345158;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
}

.item .action {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #04323f46;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 2;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 20px;
}

.item:hover .action {
    opacity: 1;
}

.image {
    width: 100%;
    height: 200px;
    padding-top: 20px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    padding: 10px;
    text-align: center;
    color: #ffffff;
}

.content h3 {
    font-size: 26px;
    font-weight: 500;
}

.content .price {
    font-size: 12px;
    font-weight: 300;
    color: #7be9bb;
}

.content ul {
    margin-top: 10px;
}

.content li {
    display: grid;
    grid-template-columns: 40px auto;
    height: 30px;
    background: #3f5e66;
    margin-bottom: 5px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.content .progress {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
}

.content li:first-child .progress {
    width: 88%;
    background: #4577ff;
}

.content li:nth-child(2) .progress {
    width: 63%;
    background: #fac20a;
}

.content li:last-child .progress {
    width: 80%;
    background: #99b4ff;
}

.content li i {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.content li p {
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
}

.action {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.action .button {
  padding: 10px 25px;
  border-radius: 10px;
  background: #ffffff;
  margin: 5px 0;
}
</style>
