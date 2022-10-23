<template>
    <div class="wrap">
        <h1>ODLIČNO!</h1>
        <div class="img-content">
            <div class="img-wrap">
                <img src="../assets/form-successful.svg" />
            </div>
        </div>
        <h3>Podaci su uspješno poslani</h3>
        <div class="inline">
            <p>Za nekoliko sekundi ćeš se vratiti na pregled procesa.</p>
            <a @click="handleRoute">Vrati se odmah.</a>
        </div>
        <div class="logo">
            <img
                src="../assets/logo.png"
                alt="logo"
                style="width: 50px; height: 100%"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "SuccessfulFormScreen",
    data () {
        return {
            timeoutId: null,
        };
    },
    created () {
        this.timeoutId = setTimeout(() => {
            this.handleRoute();
        }, 5000);
    },
    methods: {
        handleRoute () {
            clearTimeout(this.timeoutId);
            this.$router.go(-2);
        },
    },
};
</script>

<style scoped>
.wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    gap: 8px;
    padding-top: 32px;
}
.wrap h1 {
    font-size: 90px;
    font-weight: 600;
    font-family: "Niconne", cursive;
    color: #e0d6e9;
    transform-origin: center;
    transform: rotate(-25deg) translate(4rem, -4rem);
    text-shadow: 2px 2px 0px #957dad, 4px 4px 0px #ee4b2b, 6px 6px 0px #00c2cb,
        8px 8px 0px #ff7f50, 10px 10px 0px #553c9a;
}
.wrap h3 {
    text-align: center;
}
.img-content {
    width: 100%;
    margin-top: -90px;
}
.img-wrap {
    max-width: 45%;
    margin: 0 auto;
}
.img-wrap img {
    width: 100%;
    height: auto;
}
.inline {
    display: flex;
    align-items: center;
    justify-content: center;
}
.inline a {
    color: #005d82;
    text-decoration: underline;
    cursor: pointer;
}
.logo {
    position: absolute;
    top: 32px;
    right: 32px;
}
</style>
