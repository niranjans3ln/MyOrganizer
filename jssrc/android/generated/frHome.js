//Form JS File
function frHome_frHome_init_seq0(eventobject, neworientation) {
    setSessionForm.call(this, "frHome");
};

function frHome_vbox1624314468110932_onClick_seq0(eventobject) {
    callNewsService.call(this);
};

function frHome_image2162431446882797_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function frHome_vbox1624314468111334_onClick_seq0(eventobject) {
    getWeatherReport.call(this);
};

function frHome_image21624314468111336_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function frHome_vbox1624314468111606_onClick_seq0(eventobject) {
    frForex.show();
};

function frHome_image21624314468111608_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function frHome_vbox1624314468111782_onClick_seq0(eventobject) {
    getStockQuotes.call(this);
};

function frHome_image21624314468111784_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function frHome_vbox1624314468111966_onClick_seq0(eventobject) {
    frMaps.show();
};

function frHome_image21624314468111968_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function frHome_vbox1624314468112110_onClick_seq0(eventobject) {
    launchGmailApp.call(this);
};

function frHome_image21624314468112112_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function frHome_vbox1624314468112238_onClick_seq0(eventobject) {
    frNote.show();
};

function frHome_image21624314468112240_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function frHome_vbox1624314468112718_onClick_seq0(eventobject) {
    frForgotPassword.show();
};

function frHome_image21624314468112720_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function frHome_vbox1426419453145722_onClick_seq0(eventobject) {
    scanBarcode.call(this);
};

function frHome_image21426419453145724_onDownloadComplete_seq0(eventobject, imagesrc, issuccess) {
    frNews.show();
};

