<template>
    <nav id="side-navigation" :class="{ open: isDrawerOpen }">
        <div class="top-placeholder">
            <button type="button" class="nav-icon" @click="toggleDrawer">
                <icon :name="isDrawerOpen ? 'drawer-open' : 'drawer-close'" />
            </button>
            <div class="spacer-md"></div>
            <div class="title">Aktivni procesi</div>
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
                                    currentRoute === 'ActiveProcessScreen'
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
                                    currentRoute === 'AvailableProcessScreen'
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
                                    currentRoute === 'ArchiveScreen'
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
    width: 28px;
    height: 28px;
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
}
</style>
