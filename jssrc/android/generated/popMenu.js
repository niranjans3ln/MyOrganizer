//Form JS File
function popMenu_hbox144676670670621_onClick_seq0(eventobject) {
    frHome.show();
    popMenu.dismiss();
};

function popMenu_hbox144676670670622_onClick_seq0(eventobject) {
    frProfile.show();
    popMenu.dismiss();
};

function popMenu_hbox144676670670623_onClick_seq0(eventobject) {
    frProfileCreate.show();
    popMenu.dismiss();
};

function popMenu_hbox144676670670624_onClick_seq0(eventobject) {
    popTheme.show();
    popMenu.dismiss();
};

function popMenu_hbox144676670670625_onClick_seq0(eventobject) {
    frManageNotes.show();
    popMenu.dismiss();
};

function popMenu_hbox144676670670626_onClick_seq0(eventobject) {
    frContactDev.show();
    popMenu.dismiss();
};

function popMenu_hbox144676670670627_onClick_seq0(eventobject) {
    logoutUser.call(this);
};

function addWidgetspopMenu() {
    var image2165115615970635 = new kony.ui.Image2({
        "id": "image2165115615970635",
        "isVisible": true,
        "src": "icon_home.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label144676670665307 = new kony.ui.Label({
        "id": "label144676670665307",
        "isVisible": true,
        "text": "Home",
        "skin": "lblOrganizerMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {});
    var hbox144676670670621 = new kony.ui.Box({
        "id": "hbox144676670670621",
        "isVisible": true,
        "onClick": popMenu_hbox144676670670621_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670670621.add(
    image2165115615970635, label144676670665307);
    var line144676670665306 = new kony.ui.Line({
        "id": "line144676670665306",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2165115615970636 = new kony.ui.Image2({
        "id": "image2165115615970636",
        "isVisible": true,
        "src": "icon_edituser.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label144676670665309 = new kony.ui.Label({
        "id": "label144676670665309",
        "isVisible": true,
        "text": "Update Profile",
        "skin": "lblOrganizerMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {});
    var hbox144676670670622 = new kony.ui.Box({
        "id": "hbox144676670670622",
        "isVisible": true,
        "onClick": popMenu_hbox144676670670622_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670670622.add(
    image2165115615970636, label144676670665309);
    var line144676670665308 = new kony.ui.Line({
        "id": "line144676670665308",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2165115615970637 = new kony.ui.Image2({
        "id": "image2165115615970637",
        "isVisible": true,
        "src": "icon_adduser.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label144676670665311 = new kony.ui.Label({
        "id": "label144676670665311",
        "isVisible": true,
        "text": "Create Profile",
        "skin": "lblOrganizerMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {});
    var hbox144676670670623 = new kony.ui.Box({
        "id": "hbox144676670670623",
        "isVisible": true,
        "onClick": popMenu_hbox144676670670623_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670670623.add(
    image2165115615970637, label144676670665311);
    var line144676670665310 = new kony.ui.Line({
        "id": "line144676670665310",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2165115615970638 = new kony.ui.Image2({
        "id": "image2165115615970638",
        "isVisible": true,
        "src": "icon_theme.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label144676670665313 = new kony.ui.Label({
        "id": "label144676670665313",
        "isVisible": true,
        "text": "Change Theme",
        "skin": "lblOrganizerMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {});
    var hbox144676670670624 = new kony.ui.Box({
        "id": "hbox144676670670624",
        "isVisible": true,
        "onClick": popMenu_hbox144676670670624_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670670624.add(
    image2165115615970638, label144676670665313);
    var line144676670665312 = new kony.ui.Line({
        "id": "line144676670665312",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2165115615970639 = new kony.ui.Image2({
        "id": "image2165115615970639",
        "isVisible": true,
        "src": "icon_managenotes.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label144676670665315 = new kony.ui.Label({
        "id": "label144676670665315",
        "isVisible": true,
        "text": "Manage Notes",
        "skin": "lblOrganizerMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {});
    var hbox144676670670625 = new kony.ui.Box({
        "id": "hbox144676670670625",
        "isVisible": true,
        "onClick": popMenu_hbox144676670670625_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670670625.add(
    image2165115615970639, label144676670665315);
    var line144676670665314 = new kony.ui.Line({
        "id": "line144676670665314",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2165115615970640 = new kony.ui.Image2({
        "id": "image2165115615970640",
        "isVisible": true,
        "src": "icon_contactdev.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label144676670665317 = new kony.ui.Label({
        "id": "label144676670665317",
        "isVisible": true,
        "text": "Contact Developer",
        "skin": "lblOrganizerMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {});
    var hbox144676670670626 = new kony.ui.Box({
        "id": "hbox144676670670626",
        "isVisible": true,
        "onClick": popMenu_hbox144676670670626_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 14,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670670626.add(
    image2165115615970640, label144676670665317);
    var line144676670665316 = new kony.ui.Line({
        "id": "line144676670665316",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2165115615970641 = new kony.ui.Image2({
        "id": "image2165115615970641",
        "isVisible": true,
        "src": "icon_logout.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var label144676670670628 = new kony.ui.Label({
        "id": "label144676670670628",
        "isVisible": true,
        "text": "Logout.....",
        "skin": "lblOrganizerMenuItem"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 78
    }, {});
    var hbox144676670670627 = new kony.ui.Box({
        "id": "hbox144676670670627",
        "isVisible": true,
        "onClick": popMenu_hbox144676670670627_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 13,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670670627.add(
    image2165115615970641, label144676670670628);
    popMenu.add(
    hbox144676670670621, line144676670665306, hbox144676670670622, line144676670665308, hbox144676670670623, line144676670665310, hbox144676670670624, line144676670665312, hbox144676670670625, line144676670665314, hbox144676670670626, line144676670665316, hbox144676670670627);
};

function popMenuGlobals() {
    popMenu = new kony.ui.Popup({
        "id": "popMenu",
        "title": null,
        "transparencyBehindThePopup": 34,
        "skin": "popOrganizerDefault",
        "isModal": false,
        "addWidgets": addWidgetspopMenu
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