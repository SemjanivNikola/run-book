<template>
    <section id="main-container">
        <content-loader
            @is-fetched="fetched"
            path="processStore/readProcessById"
            :param="id"
        />
        <process-info v-if="processData" :info="processData.info" />
        <div v-if="processData" class="content-row">
            <div class="process-model-container no-padding">
                <div class="process-object">
                    <!-- HEADER -->
                    <div class="po-header">
                        <div class="po-header-title-wrapper">
                            <div class="step-number-wrapper">
                                <div class="step-number-wrapper-inner">
                                    <span class="step-number">{{
                                        processData.currentStep[0] + 1
                                    }}.</span>
                                </div>
                            </div>
                            <div class="spacer-md"></div>
                            <h3>{{ currentStep.title }}</h3>
                        </div>
                        <a @click="toggleModal">
                            <div class="tooltip-wrapper">
                                <icon
                                    name="help"
                                    :size="16"
                                    color="rgb(0, 0, 0)"
                                />
                            </div>
                        </a>
                    </div>

                    <div class="spacer-md"></div>

                    <tab-bar>
                        <tab-bar-item title="pregled">
                            <process-diagram
                                :stepList="processData.stepList"
                            />
                        </tab-bar-item>
                        <tab-bar-item title="trenutni korak">
                            <process-description
                                noPadding
                                :text="currentStep.description"
                            />
                            <process-step-list
                                :stepList="getStepListForActiveStep"
                                :isProcessActive="true"
                            />
                        </tab-bar-item>
                        <tab-bar-item title="detalji">
                            <process-description
                                noPadding
                            />
                            <process-step-list
                                :stepList="processData.stepList"
                            />
                        </tab-bar-item>
                    </tab-bar>
                </div>
            </div>
        </div>

        <modal-provider v-show="showModal" :title="modalTitle" :text="modalText" @onAction="toggleModal" />
    </section>
</template>

<script>
import ContentLoader from "@/components/ContentLoader.vue";
import ProcessDescription from "@/components/ProcessDescription.vue";
import ProcessInfo from "@/components/ProcessInfo.vue";
import ProcessStepList from "@/components/ProcessStepList.vue";
import TabBar from "@/components/TabBar.vue";
import TabBarItem from "@/components/TabBarItem.vue";
import { mapGetters } from "vuex";
import ProcessDiagram from "@/components/ProcessDiagram.vue";
import ModalProvider from "@/components/ModalProvider.vue";

export default {
    name: "ProcessDetailScreen",
    components: {
        ProcessInfo,
        ContentLoader,
        TabBar,
        TabBarItem,
        ProcessStepList,
        ProcessDescription,
        ProcessDiagram,
        ModalProvider,
    },
    props: {
        id: {
            type: Number || String, // On page refresh id from URL becomes string
            required: true,
        },
    },
    data () {
        return {
            processData: null,
            showModal: false,
            modalTitle: "Alokacija na praksu",
            // eslint-disable-next-line max-len
            modalText: "",
        };
    },
    methods: {
        fetched (content) {
            this.processData = content;
            this.modalTitle = this.processData.info.description;
        },
        toggleModal () {
            this.showModal = !this.showModal;
        },
    },
    computed: {
        ...mapGetters("processStore", ["getStepListForActiveStep"]),
        currentStep () {
            return this.processData.stepList[this.processData.currentStep[0]][
                this.processData.currentStep[1]
            ];
        },
        getUrlList () {
            const list = [];
            this.currentStep.urlIndexList.forEach((index) => {
                list.push(this.processData.urlList[index]);
            });
            return list;
        },
    },
};
</script>

<style scoped>
#main-container {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
    overflow-y: scroll;
    overflow-x: hidden;
}
.content-row {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}
.process-model-container {
    position: relative;
    display: flex;
    flex: 100%;
    height: 100%;
    border-radius: 0 !important;

    /*Free Snowball Dots SVG provided by SVGeez.com - CC 4.0 License - © 2019 Megan Young */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(234,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%2387FCFF'/%3E%3Cstop offset='1' stop-color='%23D8FF8E'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(260,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23FF8480'/%3E%3Cstop offset='1' stop-color='%23FFD639'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='66'%3E%3Cpath transform='translate(-130.9 9.2) rotate(0.1999999999999993 1409 581) scale(0.9423400000000001)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='22' transform='translate(-152.5 97) rotate(10.6 800 450) scale(1.01146)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(28.1 -124.5) rotate(87.5 401 736) scale(1.01146)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='20'%3E%3Cpath transform='translate(582 -1.8000000000000007) rotate(0.4500000000000002 150 345) scale(0.9747799999999999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='44' transform='translate(-184.5 -261) rotate(82.80000000000001 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-374.8 105.2) rotate(13.8 1400 132) scale(0.815)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    overflow-x: scroll;
    overflow-y: hidden;
}
.process-object {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.88);
    overflow: hidden;
}
.po-header {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.po-header-title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 8px;
}
.step-number-wrapper {
    display: block;
    border-radius: 50%;
    background-image: linear-gradient(
        45deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 93, 130, 1) 35%,
        rgba(0, 212, 255, 1) 100%
    );
    padding: 4px;
}
.step-number-wrapper.color-success {
    background-image: linear-gradient(
        145deg,
        rgba(0, 255, 255, 1) 0%,
        rgba(204, 255, 102, 1) 100%
    );
}
.step-number-wrapper-inner {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23CDCDCD' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23CDCDCD'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
    padding: 8px;
}
.step-number-wrapper-inner span.step-number {
    font-size: 26px;
    font-weight: 500;
}
.tooltip-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

@media (max-width: 756px) {
    .process-object {
        padding: 16px 8px;
    }
}
@media (max-width: 546px) {
    .step-number-wrapper {
        width: 45px;
        height: 45px;
    }
}
@media (min-width: 756px) {
    .process-object {
        padding: 24px 16px;
    }
}
@media (min-width: 546px) {
    .step-number-wrapper {
        width: 55px;
        height: 55px;
    }
}
</style>
