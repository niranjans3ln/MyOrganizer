//Form JS File
function addWidgetspopMessage() {
    popMessage.add();
};

function popMessageGlobals() {
    popMessage = new kony.ui.Popup({
        "id": "popMessage",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "frm",
        "isModal": false,
        "addWidgets": addWidgetspopMessage
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