//Template File
function hdrAllPages_vbxMenu_onClick_seq0(eventobject) {
    popMenu.show();
};

function hdrAllPages_btnHdrLogout_onClick_seq0(eventobject) {
    logoutUser.call(this);
};

function initializehdrAllPages() {
    hbox20788384265298 = new kony.ui.BoxTemplate({
        "id": "hbox20788384265298",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox20788384265298
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

    function addWidgetshbox20788384265298() {
        var image2144676670665304 = new kony.ui.Image2({
            "id": "image2144676670665304",
            "isVisible": true,
            "src": "transparent.png",
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
        var vbxMenu = new kony.ui.Box({
            "id": "vbxMenu",
            "isVisible": true,
            "skin": "vbxOrganizerDefault",
            "onClick": hdrAllPages_vbxMenu_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 35,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxMenu.add(
        image2144676670665304);
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
        hbox20788384265302.add(
        vbxMenu);
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
        var btnHdrLogout = new kony.ui.Button({
            "id": "btnHdrLogout",
            "isVisible": true,
            "text": null,
            "skin": "btnLogout",
            "focusSkin": "btnLogoutFocused",
            "onClick": hdrAllPages_btnHdrLogout_onClick_seq0
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 3, 0, 3],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var vbox20788384265300 = new kony.ui.Box({
            "id": "vbox20788384265300",
            "isVisible": true,
            "skin": "vbxOrganizerDefault",
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
        btnHdrLogout);
        hbox20788384265298.add(
        vbox20788384265299, vbox20788384265300);
    }
    hbox165115615970632 = new kony.ui.BoxTemplate({
        "id": "hbox165115615970632",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox165115615970632
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

    function addWidgetshbox165115615970632() {
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
        hbox165115615970632.add(
        vbox165115615970633);
    }
};