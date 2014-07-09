//Template File
function hdrCommon_vbox150596654344637_onClick_seq0(eventobject) {
    frmHome.show();
};

function initializehdrCommon() {
    hbox150596654342855 = new kony.ui.BoxTemplate({
        "id": "hbox150596654342855",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox150596654342855
    }, {
        "containerWeight": 17,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox150596654342855() {
        var lblUserName = new kony.ui.Label({
            "id": "lblUserName",
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
            "containerWeight": 93
        }, {});
        var vbox150596654344196 = new kony.ui.Box({
            "id": "vbox150596654344196",
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
        vbox150596654344196.add(
        lblUserName);
        var lblLogout = new kony.ui.Label({
            "id": "lblLogout",
            "isVisible": true,
            "text": "Logout.....",
            "skin": "lblNormal"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 93
        }, {});
        var vbox150596654344637 = new kony.ui.Box({
            "id": "vbox150596654344637",
            "isVisible": true,
            "onClick": hdrCommon_vbox150596654344637_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 14,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbox150596654344637.add(
        lblLogout);
        hbox150596654342855.add(
        vbox150596654344196, vbox150596654344637);
    }
};