//Form JS File
function frNotesView_frNotesView_init_seq0(eventobject, neworientation) {
    setSessionForm.call(this, "frNotesView");
    getAllNotes.call(this);
};

function frNotesView_hbox1605938456180140_onClick_seq0(eventobject) {
    getNote.call(this);
};

function frNotesView_hbox1605938456179704_onClick_seq0(eventobject, context) {
    getNote.call(this);
};

function addWidgetsfrNotesView() {
    var image21605938456181813 = new kony.ui.Image2({
        "id": "image21605938456181813",
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
        "containerWeight": 4
    }, {});
    var label1605938456180142 = new kony.ui.Label({
        "id": "label1605938456180142",
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
        "containerWeight": 28
    }, {});
    var label1605938456180144 = new kony.ui.Label({
        "id": "label1605938456180144",
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
        "containerWeight": 72
    }, {});
    var hbox1605938456180140 = new kony.ui.Box({
        "id": "hbox1605938456180140",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
        "onClick": frNotesView_hbox1605938456180140_onClick_seq0,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 8,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1605938456180140.add(
    label1605938456180142, label1605938456180144);
    var image21605938456181814 = new kony.ui.Image2({
        "id": "image21605938456181814",
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
    var segNotesbox = new kony.ui.Box({
        "id": "segNotesbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 45
    }, {});
    var segNotes = new kony.ui.SegmentedUI2({
        "id": "segNotes",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "selectedDate": "selectedDate",
            "hbox1605938456179704": "hbox1605938456179704",
            "line1605938456181807": "line1605938456181807",
            "selectedSubject": "selectedSubject"
        },
        "rowTemplate": segNotesbox,
        "widgetSkin": "segOrganizerDefault",
        "rowSkin": "segOrganizerRowSkin",
        "rowFocusSkin": "seg2Focus",
        "alternateRowSkin": "segOrganizerAltRowSkin",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        }
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {});
    var line1605938456181807 = new kony.ui.Line({
        "id": "line1605938456181807",
        "isVisible": true,
        "skin": "lineOrganizerDefault"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var selectedDate = new kony.ui.Label({
        "id": "selectedDate",
        "isVisible": true,
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
        "containerWeight": 28
    }, {});
    var selectedSubject = new kony.ui.Label({
        "id": "selectedSubject",
        "isVisible": true,
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
        "containerWeight": 72
    }, {});
    var hbox1605938456179704 = new kony.ui.Box({
        "id": "hbox1605938456179704",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
        "onClick": frNotesView_hbox1605938456179704_onClick_seq0,
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
    hbox1605938456179704.add(
    selectedDate, selectedSubject);
    segNotesbox.add(
    line1605938456181807, hbox1605938456179704);
    frNotesView.add(
    image21605938456181813, hbox1605938456180140, image21605938456181814, segNotes);
};

function frNotesViewGlobals() {
    var MenuId = [];
    frNotesView = new kony.ui.Form2({
        "id": "frNotesView",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox20788384265298, hbox165115615970632],
        "footers": [hbox165115615970629],
        "enabledForIdleTimeout": false,
        "skin": "ftrOrganizerDefault",
        "init": frNotesView_frNotesView_init_seq0,
        "addWidgets": addWidgetsfrNotesView
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