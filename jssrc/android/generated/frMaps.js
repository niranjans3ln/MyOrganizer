//Form JS File
function addWidgetsfrMaps() {
    var map1624314468110931 = new kony.ui.Map({
        "id": "map1624314468110931",
        "isVisible": true,
        "mapKey": "AIzaSyAFNlKwCDNA6DCECCj5nKjowjUjuMSrMnY",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": "icon_maps.png",
        "screenLevelWidget": true,
        "calloutWidth": 80
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "showZoomControl": true,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 15
    });
    frMaps.add(
    map1624314468110931);
};

function frMapsGlobals() {
    var MenuId = [];
    frMaps = new kony.ui.Form2({
        "id": "frMaps",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox20788384265298, hbox165115615970632],
        "footers": [hbox165115615970629],
        "enabledForIdleTimeout": false,
        "skin": "ftrOrganizerDefault",
        "addWidgets": addWidgetsfrMaps
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