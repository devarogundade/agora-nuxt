<template>
<div class="items">
    <div class="item" v-for="index in 4" :key="index">
        <div class="status">
            <i class="fi fi-rr-caret-down"></i>
            <p>Received new offer from Joy</p>
        </div>

        <table>
            <thead>
                <tr>
                    <td>Size (plot)</td>
                    <td>Duration (day)</td>
                    <td>Rate ($ per day)</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>100</td>
                    <td>365</td>
                    <td>$1</td>
                </tr>
            </tbody>
        </table>

        <div class="accept">
            <div class="button">Reject</div>
            <div class="button">Accept</div>
        </div>
    </div>
</div>
</template>

<style scoped>
.items {
    padding: 40px 20px;
    grid-template-columns: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item {
    border-radius: 20px;
    background: #003543;
    padding: 10px 15px;
    margin-bottom: 20px;
    width: 600px;
    max-width: 100%;
}

.item:last-child {
  margin: 0;
}

.status {
    display: grid;
    height: 40px;
    border-radius: 6px;
    width: fit-content;
    grid-template-columns: 22px auto;
    align-items: center;
    color: #ffffff;
    column-gap: 10px;
}

.status i {
    height: 22px;
    background: #00dc82;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.status p {
    font-size: 15px;
    font-weight: 400;
}

table {
    width: 100%;
    margin-top: 10px;
    color: #ffffff;
    border-radius: 10px;
    border: 1px solid #002028;
    overflow: hidden;
}

thead,
tbody {
    height: 50px;
}

td {
    padding: 0 10px;
    width: calc(100%/ 3);
    font-size: 15px;
}

.accept {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.accept .button {
    padding: 8px 30px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
}

.accept .button:first-child {
    background: #a14f55;
}

.accept .button:last-child {
    background: #00dc82;
    margin-left: 20px;
}

@media screen and (max-width: 700px) {
  .items {
    padding: 20px 0;
  }
}
</style>
