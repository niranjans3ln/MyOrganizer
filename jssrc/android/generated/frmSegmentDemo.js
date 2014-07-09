//Form JS File
function frmSegmentDemo_frmSegmentDemo_preshow_seq0(eventobject, neworientation) {
    var foxnews_inputparam = {};
    foxnews_inputparam["serviceID"] = "foxnews";
    foxnews_inputparam["httpheaders"] = {};
    foxnews_inputparam["httpconfig"] = {};
    foxnews = appmiddlewareinvoker(foxnews_inputparam, true);
    if (foxnews != null && foxnews != undefined && foxnews["list"] != null && foxnews["list"] != undefined) {
        var frmSegmentDemo_segment2165574397365271_temp = [];
        for (var i1 = 0; i1 < foxnews["list"].length; i1++) {
            frmSegmentDemo_segment2165574397365271_temp.push({
                "label165574397365277": foxnews["list"][i1]["author"],
                "button165574397365279": foxnews["list"][i1]["pubdate"],
                "label165574397365272": foxnews["list"][i1]["title"],
                "link165574397365274": foxnews["list"][i1]["link"]
            })
        }
        frmSegmentDemo.segment2165574397365271.setData(frmSegmentDemo_segment2165574397365271_temp);
    }
};

function addWidgetsfrmSegmentDemo() {
    var segment2165574397365271box = new kony.ui.Box({
        "id": "segment2165574397365271box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 100
    }, {});
    var segment2165574397365271 = new kony.ui.SegmentedUI2({
        "id": "segment2165574397365271",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label165574397365277": "label165574397365277",
            "line165574397365275": "line165574397365275",
            "line165574397365278": "line165574397365278",
            "button165574397365279": "button165574397365279",
            "line165574397365280": "line165574397365280",
            "label165574397365272": "label165574397365272",
            "line165574397365273": "line165574397365273",
            "link165574397365274": "link165574397365274"
        },
        "rowTemplate": segment2165574397365271box,
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
        "containerWeight": 100
    }, {});
    var label165574397365272 = new kony.ui.Label({
        "id": "label165574397365272",
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
        "containerWeight": 6
    }, {});
    var line165574397365273 = new kony.ui.Line({
        "id": "line165574397365273",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var link165574397365274 = new kony.ui.Link({
        "id": "link165574397365274",
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var line165574397365275 = new kony.ui.Line({
        "id": "line165574397365275",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var label165574397365277 = new kony.ui.Label({
        "id": "label165574397365277",
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
        "containerWeight": 6
    }, {});
    var line165574397365278 = new kony.ui.Line({
        "id": "line165574397365278",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var button165574397365279 = new kony.ui.Button({
        "id": "button165574397365279",
        "isVisible": true,
        "skin": "btnNormal",
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
        "containerWeight": 6
    }, {});
    var line165574397365280 = new kony.ui.Line({
        "id": "line165574397365280",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    segment2165574397365271box.add(
    label165574397365272, line165574397365273, link165574397365274, line165574397365275, label165574397365277, line165574397365278, button165574397365279, line165574397365280);
    frmSegmentDemo.add(
    segment2165574397365271);
};

function frmSegmentDemoGlobals() {
    var MenuId = [];
    frmSegmentDemo = new kony.ui.Form2({
        "id": "frmSegmentDemo",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmSegmentDemo_frmSegmentDemo_preshow_seq0,
        "addWidgets": addWidgetsfrmSegmentDemo
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