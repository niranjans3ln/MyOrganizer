function callAsyncService(inputParam, handlerMethod) {
    kony.print("INPUT Parameters: " + inputParam);
    var resultObj = null;
    if (!inputParam.hasOwnProperty("httpconfig") || !inputParam.httpconfig.hasOwnProperty("timeout")) {
        inputParam["httpconfig"] = {
            timeout: 15
        };
    }
    kony.print(">>> callAsyncService [" + inputParam["serviceID"] + "]: NOT using SSL");
    resultObj = appmiddlewareinvokerasync(inputParam, handlerMethod);
    return resultObj;
}

function callServiceAsyncWithModifiedURL(url, inputParam, handlerMethod, info) {
    var resultObj = null;
    resultObj = kony.net.invokeServiceAsync(url, inputParam, handlerMethod, info)
    return resultObj;
}
//var abc = "12345";
function gotoPreviousForm() {
    var previousFormName = previousForm[currentFormIndex - 1]; //kony.application.getPreviousForm();
    currentFormIndex = currentFormIndex - 1;
    kony.print("previousFormName= " + previousFormName);
    kony.print("currentFormIndex= " + currentFormIndex);
    if (currentFormIndex >= 1) {
        kony.print("previousFormName= " + previousFormName);
        if (previousFormName == "frHome") {
            frHome.show();
        } else if (previousFormName == "frContactDev") {
            frContactDev.show();
        } else if (previousFormName == "frCreateProfile") {
            frCreateProfile.show();
        } else if (previousFormName == "frForex") {
            frForex.show();
        } else if (previousFormName == "frForgotPassword") {
            frForgotPassword.show();
        } else if (previousFormName == "frLogin") {
            frLogin.show();
        } else if (previousFormName == "frMail") {
            frMail.show();
        } else if (previousFormName == "frManageNotes") {
            frManageNotes.show();
        } else if (previousFormName == "frMaps") {
            frMaps.show();
        } else if (previousFormName == "frNews") {
            frNews.show();
        } else if (previousFormName == "frNote") {
            frNote.show();
        } else if (previousFormName == "frProfile") {
            frProfile.show();
        } else if (previousFormName == "frSettings") {
            frSettings.show();
        } else if (previousFormName == "frStock") {
            frStock.show();
        } else if (previousFormName == "frWeather") {
            frWeather.show();
        } else if (previousFormName == "frBrowser") {
            frBrowser.show();
        } else {
            logoutUser();
        }
    } else {
        //Defining basicConf parameter for alert
        //var basicConf = {message: "Unable to go 'back'. This is the first form.....",alertType: constants.ALERT_TYPE_INFO, alertTitle: "Alert !!!!!", yesLabel:"Yes", noLabel: "No", alertHandler: handle2};
        //Defining pspConf parameter for alert
        //var pspConf = {};
        //var novar = kony.ui.Alert(basicConf, pspConf);
        var alert_seq0_act1 = kony.ui.Alert({
            "message": "Unable to go 'BACK'. This is the starting page.....",
            "alertType": constants.ALERT_TYPE_ERROR,
            "alertTitle": "Alert !!!!!",
            "yesLabel": " OK ",
            "noLabel": "",
            "alertIcon": "icon.png",
            "alertHandler": handle2
        }, {});
    }
}

function handle2(response) {
    frLogin.show();
}

function setSessionForm(currentFormName) {
    if (formIndex == 0) {
        formIndex++;
        currentFormIndex = formIndex;
        currentForm[currentFormIndex] = currentFormName;
    } else {
        currentFormIndex = formIndex;
        previousForm[currentFormIndex] = currentForm[currentFormIndex];
        formIndex++;
        currentFormIndex = formIndex;
        currentForm[currentFormIndex] = currentFormName;
    }
    kony.print("currentFormName= " + currentFormName);
    kony.print("currentFormIndex= " + currentFormIndex);
    //currentFormIndex ++;
}

function exitApp() {
    kony.application.exit();
};
/*
function callService(url){
	var myhttpheaders={};
	   var inputParamTable=
          {
              appID:"MyOrganizer", 
              serviceID:"forexRateForCurrencyCode", 
              channel:"rc", 
              httpheaders:myhttpheaders
           };
	    var connHandle = kony.net.invokeServiceAsync(
                        url, 
                        inputParamTable, 
                        forexRatesCallback);
	return connHandle;
}*/
//           SLQLite DB FUNCTIONS............................
function readTableTransaction() {
    try {
        kony.db.transaction(dbObjectId, readTable, errorCallback, successCallback);
    } catch (err) {
        kony.print("error in  select transaction: " + err);
    }
}

function readTable(dbId) {
    kony.print("SQL Statement : " + selectSQL);
    try {
        kony.db.executeSql(dbId, selectSQL, null, readAllNotes, errorCallback);
        kony.print("Invoking SELECT query.....");
    } catch (err) {
        kony.print("error while selecting : " + err);
    }
}

