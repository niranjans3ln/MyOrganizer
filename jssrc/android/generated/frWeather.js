//Form JS File
function frWeather_link_onClick_seq0(eventobject, context) {
    frBrowser.browser.url = frWeather["segWeather"]["selectedItems"][0]["link"];
    frBrowser.show();
};

function addWidgetsfrWeather() {
    var lblHeader = new kony.ui.Label({
        "id": "lblHeader",
        "isVisible": true,
        "text": "Weather Report for : ",
        "skin": "lblOrganizerBlackBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1622497217145380 = new kony.ui.Box({
        "id": "vbox1622497217145380",
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
    vbox1622497217145380.add(
    lblHeader);
    var hbox1622497217145379 = new kony.ui.Box({
        "id": "hbox1622497217145379",
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
    hbox1622497217145379.add(
    vbox1622497217145380);
    var image21622497217145382 = new kony.ui.Image2({
        "id": "image21622497217145382",
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
        "containerWeight": 4
    }, {});
    var line1622497217145383 = new kony.ui.Line({
        "id": "line1622497217145383",
        "isVisible": true,
        "skin": "lineOrganizerDefault"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var segWeatherbox = new kony.ui.Box({
        "id": "segWeatherbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 89
    }, {});
    var segWeather = new kony.ui.SegmentedUI2({
        "id": "segWeather",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "title": "title",
            "description": "description",
            "link": "link",
            "hbox1622497217145387": "hbox1622497217145387",
            "lblURLText": "lblURLText"
        },
        "rowTemplate": segWeatherbox,
        "widgetSkin": "segOrganizerDefault",
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
        "containerWeight": 89
    }, {});
    var title = new kony.ui.Label({
        "id": "title",
        "isVisible": true,
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
        "containerWeight": 7
    }, {});
    var description = new kony.ui.RichText({
        "id": "description",
        "isVisible": true,
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
        "containerWeight": 26
    }, {});
    var lblURLText = new kony.ui.Label({
        "id": "lblURLText",
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
        "containerWeight": 11
    }, {});
    var link = new kony.ui.Link({
        "id": "link",
        "isVisible": true,
        "skin": "lnkOrganizerDefault",
        "onClick": frWeather_link_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 89
    }, {});
    var hbox1622497217145387 = new kony.ui.Box({
        "id": "hbox1622497217145387",
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
    hbox1622497217145387.add(
    lblURLText, link);
    segWeatherbox.add(
    title, description, hbox1622497217145387);
    frWeather.add(
    hbox1622497217145379, image21622497217145382, line1622497217145383, segWeather);
};

function frWeatherGlobals() {
    var MenuId = [];
    frWeather = new kony.ui.Form2({
        "id": "frWeather",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox20788384265298, hbox165115615970632],
        "footers": [hbox165115615970629],
        "enabledForIdleTimeout": false,
        "skin": "ftrOrganizerDefault",
        "addWidgets": addWidgetsfrWeather
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