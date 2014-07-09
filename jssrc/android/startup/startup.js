//startup.js file
function MyOrganizerpreappinit_seq0(params) {
    validateDBOnStartup.call(this);
};
var globalhttpheaders = {};
var appConfig = {
    appId: "MyOrganizer",
    appName: "MyOrganizer",
    appVersion: "1.1.0",
    platformVersion: null,
    serverIp: "env-6190797.j.layershift.co.uk",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://env-6190797.j.layershift.co.uk:80/middleware/MWServlet",
    secureurl: "https://env-6190797.j.layershift.co.uk:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrAllPages();
    initializehdrCommon();
    initializehdrLoginPage();
    initializehdrWithLogo();
    initializeftrAllPages();
    initializeftrLoginPage();
    frBlockingScreenGlobals();
    frBrowserGlobals();
    frBrowserNewUserGlobals();
    frContactDevGlobals();
    frCreateProfileGlobals();
    frExpensesGlobals();
    frForexGlobals();
    frForgotPasswordGlobals();
    frHomeGlobals();
    frLoginGlobals();
    frMailGlobals();
    frManageNotesGlobals();
    frMapsGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    frmMainMenuGlobals();
    frmNewsHeadlinesGlobals();
    frmSegmentDemoGlobals();
    frNewsGlobals();
    frNoteGlobals();
    frNotesViewGlobals();
    frNotesViewIndividualGlobals();
    frProfileGlobals();
    frProfileCreateGlobals();
    frSettingsGlobals();
    frStockGlobals();
    frWeatherGlobals();
    popBlockingScreenGlobals();
    popFailMessageGlobals();
    popLogoutGlobals();
    popMenuGlobals();
    popMessageGlobals();
    popSuccessMessageGlobals();
    popThemeGlobals();
    popVersionGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        preappinit: validateDBOnStartup,
        init: appInit,
        showstartupform: function() {
            frLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_barcodeAndroid"
    });
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();