function readAllNotes(dbId, resultset) {
    if (resultset != null) {
        var numResults = resultset.rows.length;
        //var insertTable = [ { lblEmpID : "empid", lblEmpName : "empname", lblDepId : "depid" }  ];
        var insertTable = [];
        if (DBEvent == "ALLNOTES") {
            for (var i = 0; i <= numResults - 1; i++) {
                kony.print("Record from DB : " + kony.db.sqlResultsetRowItem(dbId, resultset, i).note.toString());
                var rowItem = kony.db.sqlResultsetRowItem(dbId, resultset, i);
                var addItem = {
                    selectedDate: rowItem.date.toString(),
                    selectedSubject: rowItem.subject.toString()
                };
                insertTable.push(addItem);
            }
            kony.print("Table Data : " + insertTable);
            frNotesView.segNotes.setData(insertTable);
        } else if (DBEvent == "INDIVIDUAL") {
            frNotesViewIndividual.lblDate.text = "Date : " + kony.db.sqlResultsetRowItem(dbId, resultset, 0).date.toString();
            frNotesViewIndividual.lblSubject.text = "Subject : " + kony.db.sqlResultsetRowItem(dbId, resultset, 0).subject.toString();
            frNotesViewIndividual.areaNote.text = "NOTE : " + kony.db.sqlResultsetRowItem(dbId, resultset, 0).note.toString();
            frNotesViewIndividual.areaNote.setEnabled(false);
        }
    }
}

function saveNote2TableTransaction() {
    kony.print("INSERT SQL : " + insertSQL + ", dbObjectId : " + dbObjectId);
    try {
        kony.db.transaction(dbObjectId, saveNote2Table, errorCallback, successCallback);
    } catch (err) {
        kony.print("saveNote2TableTransaction Exception Occured: " + err);
    }
}

function saveNote2Table(dbId) {
    kony.print("TRANSACTION ID : " + dbId);
    try {
        kony.db.executeSql(dbId, insertSQL, null, successCallback, errorCallback);
    } catch (err) {
        kony.print("saveNote2Table Exception Occured: " + err);
    }
}

function createDB() {
    kony.db.transaction(dbObjectId, create_myorg_notes, errorCallback, successCallback);
    kony.print("DB Creation invoked....");
}

function createTables() {
    create_myorg_notes();
}

function create_myorg_notes(dbId) {
    kony.print("Table creation invoked for 'myorg_notes'.....");
    //var sqlStatement = "DROP TABLE IF EXISTS emp_details";
    //kony.db.executeSql(dbId, sqlStatement, null, success_dropTable, commonErrorCallback);
    var sqlStatement = "CREATE TABLE IF NOT EXISTS myorg_notes (date TEXT, subject TEXT, implevel REAL, note TEXT)";
    try {
        kony.db.executeSql(dbId, sqlStatement, null, success_createTable, errorCallback);
        kony.print("Table Creation successful.");
    } catch (err) {
        kony.print("create_myorg_notes - Exception Occured: " + err);
    }
    //var insertTable = [ [ "George", 10 ], [ "John", 10 ], [ "Thomas", 20 ], [ "James", 20 ], [ "James", 30 ] ];
    /*for ( i=1; ((insertTable) != null) && i <= insertTable.length; i++ ){
	    var v = insertTable[ kony.decrement( i ) ];
	    var sqlStatement = "INSERT INTO emp_details VALUES (" + (count + 1000) + ",\"" + v[ kony.decrement(1) ] + "\"," + v[ kony.decrement(2) ] + ")";
	    count = count + 1;
	    kony.db.executeSql(dbId, sqlStatement, null, success_createTable, commonErrorCallback);
	}*/
}

function success_createTable(dbId, resultset) {
    kony.print("DB & Table creation SUCCESSFUL.....");
    dbStatus = true;
}

function validateDBOnStartup() {
    webSQLFlag = 1;
    dbStatus = false;
    dbObjectId = kony.db.openDatabase("BS5LND", "1.0", "My Organizer Database", ""); //5 * 1024 * 1024);// 5MB database
    createDB();
    kony.print("DB ID: " + dbObjectId);
    if (dbObjectId != null) {
        dbStatus = true;
        kony.print("DB ID.....      " + dbObjectId);
    } else {
        kony.print("DB does not Exist.....; Creating DB.....");
        createDB();
    }
    //return dbStatus;
}

function errorCallback(dbId, error) {
    kony.print(" Error code:: " + error);
    kony.print(" Error message:: " + error.message);
    alert("Writing to Table Failed.....");
}

function successCallback() {
    kony.print(" Transaction Completed Successfully.....");
    //alert("Note Saved.....");
    frNote.txtSubject.text = "";
    frNote.note.text = "";
}
//For generating confirmation code for new user registration via mobile app.
//It will be sent to the user's email address to confirm his/her account.
function getRandomInt() {
    var min = 99;
    var max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//JAVA COUNTERPART instead should have the following code in the DB connector call.
/*
 * public static int randInt() {
	int min = 99;
	int max = 99999;
    // Usually this should be a field rather than a method variable so
    // that it is not re-seeded every call.
    Random rand = new Random();

    // nextInt is normally exclusive of the top value,
    // so add 1 to make it inclusive
    int randomNum = rand.nextInt((max - min) + 1) + min;

    return randomNum;
}
*/