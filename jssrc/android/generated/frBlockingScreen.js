//Form JS File
function addWidgetsfrBlockingScreen() {};

function frBlockingScreenGlobals() {
    var MenuId = [];
    frBlockingScreen = new kony.ui.Form2({
        "id": "frBlockingScreen",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frmBlockingScreen",
        "addWidgets": addWidgetsfrBlockingScreen
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};