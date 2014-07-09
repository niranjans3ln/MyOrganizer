//Form JS File
function frmNewsHeadlines_link_onClick_seq0(eventobject, context) {
    frBrowser.browser.url = frmNewsHeadlines["segment2207222663165112"]["selectedItems"][0]["link"];
    frBrowser.show();
};

function addWidgetsfrmNewsHeadlines() {
    var segNewsbox = new kony.ui.Box({
        "id": "segNewsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 84
    }, {});
    var segNews = new kony.ui.SegmentedUI2({
        "id": "segNews",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "hbox150689006465240": "hbox150689006465240",
            "pubdate": "pubdate",
            "link": "link",
            "author": "author",
            "title": "title",
            "line207222663165120": "line207222663165120",
            "vbox150689006465241": "vbox150689006465241",
            "vbox150689006465242": "vbox150689006465242",
            "description": "description",
            "line207222663165121": "line207222663165121",
            "line207222663165119": "line207222663165119",
            "datetime": "datetime",
            "lblURLText": "lblURLText"
        },
        "rowTemplate": segNewsbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
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
        "containerWeight": 84
    }, {});
    var title = new kony.ui.Label({
        "id": "title",
        "isVisible": true,
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
        "containerWeight": 7
    }, {});
    var description = new kony.ui.RichText({
        "id": "description",
        "isVisible": true,
        "skin": "richNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 33
    }, {});
    var lblURLText = new kony.ui.Label({
        "id": "lblURLText",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox150689006465241 = new kony.ui.Box({
        "id": "vbox150689006465241",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 11,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox150689006465241.add(
    lblURLText);
    var link = new kony.ui.Link({
        "id": "link",
        "isVisible": true,
        "onClick": frmNewsHeadlines_link_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox150689006465242 = new kony.ui.Box({
        "id": "vbox150689006465242",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 89,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox150689006465242.add(
    link);
    var hbox150689006465240 = new kony.ui.Box({
        "id": "hbox150689006465240",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 7,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox150689006465240.add(
    vbox150689006465241, vbox150689006465242);
    var author = new kony.ui.Label({
        "id": "author",
        "isVisible": true,
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
        "containerWeight": 7
    }, {});
    var pubdate = new kony.ui.Label({
        "id": "pubdate",
        "isVisible": true,
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
        "containerWeight": 7
    }, {});
    var datetime = new kony.ui.Label({
        "id": "datetime",
        "isVisible": true,
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
        "containerWeight": 7
    }, {});
    var line207222663165119 = new kony.ui.Line({
        "id": "line207222663165119",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var line207222663165120 = new kony.ui.Line({
        "id": "line207222663165120",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var line207222663165121 = new kony.ui.Line({
        "id": "line207222663165121",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    segNewsbox.add(
    title, description, hbox150689006465240, author, pubdate, datetime, line207222663165119, line207222663165120, line207222663165121);
    frmNewsHeadlines.add(
    segNews);
};

function frmNewsHeadlinesGlobals() {
    var MenuId = [];
    frmNewsHeadlines = new kony.ui.Form2({
        "id": "frmNewsHeadlines",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmNewsHeadlines
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