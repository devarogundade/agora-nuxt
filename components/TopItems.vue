<template>
<section>
    <div class="app-width">
        <div class="item">
            <div class="image">
                <img src="https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            </div>
            <div class="content">
                <h3>Lands</h3>
                <p>Let your unused spaces work for you. Lease out your land to farmers and earn passively on your used spaces.</p>
                <div class="actions">
                    <div class="button">Explore <i class="fi fi-rr-arrow-right"></i></div>
                </div>
            </div>
        </div>

        <div class="item reserve">
            <div class="image">
                <img src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMHRyYWN0b3J8ZW58MHx8MHx8&w=1000&q=80" alt="">
            </div>
            <div class="content">
                <h3>Machineries</h3>
                <p>Lease out tractors, tractor couples, processing machines and others to farmers. In a stress pattern design for you.</p>
                <div class="actions">
                    <div class="button">Explore <i class="fi fi-rr-arrow-right"></i></div>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="image">
                <img src="https://d3hid44mqnfbhw.cloudfront.net/precisagms/wp-content/uploads/2021/09/Drones-Transforming-the-Agritech-Industry.jpg" alt="">
            </div>
            <div class="content">
                <h3>IoTs</h3>
                <p>Internet of things as become an essential part in Agriculture. Take the opportunity to start your agro investment today.</p>
                <div class="actions">
                    <div class="button">Explore <i class="fi fi-rr-arrow-right"></i></div>
                </div>
            </div>
        </div>

        <div class="item reserve">
            <div class="image">
                <img src="https://t3.ftcdn.net/jpg/01/66/62/52/360_F_166625272_XAgrTz23fjKavhMaxekP036kPqXvIfTg.jpg" alt="">
            </div>
            <div class="content">
                <h3>Trucks</h3>
                <p>Provide transport support for farmers and also earn back in return.</p>
                <div class="actions">
                    <div class="button">Explore <i class="fi fi-rr-arrow-right"></i></div>
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
}

.item {
    display: flex;
    align-items: center;
    border-bottom: 1px #ccc solid;
    padding: 50px 20px;
    column-gap: 40px;
    width: 100%;
}

.item:last-child {
    border-bottom: none;
}

.reserve {
    flex-direction: row-reverse;
}

.image {
    height: 500px;
    width: calc(100% - 450px);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: -5px 10px 15px #ccc;
}

.content {
    width: 450px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item h3 {
    font-size: 36px;
    font-weight: 600;
}

.item p {
    font-size: 15px;
    margin-top: 20px;
}

.actions {
    display: flex;
    align-items: center;
    margin-top: 30px;
}

.actions .button {
    padding: 8px 20px;
    border-radius: 10px;
    background: #00303c;
    color: #fff;
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    display: flex;
    align-items: center;
}

.actions .button i {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.button:hover i {
    margin-left: 15px;
}

@media screen and (max-width: 1000px) {
  .item {
    flex-direction: column;
    padding: 30px 10px;
  }

  .image {
    width: 100%;
    height: 400px;
  }

  .content {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
