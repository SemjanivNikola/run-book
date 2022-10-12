<!-- eslint-disable vue/no-v-html -->
<template>
    <div
        class="icon-wrapper"
        :style="{ width: size + 'px', height: size + 'px' }"
        v-html="iconName()"
    />
</template>

<script>
export default {
    name: "Icon",
    props: {
        name: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: false,
            default: 24,
        },
        color: {
            type: String,
            required: false,
            default: "rgba(255, 255, 255)",
        },
    },
    computed: {
        plus () {
            return `<svg viewBox="0 0 24 24"><path fill="${this.color}" fill-rule="evenodd" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" /></svg>`;
        },
        plusCircle () {
            return `<svg viewBox="0 0 16 16" fill="none">
        <path fill="${this.color}" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fill="${this.color}" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>`;
        },
        close () {
            return `<svg viewBox="0 0 24 24"><path fill="${this.color}" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>`;
        },
        chevronLeft () {
            return `<svg viewBox="0 0 24 24"><path fill="${this.color}" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>`;
        },
        chevronRight () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                    </svg>`;
        },
        menu () {
            return `<svg viewBox="0 0 16 16" fill="none">
        <path fill="${this.color}" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>`;
        },
        add () {
            return `<svg viewBox="0 0 16 16" fill="none">
        <path fill="${this.color}" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
      </svg>`;
        },
        file () {
            return `<svg viewBox="0 0 16 16" fill="none">
        <path fill="${this.color}" d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
      </svg>`;
        },
        search () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}"
                            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
                    </svg>`;
        },
        progressClock () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}"
                            d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                    </svg>`;
        },
        progressWarning () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}" d="M13,2V4C17.39,4.54 20.5,8.53 19.96,12.92C19.5,16.56 16.64,19.43 13,19.88V21.88C18.5,21.28 22.45,16.34 21.85,10.85C21.33,6.19 17.66,2.5 13,2M11,2C9.04,2.18 7.19,2.95 5.67,4.2L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.24,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.06,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37H7.06M13,13V7H11V13H13M13,17V15H11V17H13Z" />
                    </svg>`;
        },
        help () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}" d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
                    </svg>`;
        },
        info () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}"
                            d="M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z"/>
                    </svg>`;
        },
        drawerOpen () {
            return `<svg viewBox="0 0 24 24"><path fill="${this.color}" d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" /></svg>`;
        },
        drawerClose () {
            return `<svg viewBox="0 0 24 24"><path fill="${this.color}" d="M3 10H14V12H3V10M3 6H14V8H3V6M3 14H10V16H3V14M16 13V21L22 17L16 13Z" /></svg>`;
        },
        activeProcess () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}" d="M13,2.05V4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03V2.05M5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37L5.67,19.74M7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74M5.69,7.1L4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1M4.06,13H2.06C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13M10,16.5L16,12L10,7.5V16.5Z" />
                    </svg>`;
        },
        availableProcess () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}" d="M13,2.03C17.73,2.5 21.5,6.25 21.95,11C22.5,16.5 18.5,21.38 13,21.93V19.93C16.64,19.5 19.5,16.61 19.96,12.97C20.5,8.58 17.39,4.59 13,4.05V2.05L13,2.03M11,2.06V4.06C9.57,4.26 8.22,4.84 7.1,5.74L5.67,4.26C7.19,3 9.05,2.25 11,2.06M4.26,5.67L5.69,7.1C4.8,8.23 4.24,9.58 4.05,11H2.05C2.25,9.04 3,7.19 4.26,5.67M2.06,13H4.06C4.24,14.42 4.81,15.77 5.69,16.9L4.27,18.33C3.03,16.81 2.26,14.96 2.06,13M7.1,18.37C8.23,19.25 9.58,19.82 11,20V22C9.04,21.79 7.18,21 5.67,19.74L7.1,18.37M12,16.5L7.5,12H11V8H13V12H16.5L12,16.5Z" />
                    </svg>`;
        },
        archive () {
            return `<svg viewBox="0 0 24 24"><path fill="${this.color}" d="M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z" /></svg>`;
        },
        stepDone () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}" d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" />
                    </svg>`;
        },
        nextStep () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}" d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M11,21V19H13V21H11Z" />
                    </svg>`;
        },
        lastStep () {
            return `<svg viewBox="0 0 24 24">
                        <path fill="${this.color}" d="M17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12C7,9.58 8.72,7.56 11,7.1V3H13V7.1C15.28,7.56 17,9.58 17,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M11,21V19H13V21H11Z" />
                    </svg>`;
        },
        repeat () {
            return `<svg viewBox="0 0 24 24"><path fill="${this.color}" d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z" /></svg>`;
        },
    },
    methods: {
        // eslint-disable-next-line max-statements, max-lines-per-function, complexity
        iconName () {
            switch (this.name) {
                case "plus": {
                    return this.plus;
                }
                case "plus-circle": {
                    return this.plusCircle;
                }
                case "close": {
                    return this.close;
                }
                case "chevron-left": {
                    return this.chevronLeft;
                }
                case "chevron-right": {
                    return this.chevronRight;
                }
                case "menu": {
                    return this.menu;
                }
                case "add": {
                    return this.add;
                }
                case "search": {
                    return this.search;
                }
                case "progress-clock": {
                    return this.progressClock;
                }
                case "help": {
                    return this.help;
                }
                case "info": {
                    return this.info;
                }
                case "drawer-open": {
                    return this.drawerOpen;
                }
                case "drawer-close": {
                    return this.drawerClose;
                }
                case "active-process": {
                    return this.activeProcess;
                }
                case "available-process": {
                    return this.availableProcess;
                }
                case "archive": {
                    return this.archive;
                }
                case "step-done": {
                    return this.stepDone;
                }
                case "next-step": {
                    return this.nextStep;
                }
                case "last-step": {
                    return this.lastStep;
                }
                case "warning": {
                    return this.progressWarning;
                }
                case "repeat": {
                    return this.repeat;
                }
                default: {
                    // file
                    return this.file;
                }
            }
        },
    },
};
</script>

<style scoped>
.icon-wrapper {
    flex-shrink: 0;
}
.icon-wrapper svg {
    width: 100%;
    height: 100%;
}
</style>
