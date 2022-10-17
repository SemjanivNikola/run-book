<template>
    <div class="process-info">
        <div class="process-info-title-wrapper">
            <a class="title-inner-wrapper" @click="$router.go(-1)">
                <icon name="chevron-right" color="rgb(0, 0, 0)" :size="28"/>
                <h2>{{ info.title }}</h2>
            </a>
        </div>

        <!-- STEP PROGRESS -->
        <div class="step-progress">
            <div class="step-progress-header">
                <div class="progress-info-wrapper">
                    <h4>Ukupni napredak:</h4>
                    <div class="spacer-md"></div>
                    <span class="progress-value">{{ info.progress }}%</span>
                </div>
                <div class="divider-vertical show-lg"></div>
                <div class="progress-info-wrapper">
                    <h4>Proteklo vrijeme:</h4>
                    <div class="spacer-md"></div>
                    <span class="progress-value">{{ info.timeTotal }}</span>
                </div>
                <div class="divider-vertical show-lg"></div>
                <div class="progress-info-wrapper">
                    <h4>Prosječno vrijeme:</h4>
                    <div class="spacer-md"></div>
                    <span class="progress-value">{{ info.timeAverage }}</span>
                </div>
                <div class="divider-vertical show-lg"></div>
                <div class="progress-info-wrapper">
                    <h4>Koraka riješeno:</h4>
                    <div class="spacer-md"></div>
                    <span class="progress-value">{{ info.stepDone }}</span>
                    <div class="spacer-md"></div>
                    <div class="divider-vertical"></div>
                    <div class="spacer-md"></div>
                    <span class="progress-value"
                        ><i>{{ info.stepTotal }}</i></span
                    >
                </div>
            </div>
            <div class="spacer-md"></div>
            <div class="step-progress-bar"></div>
        </div>
    </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
    name: "ProcessInfo",
    props: {
        info: {
            type: Object,
            required: true,
        },
    },
    components: { Icon },
};
</script>

<style scoped>
.process-info {
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
}
.process-info-title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    justify-content: space-between;
    cursor: pointer;
}
.title-inner-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
}
.step-progress {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.step-progress-header {
    width: 100%;
}
.progress-info-wrapper {
    height: inherit;
    min-height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.progress-value {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
}
.step-progress-bar {
    position: relative;
    width: 100%;
    height: 6px;
    border-radius: 4px;
    background-color: #e5e5e5;
}
.step-progress-bar::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 43%;
    height: 100%;
    display: block;
    background-image: linear-gradient(
        145deg,
        rgba(0, 255, 255, 0.5) 0%,
        rgba(204, 255, 102, 0.5) 100%
    );
    z-index: 99;
}
.divider-vertical {
    width: 2px;
    height: 100%;
    min-height: 35px;
    background-color: #e5e5e5;
}

@media (max-width: 756px) {
    .process-info {
        padding: 0 8px 0 0;
    }
    .divider-vertical.show-lg,
    .process-info-title-wrapper {
        display: none;
    }
    .step-progress-header {
        padding: 0 8px;
        display: block;
    }
    .progress-info-wrapper h4 {
        width: 50%;
        text-align: left;
    }
}
@media (min-width: 756px) {
    .process-info {
        padding: 24px;
    }
    .step-progress-header {
        height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
