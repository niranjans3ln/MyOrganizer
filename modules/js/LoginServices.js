function validateLogin(){
	popBlockingScreen.show();
	var userid = frLogin.txtUserId.text;
	var password = frLogin.txtPassword.text;
	onLoginServiceCall(userid, password);
}

function onLoginServiceCall(userid, password) {
    var login_inputparam = {};
    
    login_inputparam["serviceID"] = "validateLogin";
    login_inputparam["userid"] = userid;
    login_inputparam["password"] = password;
    login_inputparam["httpconfig"] = {timeout:99};
	
	kony.print("Initiating Service Call.....");
  	callAsyncService(login_inputparam, loginServiceCallback);
  	kony.print("Service Call Triggered.....");
};

function loginServiceCallback(status, validateLogin) {
	kony.print(">>>>>Niranjan: loginServiceCallback " + status);
	kony.print("Service Response Content: " + validateLogin);

	if (status == 400) {
		kony.print("Service Call Response fetched: " + status);
		if(validateLogin["opstatus"] == 0 && validateLogin["result"] == "true") {
			loginStatus = true;
			globalUserid = frLogin.txtUserId.text;
			kony.print("Login Service Call successful..... Response : " + validateLogin["result"]);
		} else {
			kony.print("Login Failed.....");
		}
	}
	if(loginStatus){
		frHome.show();
		popBlockingScreen.dismiss();
	}
}

function logoutUser(){
	globalUserid = "";
	loginStatus = false;
	frContactDev.destroy();
	frCreateProfile.destroy();
	frForex.destroy();
	frForgotPassword.destroy();
	frHome.destroy();
	frMail.destroy();
	frManageNotes.destroy();
	frMaps.destroy();
	frNews.destroy();
	frNote.destroy();
	frProfile.destroy();
	frSettings.destroy();
	frStock.destroy();
	frWeather.destroy();
	frBrowser.destroy();
	
	currentForm = {};
	previousForm = {};
	currentFormIndex = 0;
	formIndex = 0;
	
	frLogin.txtPassword.text = "";
	frLogin.txtUserId.text = "";
	
	frLogin.show();
	popMenu.dismiss();
}
function organizer_validateLogin(){

	var validateLogin_inputparam = {};
	validateLogin_inputparam["serviceID"] = "validateLogin";
	validateLogin_inputparam["userid"] = frLogin.txtUserId.text;
	validateLogin_inputparam["password"] = frLogin.txtPassword.text;
 
	validateLogin_inputparam["httpheaders"] = {};

	validateLogin_inputparam["httpconfig"] = {timeout:99};
	
	kony.print("serviceID = " + validateLogin_inputparam["serviceID"]);
	kony.print("userid = " + validateLogin_inputparam["userid"]);
	kony.print("password = " + validateLogin_inputparam["password"]);
	kony.print("httpconfig = " + validateLogin_inputparam["httpconfig"]);
	kony.print("Service inputparams set..... Now calling service.....");


	validateLogin = appmiddlewareinvoker (validateLogin_inputparam, true);
	kony.print("Service Response: " + validateLogin);
	if(validateLogin["opstatus"] == 0) {
		var statusTemp = validateLogin["result"];
		kony.print("RESULT = " + statusTemp);
		if(statusTemp){
			loginStatus = true;
			globalUserid = frmLogin.txtLogin.text;
		}
		kony.print("Login Service Call successful.....");
	} else {
		kony.print("Login Failed.....");
	}
	if(loginStatus){
		frHome.show();
	}
	
	//frHome.show();
}