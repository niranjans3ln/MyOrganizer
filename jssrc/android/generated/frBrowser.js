//Form JS File
function frBrowser_frBrowser_init_seq0(eventobject, neworientation) {
    setSessionForm.call(this, "frBrowser");
};

function addWidgetsfrBrowser() {
    var browser = new kony.ui.Browser({
        "id": "browser",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true,
        "screenLevelWidget": false,
        "enableZoom": false
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    frBrowser.add(
    browser);
};

function frBrowserGlobals() {
    var MenuId = [];
    frBrowser = new kony.ui.Form2({
        "id": "frBrowser",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox20788384265298, hbox165115615970632],
        "footers": [hbox165115615970629],
        "enabledForIdleTimeout": false,
        "skin": "frmOrganizer",
        "init": frBrowser_frBrowser_init_seq0,
        "addWidgets": addWidgetsfrBrowser
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