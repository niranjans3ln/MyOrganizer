//Form JS File
function addWidgetspopFailMessage() {
    popFailMessage.add();
};

function popFailMessageGlobals() {
    popFailMessage = new kony.ui.Popup({
        "id": "popFailMessage",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "frm",
        "isModal": false,
        "addWidgets": addWidgetspopFailMessage
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