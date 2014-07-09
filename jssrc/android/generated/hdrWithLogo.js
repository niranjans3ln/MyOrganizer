//Template File
function initializehdrWithLogo() {
    hbox156976714765281 = new kony.ui.BoxTemplate({
        "id": "hbox156976714765281",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbox156976714765281
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbox156976714765281() {
        var imgBackBtn = new kony.ui.Image2({
            "id": "imgBackBtn",
            "isVisible": true,
            "src": null,
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
            "containerWeight": 40
        }, {});
        var imgLogo = new kony.ui.Image2({
            "id": "imgLogo",
            "isVisible": true,
            "src": null,
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
            "containerWeight": 40
        }, {});
        hbox156976714765281.add(
        imgBackBtn, imgLogo);
    }
};