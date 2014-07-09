//Form JS File
function addWidgetspopTheme() {
    popTheme.add();
};

function popThemeGlobals() {
    popTheme = new kony.ui.Popup({
        "id": "popTheme",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "frm",
        "isModal": false,
        "addWidgets": addWidgetspopTheme
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
};