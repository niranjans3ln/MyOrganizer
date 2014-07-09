//Form JS File
function addWidgetspopLogout() {
    popLogout.add();
};

function popLogoutGlobals() {
    popLogout = new kony.ui.Popup({
        "id": "popLogout",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "frm",
        "isModal": false,
        "addWidgets": addWidgetspopLogout
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