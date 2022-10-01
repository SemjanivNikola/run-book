<template>
    <div v-if="isLoading">
        <div v-if="error" class="error-wrapper">
            <icon name="warning" color="#e81e63" />
            <div class="inner-wrapper">
                <h4>Dogodila se greška</h4>
                <p>{{ error }}</p>
            </div>
        </div>
        <div v-else class="loader-wrapper">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
    name: "ContentLoader",
    components: { Icon },
    props: {
        path: {
            type: String,
            required: true,
        },
        param: {
            default: null,
        },
    },
    data () {
        return {
            isLoading: false,
            error: null,
        };
    },
    created () {
        this.readData();
    },
    methods: {
        async readData () {
            this.isLoading = true;
            try {
                const response = await this.$store.dispatch(
                    this.path,
                    this.param,
                );
                this.$emit("is-fetched", response);
                this.isLoading = false;
            } catch (error) {
                this.error = error;
            }
        },
    },
};
</script>

<style scoped>
.error-wrapper,
.inner-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.error-wrapper {
    gap: 16px;
    padding-top: 32px;
}
.inner-wrapper {
    gap: 8px;
    text-align: center;
}
.inner-wrapper p {
    font-size: 14px;
}

.loader-wrapper {
    width: 50px;
    height: 100%;
    margin: 0 auto;
    padding-top: 64px;
}
.loader {
    --b: 7px; /* border thickness */
    --n: 10; /* number of dashes*/
    --g: 15deg; /* gap  between dashes*/
    --c: #005d82; /* the color */
    width: 50px; /* size */
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 1px; /* get rid of bad outlines */
    background: conic-gradient(#0000, var(--c)) content-box;
    --_m: /* we use +/-1deg between colors to avoid jagged edges */ repeating-conic-gradient(
            #0000 0deg,
            #000 1deg calc(360deg / var(--n) - var(--g) - 1deg),
            #0000 calc(360deg / var(--n) - var(--g)) calc(360deg / var(--n))
        ),
        radial-gradient(
            farthest-side,
            #0000 calc(98% - var(--b)),
            #000 calc(100% - var(--b))
        );
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    animation: load 1s infinite steps(var(--n));
}
@keyframes load {
    to {
        transform: rotate(1turn);
    }
}
</style>
