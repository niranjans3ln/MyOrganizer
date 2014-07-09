//Form JS File
function frmMainMenu_link150596654316709_onClick_seq0(eventobject) {
    /* 
 var foxnews_inputparam = {};
 foxnews_inputparam["serviceID"] = "foxnews";
 
 
foxnews_inputparam["httpheaders"] = {};

foxnews_inputparam["httpconfig"] = {};

 



 foxnews = appmiddlewareinvoker (foxnews_inputparam, false);
 
 */
    /* 
 






















 if(foxnews != null && foxnews != undefined && foxnews["list"] != null && foxnews["list"] != undefined ){
var frmNewsHeadlines_segNews_temp = [] ;
for (var i1 =0 ; i1< foxnews["list"].length; i1++) {
frmNewsHeadlines_segNews_temp.push( {
 
 "author" : foxnews["list"][i1]["author"]
 ,
 
 
 "title" : foxnews["list"][i1]["title"]
 ,
 
 
 "pubdate" : foxnews["list"][i1]["pubDate"]
 ,
 
 
 "description" : foxnews["list"][i1]["description"]
 ,
 
 
 "link" : foxnews["list"][i1]["link"]
 ,
 
 
 "datetime" : foxnews["list"][i1]["datetime"]
 
} )
}
 frmNewsHeadlines.segNews.setData(frmNewsHeadlines_segNews_temp);
 

 }


frmNewsHeadlines.show();
	
 */
    callNewsService.call(this);
};

function frmMainMenu_link150596654322264_onClick_seq0(eventobject) {
    frmSegmentDemo.show();
};

function frmMainMenu_link150596654322344_onClick_seq0(eventobject) {
    frBrowser.browser.url = 'http://m.yahoo.com';
    frBrowser.show();
};

function addWidgetsfrmMainMenu() {
    var label150596654319770 = new kony.ui.Label({
        "id": "label150596654319770",
        "isVisible": true,
        "text": "Main Menu Page",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var label150596654316708 = new kony.ui.Label({
        "id": "label150596654316708",
        "isVisible": true,
        "text": "News Service",
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
        "containerWeight": 100
    }, {});
    var vbox150596654313592 = new kony.ui.Box({
        "id": "vbox150596654313592",
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
    vbox150596654313592.add(
    label150596654316708);
    var link150596654316709 = new kony.ui.Link({
        "id": "link150596654316709",
        "isVisible": true,
        "text": "Click Me Please.....",
        "onClick": frmMainMenu_link150596654316709_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox150596654314799 = new kony.ui.Box({
        "id": "vbox150596654314799",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 60,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox150596654314799.add(
    link150596654316709);
    var hbox150596654311737 = new kony.ui.Box({
        "id": "hbox150596654311737",
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
    hbox150596654311737.add(
    vbox150596654313592, vbox150596654314799);
    var label150596654322260 = new kony.ui.Label({
        "id": "label150596654322260",
        "isVisible": true,
        "text": "Weather Service",
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
        "containerWeight": 100
    }, {});
    var vbox150596654322258 = new kony.ui.Box({
        "id": "vbox150596654322258",
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
    vbox150596654322258.add(
    label150596654322260);
    var link150596654322264 = new kony.ui.Link({
        "id": "link150596654322264",
        "isVisible": true,
        "text": "Click Me Please.....",
        "onClick": frmMainMenu_link150596654322264_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox150596654322262 = new kony.ui.Box({
        "id": "vbox150596654322262",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 60,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox150596654322262.add(
    link150596654322264);
    var hbox150596654322256 = new kony.ui.Box({
        "id": "hbox150596654322256",
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
    hbox150596654322256.add(
    vbox150596654322258, vbox150596654322262);
    var label150596654322300 = new kony.ui.Label({
        "id": "label150596654322300",
        "isVisible": true,
        "text": "Forex Service",
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
        "containerWeight": 100
    }, {});
    var vbox150596654322298 = new kony.ui.Box({
        "id": "vbox150596654322298",
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
    vbox150596654322298.add(
    label150596654322300);
    var link150596654322304 = new kony.ui.Link({
        "id": "link150596654322304",
        "isVisible": true,
        "text": "Click Me Please....."
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox150596654322302 = new kony.ui.Box({
        "id": "vbox150596654322302",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 60,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox150596654322302.add(
    link150596654322304);
    var hbox150596654322296 = new kony.ui.Box({
        "id": "hbox150596654322296",
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
    hbox150596654322296.add(
    vbox150596654322298, vbox150596654322302);
    var label150596654322340 = new kony.ui.Label({
        "id": "label150596654322340",
        "isVisible": true,
        "text": "Stocks Service",
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
        "containerWeight": 100
    }, {});
    var vbox150596654322338 = new kony.ui.Box({
        "id": "vbox150596654322338",
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
    vbox150596654322338.add(
    label150596654322340);
    var link150596654322344 = new kony.ui.Link({
        "id": "link150596654322344",
        "isVisible": true,
        "text": "Click Me Please.....",
        "onClick": frmMainMenu_link150596654322344_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var vbox150596654322342 = new kony.ui.Box({
        "id": "vbox150596654322342",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 60,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox150596654322342.add(
    link150596654322344);
    var hbox150596654322336 = new kony.ui.Box({
        "id": "hbox150596654322336",
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
    hbox150596654322336.add(
    vbox150596654322338, vbox150596654322342);
    frmMainMenu.add(
    label150596654319770, hbox150596654311737, hbox150596654322256, hbox150596654322296, hbox150596654322336);
};

function frmMainMenuGlobals() {
    var MenuId = [];
    frmMainMenu = new kony.ui.Form2({
        "id": "frmMainMenu",
        "title": null,
        "needAppMenu": true,
        "headers": [hbox150596654342855],
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmMainMenu
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