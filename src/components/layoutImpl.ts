import { OrientationLockType, ScreenOrientation, ScreenOrientationResult } from "@capacitor/screen-orientation";

export function isLandscape() {
    return window.matchMedia('(orientation: landscape)').matches;
}

export function isPortrait() {
    return window.matchMedia('(orientation: portrait)').matches;
}

export function addScreenOrientationListener(setScreenOrientation: (orientation: OrientationLockType) => void) {
    ScreenOrientation.addListener('screenOrientationChange', (orientation: ScreenOrientationResult) => {
        setScreenOrientation(orientation.type);
    })
}