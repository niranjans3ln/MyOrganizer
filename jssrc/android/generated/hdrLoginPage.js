//Template File
function hdrLoginPage_vbox20788384265300_onClick_seq0(eventobject) {
    exitApp.call(this);
};

function initializehdrLoginPage() {
    hbox162431446870642 = new kony.ui.BoxTemplate({
        "id": "hbox162431446870642",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox162431446870642
    }, {
        "containerWeight": 6,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox162431446870642() {
        var hbox20788384265302 = new kony.ui.Box({
            "id": "hbox20788384265302",
            "isVisible": true,
            "skin": "hbxHeaderLogo",
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbox20788384265302.add();
        var vbox20788384265299 = new kony.ui.Box({
            "id": "vbox20788384265299",
            "isVisible": true,
            "skin": "vbxOrganizerDefault",
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 74,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox20788384265299.add(
        hbox20788384265302);
        var image21605938456179702 = new kony.ui.Image2({
            "id": "image21605938456179702",
            "isVisible": true,
            "src": "icon_exit_final.jpg",
            "imageWhenFailed": null,
            "imageWhileDownloading": null
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var vbox20788384265300 = new kony.ui.Box({
            "id": "vbox20788384265300",
            "isVisible": true,
            "skin": "vbxGreen",
            "onClick": hdrLoginPage_vbox20788384265300_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 26,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox20788384265300.add(
        image21605938456179702);
        hbox162431446870642.add(
        vbox20788384265299, vbox20788384265300);
    }
    hbox162431446870643 = new kony.ui.BoxTemplate({
        "id": "hbox162431446870643",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox162431446870643
    }, {
        "containerWeight": 2,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox162431446870643() {
        var line165115615970634 = new kony.ui.Line({
            "id": "line165115615970634",
            "isVisible": true,
            "skin": "lineOrganizerDefault"
        }, {
            "thickness": 1,
            "margin": [0, 0, 0, 0],
            "marginInPixel": false,
            "paddingInPixel": false
        }, {});
        var vbox165115615970633 = new kony.ui.Box({
            "id": "vbox165115615970633",
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
        vbox165115615970633.add(
        line165115615970634);
        hbox162431446870643.add(
        vbox165115615970633);
    }
};