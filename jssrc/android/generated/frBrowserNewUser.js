//Form JS File
function frBrowserNewUser_frBrowserNewUser_init_seq0(eventobject, neworientation) {
    setSessionForm.call(this, "frBrowser");
};

function addWidgetsfrBrowserNewUser() {
    var browser = new kony.ui.Browser({
        "id": "browser",
        "text": "Browser",
        "isVisible": true,
        "requestURLConfig": {
            "URL": "http://www.google.com/mail",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "detectTelNumber": true,
        "screenLevelWidget": false,
        "enableZoom": false
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    frBrowserNewUser.add(
    browser);
};

function frBrowserNewUserGlobals() {
    var MenuId = [];
    frBrowserNewUser = new kony.ui.Form2({
        "id": "frBrowserNewUser",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox162431446870642, hbox162431446870643],
        "footers": [hbox162431446870644],
        "enabledForIdleTimeout": false,
        "skin": "frmOrganizer",
        "init": frBrowserNewUser_frBrowserNewUser_init_seq0,
        "addWidgets": addWidgetsfrBrowserNewUser
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