const sideNavigation = document.getElementById('side-navigation');
let isSideNavigationOpen = sideNavigation.classList.contains('open');

function toggleSideNavigation() {
    if (isSideNavigationOpen === true) {
        sideNavigation.classList.add('close');
        sideNavigation.classList.remove('open');

        saveState(false);
    } else {
        sideNavigation.classList.add('open');
        sideNavigation.classList.remove('close');

        saveState(true);
    }
}

function setInitState(state) {
    if (state === "true") {
        sideNavigation.classList.add('open');
        
        saveState(true);
    } else {
        sideNavigation.classList.add('close');

        saveState(false);
    }
}

function saveState(state) {
    localStorage.setItem('isSideNavigationOpen', state);
    isSideNavigationOpen = state;
}