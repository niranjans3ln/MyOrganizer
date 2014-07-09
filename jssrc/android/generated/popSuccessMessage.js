//Form JS File
function addWidgetspopSuccessMessage() {
    popSuccessMessage.add();
};

function popSuccessMessageGlobals() {
    popSuccessMessage = new kony.ui.Popup({
        "id": "popSuccessMessage",
        "title": null,
        "transparencyBehindThePopup": 100,
        "skin": "frm",
        "isModal": false,
        "addWidgets": addWidgetspopSuccessMessage
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