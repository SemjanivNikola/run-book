<template>
    <div class="loader-wrapper">
        <div v-if="isLoading" class="loader"></div>
        <slot v-else></slot>
    </div>
</template>

<script>
export default {
    name: "Loader",
    props: {
        isLoading: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
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

@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>
