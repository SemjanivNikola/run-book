<template>
    <div class="tooltip-popup-container">
        <div class="tooltip-popup-wrapper">
            <div class="tooltip-popup">
                <div class="tooltip-popup-content">
                    <h3>{{ title }}</h3>
                    <div class="spacer-md"></div>
                    <p>
                        {{ text }}
                    </p>
                </div>

                <div class="tooltip-footer">
                    <a href="process-detail.html">
                        <button
                            type="button"
                            title="Zatvori"
                            translate="yes"
                            class="tooltip-btn"
                        >
                            <div class="tooltip-btn-wrapper">
                                <span>Zatvori</span>
                                <icon
                                    name="chevron-right"
                                    color="rgb(0,212,255)"
                                />
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalProvider",
    props: {
        title: {
            type: String,
            default: null,
        },
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.tooltip-wrapper {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.tooltip-footer .btn-wrapper {
    padding: 4px;
    border-radius: 4px;
    background-image: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 93, 130, 1) 35%,
        rgba(0, 212, 255, 1) 100%
    );
}

.tooltip-footer .btn-wrapper a {
    text-decoration: none;
}

.tooltip-footer .btn-wrapper .action-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    padding: 8px 32px;
    background-color: #ffffff;
}

.tooltip-popup-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.tooltip-popup-wrapper {
    border-radius: 8px;
    padding: 4px;
    background-image: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 93, 130, 1) 35%,
        rgba(0, 212, 255, 1) 100%
    );
    box-shadow: rgba(0, 93, 130, 0.45) 0px 10px 15px -3px,
        rgba(0, 212, 255, 0.15) 0px 4px 6px -2px;
}

.tooltip-popup-container .tooltip-popup {
    position: relative;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.tooltip-popup-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.tooltip-footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 32px;
}

/* BUTTON */
.tooltip-btn {
    height: 35px;
    display: flex;
    justify-content: flex-end;
    outline: none;
    border: none;
    border-radius: 25px;
    background-color: #0b1b1e;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 15px -2px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    overflow: hidden;
    cursor: pointer;
}
.tooltip-btn-wrapper {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;
    min-width: 195px;
}
.tooltip-btn span {
    min-width: 120px;
    text-align: center;
    color: #ffffff;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}
</style>
