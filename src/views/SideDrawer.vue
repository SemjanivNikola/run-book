<template>
    <nav id="side-navigation" :class="{ open: isDrawerOpen }">
        <div class="top-placeholder">
            <button type="button" class="nav-icon" @click="toggleDrawer">
                <icon :name="isDrawerOpen ? 'drawer-open' : 'drawer-close'" :size="28" />
            </button>
            <div class="spacer-md"></div>

            <div v-if="canGoBack" class="back-btn" @click="$router.back()">
                <icon name="chevron-left" :size="28" />
                <h2 class="title">{{ title }}</h2>
            </div>
            <h2 v-else class="title">{{ title }}</h2>
        </div>
        <div class="side-navigator-container">
            <div class="side-navigator-menu">
                <router-link
                    to="/"
                    class="side-navigator-menu-item-wrapper"
                    aria-disabled="true"
                >
                    <div class="side-navigator-menu-item">
                        <div class="side-navigator-menu-item-icon">
                            <icon
                                name="active-process"
                                :color="
                                    currentRoute === 'ActiveListScreen'
                                        ? 'rgb(0, 0, 0)'
                                        : undefined
                                "
                            />
                        </div>
                        <div class="side-navigator-menu-item-text">
                            Aktivni procesi
                        </div>
                    </div>
                </router-link>

                <router-link
                    to="/available-processes"
                    class="side-navigator-menu-item-wrapper"
                >
                    <div class="side-navigator-menu-item">
                        <div class="side-navigator-menu-item-icon">
                            <icon
                                name="available-process"
                                :color="
                                    currentRoute === 'AvailableListScreen'
                                        ? 'rgb(0, 0, 0)'
                                        : undefined
                                "
                            />
                        </div>
                        <div class="side-navigator-menu-item-text">
                            Dostupni procesi
                        </div>
                    </div>
                </router-link>

                <router-link
                    to="/archive"
                    class="side-navigator-menu-item-wrapper"
                >
                    <div class="side-navigator-menu-item">
                        <div class="side-navigator-menu-item-icon">
                            <icon
                                name="archive"
                                :color="
                                    currentRoute === 'ArchiveListScreen'
                                        ? 'rgb(0, 0, 0)'
                                        : undefined
                                "
                            />
                        </div>
                        <div class="side-navigator-menu-item-text">Arhiva</div>
                    </div>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "SideDrawer",
    data () {
        return {
            currentRoute: "",
        };
    },
    created () {
        const { drawerState } = localStorage;
        if (drawerState === "true") {
            this.$store.commit("setDrawerInitState", true);
        } else {
            this.$store.commit("setDrawerInitState", false);
        }
        this.currentRoute = this.$route.name;
    },
    methods: {
        toggleDrawer () {
            this.$store.commit("toggleDrawer");
        },
    },
    watch: {
        $route (to) {
            this.currentRoute = to.name;
        },
    },
    computed: {
        ...mapGetters(["isDrawerOpen"]),
        title () {
            switch (this.currentRoute) {
                case "ActiveProcessScreen":
                    return "Aktivni procesi";
                case "AvailableProcessScreen":
                    return "Dostupni procesi";
                case "ArchiveScreen":
                    return "Arhiva";
                default: {
                    const { title } = this.$router.currentRoute.params;
                    return title ? title : "Detalji";
                }
            }
        },
        canGoBack () {
            switch (this.currentRoute) {
                case "ActiveProcessScreen":
                case "AvailableProcessScreen":
                case "ArchiveScreen":
                    return false;
                default:
                    return true;
            }
        },
    },
};
</script>

<style>
#side-navigation {
    top: 0;
    left: 0;
    padding: 0 8px;
    overflow: hidden;
    background-color: #005d82;
    transition: all 300ms ease-out;
    z-index: 99999;
}

.side-navigator-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
}

.side-navigator-menu-item-wrapper {
    text-decoration: none;
}

.side-navigator-menu-item {
    display: flex;
    height: 48px;
    min-width: 240px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.side-navigator-menu-item-icon {
    width: 28px;
    height: 28px;
    margin-right: 20px;
}

.side-navigator-menu-item-text {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.5px;
}

.nav-icon {
    margin-bottom: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
}

a.side-navigator-menu-item-wrapper.router-link-exact-active {
    cursor: default;
    background-color: #e0e0e0;
    border-radius: 4px;
    -webkit-box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.39);
    box-shadow: 5px 5px 13px 0px rgba(0, 0, 0, 0.39);
}

a.side-navigator-menu-item-wrapper.router-link-exact-active
    .side-navigator-menu-item-text {
    color: #000;
}
@media (max-width: 756px) {
    #side-navigation {
        position: fixed;
        width: 100%;
        height: 60px;
    }

    #side-navigation.open {
        height: 100vh;
    }
    .top-placeholder {
        display: flex;
        flex-direction: row;
        padding: 16px 16px 0;
    }

    .top-placeholder .spacer-md {
        display: inline-flex;
    }

    .top-placeholder .title {
        display: contents;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.5px;
    }
    .back-btn {
        height: 44px;
        width: 93%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        text-decoration: none;
    }
    .back-btn .icon-wrapper {
        display: inline-block;
        margin-right: 8px;
    }
    .top-placeholder .back-btn h2.title {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 22px;
    }
}
@media (max-width: 390px) {
    /* NAVIGATION  */
    .top-placeholder .back-btn h2.title {
        font-size: 18px;
        line-height: 1.5;
    }
}
@media (min-width: 756px) {
    #side-navigation {
        position: relative;
        height: 100%;
        width: 72px;
    }
    #side-navigation.open {
        width: 240px;
    }
    #side-navigation + section#app-content {
        max-width: calc(100vw - 72px);
    }
    #side-navigation.open + section#app-content {
        max-width: calc(100vw - 240px);
    }
    .top-placeholder {
        padding: 24px 16px;
    }
    .top-placeholder .spacer-md {
        display: none;
    }
    .top-placeholder .title {
        display: none;
    }
    .back-btn {
        display: none;
    }
}
</style>
