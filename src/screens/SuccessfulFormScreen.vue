<template>
    <div class="wrap">
        <div class="icon-wrap">
             <icon :size="65" name="step-done" color="rgb(191, 240, 95) " />
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
import Icon from "@/components/Icon.vue";
export default {
    components: { Icon },
    name: "SuccessfulFormScreen",
    data () {
        return {
            timeoutId: null,
        };
    },
    created () {
        this.timeoutId = setTimeout(() => {
            this.$store.commit("processStore/setShouldStartFlow", true);
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
.wrap h3 {
    text-align: center;
}
.img-content {
    width: 100%;
    margin-top: -90px;
}
.icon-wrap {
    margin: 80px auto 45px auto;
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
