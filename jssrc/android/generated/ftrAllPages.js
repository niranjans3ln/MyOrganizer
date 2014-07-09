//Template File
function ftrAllPages_vbox144676670665319_onClick_seq0(eventobject) {
    gotoPreviousForm.call(this);
};

function initializeftrAllPages() {
    hbox165115615970629 = new kony.ui.BoxTemplate({
        "id": "hbox165115615970629",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox165115615970629
    }, {
        "containerWeight": 22,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox165115615970629() {
        var line165115615970631 = new kony.ui.Line({
            "id": "line165115615970631",
            "isVisible": true,
            "skin": "lineOrganizerDefault"
        }, {
            "thickness": 1,
            "margin": [0, 0, 0, 0],
            "marginInPixel": false,
            "paddingInPixel": false
        }, {});
        var image2144676670665320 = new kony.ui.Image2({
            "id": "image2144676670665320",
            "isVisible": true,
            "src": "back.png",
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
        var vbox144676670665319 = new kony.ui.Box({
            "id": "vbox144676670665319",
            "isVisible": true,
            "skin": "vbxOrganizerDefault",
            "onClick": ftrAllPages_vbox144676670665319_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 10,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox144676670665319.add(
        image2144676670665320);
        var label144676670665326 = new kony.ui.Label({
            "id": "label144676670665326",
            "isVisible": true,
            "text": null,
            "skin": "lblOrganizerDefault"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var vbox144676670665321 = new kony.ui.Box({
            "id": "vbox144676670665321",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 16,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox144676670665321.add(
        label144676670665326);
        var label144676670665325 = new kony.ui.Label({
            "id": "label144676670665325",
            "isVisible": true,
            "text": "My Personal Organizer",
            "skin": "lblOrganizerBlackBold"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var vbox144676670665322 = new kony.ui.Box({
            "id": "vbox144676670665322",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 51,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox144676670665322.add(
        label144676670665325);
        var label144676670665324 = new kony.ui.Label({
            "id": "label144676670665324",
            "isVisible": true,
            "text": "Ver: 1.1.0",
            "skin": "lblOrganizerBlackBold"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var vbox144676670665323 = new kony.ui.Box({
            "id": "vbox144676670665323",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 23,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox144676670665323.add(
        label144676670665324);
        var hbox144676670665318 = new kony.ui.Box({
            "id": "hbox144676670665318",
            "isVisible": true,
            "skin": "hbxOrganizerDefault",
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 61,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbox144676670665318.add(
        vbox144676670665319, vbox144676670665321, vbox144676670665322, vbox144676670665323);
        var vbox165115615970630 = new kony.ui.Box({
            "id": "vbox165115615970630",
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
        vbox165115615970630.add(
        line165115615970631, hbox144676670665318);
        hbox165115615970629.add(
        vbox165115615970630);
    }
};