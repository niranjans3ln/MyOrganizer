//Form JS File
function frProfileCreate_frProfileCreate_init_seq0(eventobject, neworientation) {
    popBlockingScreen.show();
    frProfile.lblUserId.text = globalUserid;
    setSessionForm.call(this, "frProfile");
    var updateProfile_inputparam = {};
    updateProfile_inputparam["serviceID"] = "updateProfile";
    updateProfile_inputparam["httpheaders"] = {};
    updateProfile_inputparam["httpconfig"] = {};
    updateProfile = appmiddlewareinvoker(updateProfile_inputparam, false);
    popBlockingScreen.dismiss();
};

function frProfileCreate_link1605938456216681_onClick_seq0(eventobject) {
    frBrowserNewUser.show();
};

function addWidgetsfrProfileCreate() {
    var image21605938456198223 = new kony.ui.Image2({
        "id": "image21605938456198223",
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
        "containerWeight": 2
    }, {});
    var lblNote = new kony.ui.Label({
        "id": "lblNote",
        "isVisible": true,
        "text": "If you want to register a new user then please visit the following web page.....",
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
    var hbox1605938456198704 = new kony.ui.Box({
        "id": "hbox1605938456198704",
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
    hbox1605938456198704.add(
    lblNote);
    var image21605938456199827 = new kony.ui.Image2({
        "id": "image21605938456199827",
        "isVisible": true,
        "src": "transparent_5h.png",
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
        "containerWeight": 2
    }, {});
    var link1605938456216681 = new kony.ui.Link({
        "id": "link1605938456216681",
        "isVisible": true,
        "text": " Register New User Here.....",
        "skin": "lnkOrganizerDefault",
        "onClick": frProfileCreate_link1605938456216681_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 5
    }, {});
    var image21605938456237580 = new kony.ui.Image2({
        "id": "image21605938456237580",
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
        "containerWeight": 5
    }, {});
    var image21605938456237703 = new kony.ui.Image2({
        "id": "image21605938456237703",
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
        "containerWeight": 5
    }, {});
    var label1605938456237591 = new kony.ui.Label({
        "id": "label1605938456237591",
        "isVisible": true,
        "text": "If already registered and want to activate your account then..........",
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
        "containerWeight": 5
    }, {});
    var image21605938456237898 = new kony.ui.Image2({
        "id": "image21605938456237898",
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
        "containerWeight": 5
    }, {});
    var label1605938456238272 = new kony.ui.Label({
        "id": "label1605938456238272",
        "isVisible": true,
        "text": "User ID :",
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
        "containerWeight": 25
    }, {});
    var txtUserId = new kony.ui.TextBox2({
        "id": "txtUserId",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "txtOrganizerDefault",
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
        "containerWeight": 75
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var hbox1605938456238183 = new kony.ui.Box({
        "id": "hbox1605938456238183",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1605938456238183.add(
    label1605938456238272, txtUserId);
    var image21605938456239520 = new kony.ui.Image2({
        "id": "image21605938456239520",
        "isVisible": true,
        "src": "transparent_5h.png",
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
        "containerWeight": 5
    }, {});
    var label1605938456239153 = new kony.ui.Label({
        "id": "label1605938456239153",
        "isVisible": true,
        "text": "Secret Code :",
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
        "containerWeight": 25
    }, {});
    var txtSecretCode = new kony.ui.TextBox2({
        "id": "txtSecretCode",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "txtOrganizerDefault",
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
        "containerWeight": 75
    }, {
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var hbox1605938456239151 = new kony.ui.Box({
        "id": "hbox1605938456239151",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1605938456239151.add(
    label1605938456239153, txtSecretCode);
    var image21605938456246201 = new kony.ui.Image2({
        "id": "image21605938456246201",
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
        "containerWeight": 5
    }, {});
    var vbox1605938456182536 = new kony.ui.Box({
        "id": "vbox1605938456182536",
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
    vbox1605938456182536.add();
    var butGetPass = new kony.ui.Button({
        "id": "butGetPass",
        "isVisible": true,
        "text": "Activate Account",
        "skin": "btnOrganizerDefault",
        "focusSkin": "btnFocus"
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
        "containerWeight": 57
    }, {});
    var vbox1605938456182707 = new kony.ui.Box({
        "id": "vbox1605938456182707",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 34,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1605938456182707.add(
    butGetPass);
    var vbox1605938456187763 = new kony.ui.Box({
        "id": "vbox1605938456187763",
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
    vbox1605938456187763.add();
    var hbox1605938456182455 = new kony.ui.Box({
        "id": "hbox1605938456182455",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1605938456182455.add(
    vbox1605938456182536, vbox1605938456182707, vbox1605938456187763);
    frProfileCreate.add(
    image21605938456198223, hbox1605938456198704, image21605938456199827, link1605938456216681, image21605938456237580, image21605938456237703, label1605938456237591, image21605938456237898, hbox1605938456238183, image21605938456239520, hbox1605938456239151, image21605938456246201, hbox1605938456182455);
};

function frProfileCreateGlobals() {
    var MenuId = [];
    frProfileCreate = new kony.ui.Form2({
        "id": "frProfileCreate",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox162431446870642, hbox162431446870643],
        "footers": [hbox162431446870644],
        "enabledForIdleTimeout": false,
        "skin": "ftrOrganizerDefault",
        "init": frProfileCreate_frProfileCreate_init_seq0,
        "addWidgets": addWidgetsfrProfileCreate
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