function addWidgetsfrHome() {
    var image21624314468106032 = new kony.ui.Image2({
        "id": "image21624314468106032",
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
    var image2162431446886534 = new kony.ui.Image2({
        "id": "image2162431446886534",
        "isVisible": true,
        "src": "icon_news.png",
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
        "containerWeight": 12
    }, {});
    var label162431446882796 = new kony.ui.Label({
        "id": "label162431446882796",
        "isVisible": true,
        "text": "News",
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
        "containerWeight": 78
    }, {});
    var image2162431446882797 = new kony.ui.Image2({
        "id": "image2162431446882797",
        "isVisible": true,
        "onDownloadComplete": frHome_image2162431446882797_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1624314468110932 = new kony.ui.Box({
        "id": "vbox1624314468110932",
        "isVisible": true,
        "onClick": frHome_vbox1624314468110932_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 10,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1624314468110932.add(
    image2162431446882797);
    var hbox162431446870645 = new kony.ui.Box({
        "id": "hbox162431446870645",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox162431446870645.add(
    image2162431446886534, label162431446882796, vbox1624314468110932);
    var image21624314468107521 = new kony.ui.Image2({
        "id": "image21624314468107521",
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
    var image21426419453145744 = new kony.ui.Image2({
        "id": "image21426419453145744",
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
        "containerWeight": 1
    }, {});
    var line162431446897727 = new kony.ui.Line({
        "id": "line162431446897727",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2162431446897734 = new kony.ui.Image2({
        "id": "image2162431446897734",
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
        "containerWeight": 1
    }, {});
    var image2162431446888086 = new kony.ui.Image2({
        "id": "image2162431446888086",
        "isVisible": true,
        "src": "icon_weather.png",
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
        "containerWeight": 12
    }, {});
    var label162431446888082 = new kony.ui.Label({
        "id": "label162431446888082",
        "isVisible": true,
        "text": "Weather",
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
        "containerWeight": 79
    }, {});
    var image21624314468111336 = new kony.ui.Image2({
        "id": "image21624314468111336",
        "isVisible": true,
        "onDownloadComplete": frHome_image21624314468111336_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1624314468111334 = new kony.ui.Box({
        "id": "vbox1624314468111334",
        "isVisible": true,
        "onClick": frHome_vbox1624314468111334_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1624314468111334.add(
    image21624314468111336);
    var hbox162431446888080 = new kony.ui.Box({
        "id": "hbox162431446888080",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox162431446888080.add(
    image2162431446888086, label162431446888082, vbox1624314468111334);
    var image21624314468107531 = new kony.ui.Image2({
        "id": "image21624314468107531",
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
    var line162431446897728 = new kony.ui.Line({
        "id": "line162431446897728",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2162431446897764 = new kony.ui.Image2({
        "id": "image2162431446897764",
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
        "containerWeight": 1
    }, {});
    var image2162431446888310 = new kony.ui.Image2({
        "id": "image2162431446888310",
        "isVisible": true,
        "src": "icon_forex.png",
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
        "containerWeight": 12
    }, {});
    var label162431446888306 = new kony.ui.Label({
        "id": "label162431446888306",
        "isVisible": true,
        "text": "Forex Rates",
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
        "containerWeight": 79
    }, {});
    var image21624314468111608 = new kony.ui.Image2({
        "id": "image21624314468111608",
        "isVisible": true,
        "onDownloadComplete": frHome_image21624314468111608_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1624314468111606 = new kony.ui.Box({
        "id": "vbox1624314468111606",
        "isVisible": true,
        "onClick": frHome_vbox1624314468111606_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1624314468111606.add(
    image21624314468111608);
    var hbox162431446888304 = new kony.ui.Box({
        "id": "hbox162431446888304",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox162431446888304.add(
    image2162431446888310, label162431446888306, vbox1624314468111606);
    var image21624314468107855 = new kony.ui.Image2({
        "id": "image21624314468107855",
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
    var line162431446897729 = new kony.ui.Line({
        "id": "line162431446897729",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2162431446897744 = new kony.ui.Image2({
        "id": "image2162431446897744",
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
        "containerWeight": 1
    }, {});
    var image2162431446888694 = new kony.ui.Image2({
        "id": "image2162431446888694",
        "isVisible": true,
        "src": "icon_stock.png",
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
        "containerWeight": 12
    }, {});
    var label162431446888690 = new kony.ui.Label({
        "id": "label162431446888690",
        "isVisible": true,
        "text": "Stock Quotes",
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
        "containerWeight": 79
    }, {});
    var image21624314468111784 = new kony.ui.Image2({
        "id": "image21624314468111784",
        "isVisible": true,
        "onDownloadComplete": frHome_image21624314468111784_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1624314468111782 = new kony.ui.Box({
        "id": "vbox1624314468111782",
        "isVisible": true,
        "onClick": frHome_vbox1624314468111782_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1624314468111782.add(
    image21624314468111784);
    var hbox162431446888688 = new kony.ui.Box({
        "id": "hbox162431446888688",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox162431446888688.add(
    image2162431446888694, label162431446888690, vbox1624314468111782);
    var image21624314468107971 = new kony.ui.Image2({
        "id": "image21624314468107971",
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
    var line162431446897730 = new kony.ui.Line({
        "id": "line162431446897730",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2162431446897992 = new kony.ui.Image2({
        "id": "image2162431446897992",
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
        "containerWeight": 1
    }, {});
    var image2162431446889046 = new kony.ui.Image2({
        "id": "image2162431446889046",
        "isVisible": true,
        "src": "icon_maps.png",
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
        "containerWeight": 12
    }, {});
    var label162431446889042 = new kony.ui.Label({
        "id": "label162431446889042",
        "isVisible": true,
        "text": "Maps",
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
        "containerWeight": 79
    }, {});
    var image21624314468111968 = new kony.ui.Image2({
        "id": "image21624314468111968",
        "isVisible": true,
        "onDownloadComplete": frHome_image21624314468111968_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1624314468111966 = new kony.ui.Box({
        "id": "vbox1624314468111966",
        "isVisible": true,
        "onClick": frHome_vbox1624314468111966_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1624314468111966.add(
    image21624314468111968);
    var hbox162431446889040 = new kony.ui.Box({
        "id": "hbox162431446889040",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox162431446889040.add(
    image2162431446889046, label162431446889042, vbox1624314468111966);
    var image21624314468108659 = new kony.ui.Image2({
        "id": "image21624314468108659",
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
    var line162431446897731 = new kony.ui.Line({
        "id": "line162431446897731",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2162431446898068 = new kony.ui.Image2({
        "id": "image2162431446898068",
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
        "containerWeight": 1
    }, {});
    var image2162431446889734 = new kony.ui.Image2({
        "id": "image2162431446889734",
        "isVisible": true,
        "src": "icon_gmail.png",
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
        "containerWeight": 12
    }, {});
    var label162431446889730 = new kony.ui.Label({
        "id": "label162431446889730",
        "isVisible": true,
        "text": "Gmail",
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
        "containerWeight": 79
    }, {});
    var image21624314468112112 = new kony.ui.Image2({
        "id": "image21624314468112112",
        "isVisible": true,
        "onDownloadComplete": frHome_image21624314468112112_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1624314468112110 = new kony.ui.Box({
        "id": "vbox1624314468112110",
        "isVisible": true,
        "onClick": frHome_vbox1624314468112110_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1624314468112110.add(
    image21624314468112112);
    var hbox162431446889728 = new kony.ui.Box({
        "id": "hbox162431446889728",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox162431446889728.add(
    image2162431446889734, label162431446889730, vbox1624314468112110);
    var image21624314468108455 = new kony.ui.Image2({
        "id": "image21624314468108455",
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
    var line162431446897732 = new kony.ui.Line({
        "id": "line162431446897732",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2162431446898156 = new kony.ui.Image2({
        "id": "image2162431446898156",
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
        "containerWeight": 1
    }, {});
    var image2162431446890150 = new kony.ui.Image2({
        "id": "image2162431446890150",
        "isVisible": true,
        "src": "icon_notepad.png",
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
        "containerWeight": 12
    }, {});
    var label162431446890146 = new kony.ui.Label({
        "id": "label162431446890146",
        "isVisible": true,
        "text": "Write Note",
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
        "containerWeight": 79
    }, {});
    var image21624314468112240 = new kony.ui.Image2({
        "id": "image21624314468112240",
        "isVisible": true,
        "onDownloadComplete": frHome_image21624314468112240_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1624314468112238 = new kony.ui.Box({
        "id": "vbox1624314468112238",
        "isVisible": true,
        "onClick": frHome_vbox1624314468112238_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1624314468112238.add(
    image21624314468112240);
    var hbox162431446890144 = new kony.ui.Box({
        "id": "hbox162431446890144",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox162431446890144.add(
    image2162431446890150, label162431446890146, vbox1624314468112238);
    var image21624314468108171 = new kony.ui.Image2({
        "id": "image21624314468108171",
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
    var line162431446897733 = new kony.ui.Line({
        "id": "line162431446897733",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image2162431446898252 = new kony.ui.Image2({
        "id": "image2162431446898252",
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
        "containerWeight": 1
    }, {});
    var image2162431446890454 = new kony.ui.Image2({
        "id": "image2162431446890454",
        "isVisible": true,
        "src": "icon_expenses.jpg",
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
        "containerWeight": 12
    }, {});
    var label162431446890450 = new kony.ui.Label({
        "id": "label162431446890450",
        "isVisible": true,
        "text": "Expense Register",
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
        "containerWeight": 79
    }, {});
    var image21624314468112720 = new kony.ui.Image2({
        "id": "image21624314468112720",
        "isVisible": true,
        "onDownloadComplete": frHome_image21624314468112720_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1624314468112718 = new kony.ui.Box({
        "id": "vbox1624314468112718",
        "isVisible": true,
        "onClick": frHome_vbox1624314468112718_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1624314468112718.add(
    image21624314468112720);
    var hbox162431446890448 = new kony.ui.Box({
        "id": "hbox162431446890448",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox162431446890448.add(
    image2162431446890454, label162431446890450, vbox1624314468112718);
    var image21624314468108399 = new kony.ui.Image2({
        "id": "image21624314468108399",
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
    var line162431446898391 = new kony.ui.Line({
        "id": "line162431446898391",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    var image21426419453145740 = new kony.ui.Image2({
        "id": "image21426419453145740",
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
    var image21426419453145720 = new kony.ui.Image2({
        "id": "image21426419453145720",
        "isVisible": true,
        "src": "icon_barcode.jpg",
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
        "containerWeight": 12
    }, {});
    var label1426419453145718 = new kony.ui.Label({
        "id": "label1426419453145718",
        "isVisible": true,
        "text": "Barcode Scanner",
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
        "containerWeight": 79
    }, {});
    var image21426419453145724 = new kony.ui.Image2({
        "id": "image21426419453145724",
        "isVisible": true,
        "onDownloadComplete": frHome_image21426419453145724_onDownloadComplete_seq0,
        "src": "icon_chevron_right2.png",
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
        "containerWeight": 100
    }, {});
    var vbox1426419453145722 = new kony.ui.Box({
        "id": "vbox1426419453145722",
        "isVisible": true,
        "onClick": frHome_vbox1426419453145722_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 9,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1426419453145722.add(
    image21426419453145724);
    var hbox1426419453145716 = new kony.ui.Box({
        "id": "hbox1426419453145716",
        "isVisible": true,
        "skin": "hbxOrganizerDefault",
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
    hbox1426419453145716.add(
    image21426419453145720, label1426419453145718, vbox1426419453145722);
    var line1426419453145736 = new kony.ui.Line({
        "id": "line1426419453145736",
        "isVisible": true,
        "skin": "lineNormal"
    }, {
        "thickness": 1,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false
    }, {});
    frHome.add(
    image21624314468106032, hbox162431446870645, image21624314468107521, image21426419453145744, line162431446897727, image2162431446897734, hbox162431446888080, image21624314468107531, line162431446897728, image2162431446897764, hbox162431446888304, image21624314468107855, line162431446897729, image2162431446897744, hbox162431446888688, image21624314468107971, line162431446897730, image2162431446897992, hbox162431446889040, image21624314468108659, line162431446897731, image2162431446898068, hbox162431446889728, image21624314468108455, line162431446897732, image2162431446898156, hbox162431446890144, image21624314468108171, line162431446897733, image2162431446898252, hbox162431446890448, image21624314468108399, line162431446898391, image21426419453145740, hbox1426419453145716, line1426419453145736);
};

function frHomeGlobals() {
    var MenuId = [];
    frHome = new kony.ui.Form2({
        "id": "frHome",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox20788384265298, hbox165115615970632],
        "footers": [hbox165115615970629],
        "enabledForIdleTimeout": false,
        "skin": "frmOrganizer",
        "init": frHome_frHome_init_seq0,
        "addWidgets": addWidgetsfrHome
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