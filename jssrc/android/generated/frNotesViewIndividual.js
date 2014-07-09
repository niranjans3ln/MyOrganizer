//Form JS File
function frNotesViewIndividual_frNotesViewIndividual_init_seq0(eventobject, neworientation) {
    setSessionForm.call(this, "frNotesViewIndividual");
};

function frNotesViewIndividual_btnBack_onClick_seq0(eventobject) {
    frNotesView.show();
};

function addWidgetsfrNotesViewIndividual() {
    var image21605938456181808 = new kony.ui.Image2({
        "id": "image21605938456181808",
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
        "containerWeight": 6
    }, {});
    var lblDate = new kony.ui.Label({
        "id": "lblDate",
        "isVisible": true,
        "text": "Date :",
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
        "containerWeight": 8
    }, {});
    var image21605938456181809 = new kony.ui.Image2({
        "id": "image21605938456181809",
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
        "containerWeight": 6
    }, {});
    var lblSubject = new kony.ui.Label({
        "id": "lblSubject",
        "isVisible": true,
        "text": "Subject :",
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
        "containerWeight": 8
    }, {});
    var image21605938456181812 = new kony.ui.Image2({
        "id": "image21605938456181812",
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
        "containerWeight": 6
    }, {});
    var areaNote = new kony.ui.RichText({
        "id": "areaNote",
        "isVisible": true,
        "text": null,
        "skin": "richOrganizerDefault"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {});
    var btnBack = new kony.ui.Button({
        "id": "btnBack",
        "isVisible": true,
        "text": "Go Back.....",
        "skin": "btnOrganizerDefault",
        "focusSkin": "btnFocus",
        "onClick": frNotesViewIndividual_btnBack_onClick_seq0
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
    var vbox1605938456181816 = new kony.ui.Box({
        "id": "vbox1605938456181816",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 21,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1605938456181816.add(
    btnBack);
    var hbox1605938456181815 = new kony.ui.Box({
        "id": "hbox1605938456181815",
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
    hbox1605938456181815.add(
    vbox1605938456181816);
    frNotesViewIndividual.add(
    image21605938456181808, lblDate, image21605938456181809, lblSubject, image21605938456181812, areaNote, hbox1605938456181815);
};

function frNotesViewIndividualGlobals() {
    var MenuId = [];
    frNotesViewIndividual = new kony.ui.Form2({
        "id": "frNotesViewIndividual",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox20788384265298, hbox165115615970632],
        "footers": [hbox165115615970629],
        "enabledForIdleTimeout": false,
        "skin": "ftrOrganizerDefault",
        "init": frNotesViewIndividual_frNotesViewIndividual_init_seq0,
        "addWidgets": addWidgetsfrNotesViewIndividual
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