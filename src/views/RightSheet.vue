<template>
    <section class="sheet-wrapper">
        <div class="sheet-header">
            <div class="info-wrapper">
                <h3>Proces prijave prakse</h3>
                <h6>Nikola Tanković</h6>
            </div>
            <button>X</button>
        </div>
        <span class="progress-bar-wrapper">
            <span class="progress-bar" style="width: 68%"></span>
        </span>
    </section>
</template>

<script>
export default {
    name: "RightSheet",
};
</script>

<style>
.sheet-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 38%;
    height: 100vh;
    background-color: #fff;
    border-left: 2px solid #eee;
    z-index: 99;
}
.sheet-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
}
.info-wrapper {
    border-bottom: none !important;
}
button {
    background: transparent;
    outline: none;
    border: none;
    padding: 24px;
}
.progress-bar-wrapper {
    position: relative;
    margin: -8px 24px 0 24px;
    background-color: #eee;
    transform: skew(-30deg);
    overflow: hidden;
    box-shadow: 4px 5px 4px 2px rgb(0 0 0 / 18%);
    z-index: 10;
}
.progress-bar-wrapper .progress-bar {
    height: 12px;
    background-image: linear-gradient(
        145deg,
        rgba(0, 255, 255, 1) 0%,
        rgba(204, 255, 102, 1) 100%
    );
}
@media (max-width: 756px) {
}
@media (min-width: 756px) {
}
</style>