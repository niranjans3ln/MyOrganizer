//Form JS File
function addWidgetspopBlockingScreen() {
    var label1622497217145378 = new kony.ui.Label({
        "id": "label1622497217145378",
        "isVisible": true,
        "text": "Loading.....",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 93
    }, {});
    var vbox1622497217145377 = new kony.ui.Box({
        "id": "vbox1622497217145377",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1622497217145377.add(
    label1622497217145378);
    var hbox1622497217145376 = new kony.ui.Box({
        "id": "hbox1622497217145376",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 17,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1622497217145376.add(
    vbox1622497217145377);
    popBlockingScreen.add(
    hbox1622497217145376);
};

function popBlockingScreenGlobals() {
    popBlockingScreen = new kony.ui.Popup({
        "id": "popBlockingScreen",
        "title": null,
        "transparencyBehindThePopup": 75,
        "skin": "popOrganizerDefault",
        "isModal": false,
        "addWidgets": addWidgetspopBlockingScreen
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 45,
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