//Form JS File
function frStock_link_onClick_seq0(eventobject, context) {
    frBrowser.browser.url = frStock["segInternationalMarket"]["selectedItems"][0]["link"];
    frBrowser.show();
};

function addWidgetsfrStock() {
    var label1431156303145414 = new kony.ui.Label({
        "id": "label1431156303145414",
        "isVisible": true,
        "text": "International Markets News :",
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
        "containerWeight": 6
    }, {});
    var image21431156303145415 = new kony.ui.Image2({
        "id": "image21431156303145415",
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
    var line1431156303145416 = new kony.ui.Line({
        "id": "line1431156303145416",
        "isVisible": true,
        "skin": "lineOrganizerDefault"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var segInternationalMarketbox = new kony.ui.Box({
        "id": "segInternationalMarketbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 91
    }, {});
    var segInternationalMarket = new kony.ui.SegmentedUI2({
        "id": "segInternationalMarket",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "title": "title",
            "desc": "desc",
            "link": "link",
            "line1431156303145424": "line1431156303145424",
            "date": "date"
        },
        "rowTemplate": segInternationalMarketbox,
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
    var link = new kony.ui.Link({
        "id": "link",
        "isVisible": true,
        "skin": "lnkOrganizerDefault",
        "onClick": frStock_link_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var desc = new kony.ui.RichText({
        "id": "desc",
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
        "containerWeight": 11
    }, {});
    var date = new kony.ui.Label({
        "id": "date",
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
    var line1431156303145424 = new kony.ui.Line({
        "id": "line1431156303145424",
        "isVisible": true,
        "skin": "lineOrganizerDefault"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    segInternationalMarketbox.add(
    title, link, desc, date, line1431156303145424);
    frStock.add(
    label1431156303145414, image21431156303145415, line1431156303145416, segInternationalMarket);
};

function frStockGlobals() {
    var MenuId = [];
    frStock = new kony.ui.Form2({
        "id": "frStock",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox20788384265298, hbox165115615970632],
        "footers": [hbox165115615970629],
        "enabledForIdleTimeout": false,
        "skin": "ftrOrganizerDefault",
        "addWidgets": addWidgetsfrStock
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