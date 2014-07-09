//Form JS File
function frNews_frNews_init_seq0(eventobject, neworientation) {
    setSessionForm.call(this, "frNews");
};

function frNews_link_onClick_seq0(eventobject, context) {
    frBrowser.browser.url = frNews["segNews"]["selectedItems"][0]["link"];
    frBrowser.show();
};

function addWidgetsfrNews() {
    var label1622497217115926 = new kony.ui.Label({
        "id": "label1622497217115926",
        "isVisible": true,
        "text": "News Headlines - ",
        "skin": "lblOrganizerBlackBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox1622497217115929 = new kony.ui.Box({
        "id": "vbox1622497217115929",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 57,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1622497217115929.add(
    label1622497217115926);
    var label1622497217115928 = new kony.ui.Label({
        "id": "label1622497217115928",
        "isVisible": true,
        "text": " (www.foxnews.com)",
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
    var vbox1622497217115930 = new kony.ui.Box({
        "id": "vbox1622497217115930",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 43,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1622497217115930.add(
    label1622497217115928);
    var hbox1622497217115927 = new kony.ui.Box({
        "id": "hbox1622497217115927",
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
    hbox1622497217115927.add(
    vbox1622497217115929, vbox1622497217115930);
    var image21622497217115932 = new kony.ui.Image2({
        "id": "image21622497217115932",
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
    var segNewsbox = new kony.ui.Box({
        "id": "segNewsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 91
    }, {});
    var segNews = new kony.ui.SegmentedUI2({
        "id": "segNews",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "line1622497217115931": "line1622497217115931",
            "author": "author",
            "title": "title",
            "hbox150689006465240": "hbox150689006465240",
            "vbox150689006465241": "vbox150689006465241",
            "vbox150689006465242": "vbox150689006465242",
            "pubdate": "pubdate",
            "description": "description",
            "link": "link",
            "lblURLText": "lblURLText"
        },
        "rowTemplate": segNewsbox,
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
        "containerWeight": 91
    }, {});
    var line1622497217115931 = new kony.ui.Line({
        "id": "line1622497217115931",
        "isVisible": true,
        "skin": "lineOrganizerDefault"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var title = new kony.ui.Label({
        "id": "title",
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
        "containerWeight": 7
    }, {});
    var author = new kony.ui.Label({
        "id": "author",
        "isVisible": true,
        "skin": "lblOrganizerItalicSmall"
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
        "containerWeight": 30
    }, {});
    var lblURLText = new kony.ui.Label({
        "id": "lblURLText",
        "isVisible": true,
        "skin": "lblOrganizerDefault"
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
        "skin": "lnkOrganizerDefault",
        "onClick": frNews_link_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
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
    var pubdate = new kony.ui.Label({
        "id": "pubdate",
        "isVisible": true,
        "skin": "lblOrganizerItalicSmall"
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
    segNewsbox.add(
    line1622497217115931, title, author, description, hbox150689006465240, pubdate);
    frNews.add(
    hbox1622497217115927, image21622497217115932, segNews);
};

function frNewsGlobals() {
    var MenuId = [];
    frNews = new kony.ui.Form2({
        "id": "frNews",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox20788384265298, hbox165115615970632],
        "footers": [hbox165115615970629],
        "enabledForIdleTimeout": false,
        "skin": "frmOrganizer",
        "init": frNews_frNews_init_seq0,
        "addWidgets": addWidgetsfrNews
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