//Form JS File
function frLogin_frLogin_init_seq0(eventobject, neworientation) {
    setSessionForm.call(this, "frLogin");
};

function frLogin_button144676670665338_onClick_seq0(eventobject) {
    validateLogin.call(this);
};

function frLogin_link144676670669699_onClick_seq0(eventobject) {
    frProfileCreate.show();
};

function frLogin_link144676670669898_onClick_seq0(eventobject) {
    frExpenses.show();
};

function addWidgetsfrLogin() {
    var label144676670668329 = new kony.ui.Label({
        "id": "label144676670668329",
        "isVisible": true,
        "text": "Welcome!!!!! This app is meant for your day to day activities like reminder, expense recorder, budget planner, notebook, news & weather tracker, forex & stock quote viewer and many more.",
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
    var hbox144676670665327 = new kony.ui.Box({
        "id": "hbox144676670665327",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670665327.add(
    label144676670668329);
    var line144676670665329 = new kony.ui.Line({
        "id": "line144676670665329",
        "isVisible": true,
        "skin": "lineOrganizerDefault"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2144676670665344 = new kony.ui.Image2({
        "id": "image2144676670665344",
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
        "containerWeight": 6
    }, {});
    var label144676670666019 = new kony.ui.Label({
        "id": "label144676670666019",
        "isVisible": true,
        "text": "Login ID : ",
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
        "containerWeight": 54
    }, {});
    var vbox144676670665554 = new kony.ui.Box({
        "id": "vbox144676670665554",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox144676670665554.add(
    label144676670666019);
    var txtUserId = new kony.ui.TextBox2({
        "id": "txtUserId",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var vbox144676670665556 = new kony.ui.Box({
        "id": "vbox144676670665556",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 60,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox144676670665556.add(
    txtUserId);
    var hbox144676670665552 = new kony.ui.Box({
        "id": "hbox144676670665552",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670665552.add(
    vbox144676670665554, vbox144676670665556);
    var label144676670666020 = new kony.ui.Label({
        "id": "label144676670666020",
        "isVisible": true,
        "text": "Password : ",
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
        "containerWeight": 54
    }, {});
    var vbox144676670665345 = new kony.ui.Box({
        "id": "vbox144676670665345",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox144676670665345.add(
    label144676670666020);
    var txtPassword = new kony.ui.TextBox2({
        "id": "txtPassword",
        "isVisible": true,
        "text": null,
        "secureTextEntry": true,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 50
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var vbox144676670665346 = new kony.ui.Box({
        "id": "vbox144676670665346",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 60,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox144676670665346.add(
    txtPassword);
    var hbox144676670665328 = new kony.ui.Box({
        "id": "hbox144676670665328",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670665328.add(
    vbox144676670665345, vbox144676670665346);
    var label144676670665333 = new kony.ui.Label({
        "id": "label144676670665333",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
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
    var vbox144676670665332 = new kony.ui.Box({
        "id": "vbox144676670665332",
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
    vbox144676670665332.add(
    label144676670665333);
    var line144676670665337 = new kony.ui.Line({
        "id": "line144676670665337",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var vbox144676670665334 = new kony.ui.Box({
        "id": "vbox144676670665334",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 68,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox144676670665334.add(
    line144676670665337);
    var label144676670665336 = new kony.ui.Label({
        "id": "label144676670665336",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
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
    var vbox144676670665335 = new kony.ui.Box({
        "id": "vbox144676670665335",
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
    vbox144676670665335.add(
    label144676670665336);
    var hbox144676670665331 = new kony.ui.Box({
        "id": "hbox144676670665331",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
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
    hbox144676670665331.add(
    vbox144676670665332, vbox144676670665334, vbox144676670665335);
    var label144676670665341 = new kony.ui.Label({
        "id": "label144676670665341",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 57
    }, {});
    var vbox144676670665339 = new kony.ui.Box({
        "id": "vbox144676670665339",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 27,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox144676670665339.add(
    label144676670665341);
    var button144676670665338 = new kony.ui.Button({
        "id": "button144676670665338",
        "isVisible": true,
        "text": null,
        "skin": "btnLogin",
        "focusSkin": "btnLoginFocused",
        "onClick": frLogin_button144676670665338_onClick_seq0
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
        "containerWeight": 40
    }, {});
    var label144676670665342 = new kony.ui.Label({
        "id": "label144676670665342",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 57
    }, {});
    var vbox144676670665340 = new kony.ui.Box({
        "id": "vbox144676670665340",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox144676670665340.add(
    label144676670665342);
    var hbox144676670665330 = new kony.ui.Box({
        "id": "hbox144676670665330",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox144676670665330.add(
    vbox144676670665339, button144676670665338, vbox144676670665340);
    var image2144676670669392 = new kony.ui.Image2({
        "id": "image2144676670669392",
        "isVisible": true,
        "src": "transparent_20h.png",
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
        "containerWeight": 6
    }, {});
    var link144676670669699 = new kony.ui.Link({
        "id": "link144676670669699",
        "isVisible": true,
        "text": "New User ? Register Here.....",
        "skin": "lnkOrganizerDefault",
        "onClick": frLogin_link144676670669699_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var image2144676670670620 = new kony.ui.Image2({
        "id": "image2144676670670620",
        "isVisible": true,
        "src": "transparent_20h.png",
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
        "containerWeight": 3
    }, {});
    var link144676670669898 = new kony.ui.Link({
        "id": "link144676670669898",
        "isVisible": true,
        "text": "Forgot Password?",
        "skin": "lnkOrganizerDefault",
        "onClick": frLogin_link144676670669898_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frLogin.add(
    hbox144676670665327, line144676670665329, image2144676670665344, hbox144676670665552, hbox144676670665328, hbox144676670665331, hbox144676670665330, image2144676670669392, link144676670669699, image2144676670670620, link144676670669898);
};

function frLoginGlobals() {
    var MenuId = [];
    frLogin = new kony.ui.Form2({
        "id": "frLogin",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox162431446870642, hbox162431446870643],
        "footers": [hbox162431446870644],
        "enabledForIdleTimeout": false,
        "skin": "frmOrganizer",
        "init": frLogin_frLogin_init_seq0,
        "addWidgets": addWidgetsfrLogin
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};