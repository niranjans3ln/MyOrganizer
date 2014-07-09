function callNewsService() {
    var news_inputparam = {};
    
    news_inputparam["serviceID"] = "foxnews";
    news_inputparam["httpconfig"] = {timeout:45};
	kony.print("Showing Blocking Screen");
	popBlockingScreen.show();
	kony.print("Initiating News Service Call.....");
  	callAsyncService(news_inputparam, newsServiceCallback);
  	kony.print("News Service Call Triggered.....");
};

function newsServiceCallback(status, foxnews) {
	kony.print(">>>>>Niranjan: newsServiceCallback " + status);
	kony.print("News Service Response Content: " + foxnews);

	if (status == 400) {
		kony.print("News Service Call Response fetched: " + status);
		var newsDetailTmp = [];
		if((foxnews != null || foxnews != undefined) && foxnews["opstatus"] == 0){
			foxnewsResultTable = foxnews["list"];
			for(var i = 2 ; i < foxnews["list"].length ; i++){
				newsDetailTmp.push({
					"title":foxnews["list"][i]["title"],
					"description":"Desc: " + foxnews["list"][i]["description"],
					"lblURLText":"URL: ",
					"link":foxnews["list"][i]["link"],
					"author":"Author: " + foxnews["list"][i]["author"],
					"pubdate":"Published on: " + foxnews["list"][i]["pubdate"]
				});
			}
				frNews.segNews.setData(newsDetailTmp);
				frNews.show();
				popBlockingScreen.dismiss();
		}else{
        	alert("Please check network connection and try again.");    	
		}
	}
};

function getCurrencyList(){
	frForex.segForexRates.setVisibility(false);
	var currency_inputparam = {};
	currency_inputparam["serviceID"] = "forexRateCurrencyList";
    currency_inputparam["httpconfig"] = {timeout:45};
	kony.print("Showing Blocking Screen");
	popBlockingScreen.show();
	callAsyncService(currency_inputparam, currencyListCallback);
	return;
}

function currencyListCallback(status, currencyList){
	kony.print(">>>>>Niranjan: currencyListCallback " + status);
	kony.print("Currency List Service Response Content: " + currencyList);

	if (status == 400) {
		kony.print("Currency List Service Call Response fetched: " + status);
		var currencyListDetailTmp = [];		
		currencyListDetailTmp.push({"currCode":"000", "currNameNCode":"Please Select Currency Code"});
		
		if((currencyList != null || currencyList != undefined) && currencyList["opstatus"] == 0){
			currencyListResultTable = currencyList["currList"];
			for(var i = 2 ; i < currencyList["currList"].length ; i++){
				currencyListDetailTmp.push({
					"currCode":currencyList["currList"][i]["currCode"], 
					"currNameNCode":currencyList["currList"][i]["currName"] + "  :  " + currencyList["currList"][i]["currCode"]
				});
			}
			kony.print("the acquired and prepared list =" + currencyListDetailTmp);
			frForex.cbxCurrCode.masterDataMap = [currencyListDetailTmp, "currCode", "currNameNCode"];
			//frForex.show();
			popBlockingScreen.dismiss();
		}else{
        	alert("Please check network connection and try again.");    	
		}
	}
};

function getCurrencyRate(){
	var selectedCurrencyCode = frForex.cbxCurrCode.selectedKey;
	if(selectedCurrencyCode != "000"){
		getForexRates(selectedCurrencyCode);
	}
	kony.print("Selected Currency Code = " + selectedCurrencyCode);
};

function getForexRates(selectedCurrencyCode){
//URL: http://themoneyconverter.com/rss-feed/HKD/rss.xml
//URL: http://$CurrCode.fxexchangerate.com/rss.xml
	var forex_inputparam = {};
	forex_inputparam["serviceID"] = "forexRateForCurrencyCode";
    forex_inputparam["httpconfig"] = {timeout:45};
    forex_inputparam["CurrCode"] = selectedCurrencyCode;
	kony.print("Showing Blocking Screen");
	popBlockingScreen.show();
	callAsyncService(forex_inputparam, forexRatesCallback);
	return;
};

function forexRatesCallback(status, forexRates){
	kony.print(">>>>>Niranjan: forexRatesCallback " + status);
	kony.print("Forex Rates Service Response Content: " + forexRates);

	if (status == 400) {
		kony.print("Forex Rates Service Call Response fetched: " + status);
		var forexRatesDetailTmp = [];
		
		if((forexRates != null || forexRates != undefined) && forexRates["opstatus"] == 0){
			for(var i = 2 ; i < forexRates["forexRatesList"].length ; i++){
				forexRatesDetailTmp.push({
					"lblTitle": "Currency: " + forexRates["forexRatesList"][i]["title"], 
					"lblPubDate": "Published: " + forexRates["forexRatesList"][i]["pubDate"],
					"lblDesc": "Rate: " + forexRates["forexRatesList"][i]["desc"],
					"lblCat": "Category: " + forexRates["forexRatesList"][i]["category"]
				});
			}
			kony.print("the acquired and prepared list =" + forexRatesDetailTmp);
			
			if(forexAttempt > 0){
				frForex.segForexRates.removeAll();
			}
			frForex.segForexRates.setData(forexRatesDetailTmp);
			frForex.segForexRates.setVisibility(true);
			popBlockingScreen.dismiss();
			forexAttempt ++;
		}else{
        	alert("Please check network connection and try again.");    	
		}
	}
};

function getStockQuotes(){
	var stock_inputparam = {};
	stock_inputparam["serviceID"] = "internationalMarkets";
    stock_inputparam["httpconfig"] = {timeout:45};
	kony.print("Showing Blocking Screen");
	popBlockingScreen.show();
	callAsyncService(stock_inputparam, stockQuotesCallback);
	return;
};

function stockQuotesCallback(status, stockQuote){
	kony.print(">>>>>Niranjan: stockQuoteCallback " + status);
	kony.print("Stock Quotes Service Response Content: " + stockQuote);

	if (status == 400) {
		kony.print("Stock Quotes Service Call Response fetched: " + status);
		var stockQuoteDetailTmp = [];
		
		if((stockQuote != null || stockQuote != undefined) && stockQuote["opstatus"] == 0){
			for(var i = 2 ; i < stockQuote["items"].length ; i++){
				stockQuoteDetailTmp.push({
					"title": stockQuote["items"][i]["title"], 
					"link": stockQuote["items"][i]["link"],
					"desc": stockQuote["items"][i]["desc"],
					"date": stockQuote["items"][i]["date"]
				});
			}
			kony.print("the acquired and prepared list =" + stockQuoteDetailTmp);
			
			frStock.segInternationalMarket.setData(stockQuoteDetailTmp);
			frStock.show();
			popBlockingScreen.dismiss();
		}else{
        	alert("Please check network connection and try again.");    	
		}
	}
};

function resetNote(){
	frNote.txtSubject.text = "";
	frNote.note.text = "";
}

function saveNote2Device(){
	var date = frNote.cal.year + ":" + frNote.cal.month + ":" + frNote.cal.day;
	insertSQL = "INSERT INTO myorg_notes VALUES (\"" + date + "\",\"" + frNote.txtSubject.text + "\"," + frNote.radioImportance.selectedKey + ",\"" + frNote.note.text + "\")";
	kony.print("SQL Statement: " + insertSQL);
	saveNote2TableTransaction();
}

function getAllNotes(){
	selectSQL = "SELECT * FROM myorg_notes ORDER BY date ASC";
	DBEvent = "ALLNOTES";
	readTableTransaction();
}

function getNote(){
	//selectedDate = frNotesView.segNotes.sele
	//frNotesViewIndividual.lblDate.text
	selectedDate = frNotesView["segNotes"]["selectedItems"][0]["selectedDate"];
	//frNotesViewIndividual.lblSubject.text
	selectedSubject = frNotesView["segNotes"]["selectedItems"][0]["selectedSubject"];
	selectSQL = "SELECT * FROM myorg_notes WHERE DATE = \"" + selectedDate + "\" AND subject = \"" + selectedSubject + "\"";
	DBEvent = "INDIVIDUAL";
	readTableTransaction();
	frNotesViewIndividual.show();
}

function getWeatherReport(){
	frWeather.lblHeader.text = lblWeatherHeader + location;
	popBlockingScreen.show();
	var weather_inputparam = {};
    
    weather_inputparam["serviceID"] = "weather";
    weather_inputparam["httpconfig"] = {timeout:45};
	kony.print("Showing Blocking Screen");
	kony.print("Initiating Weather Service Call.....");
  	callAsyncService(weather_inputparam, weatherServiceCallback);
  	kony.print("Weather Service Call Triggered.....");
};

function weatherServiceCallback(status, weather) {
	kony.print(">>>>>Niranjan: weatherServiceCallback " + status);
	kony.print("Weather Service Response Content: " + weather);

	if (status == 400) {
		kony.print("Weather Service Call Response fetched: " + status);
		var weatherDetailTmp = [];
		if((weather != null || weather != undefined) && weather["opstatus"] == 0){
			weatherResultTable = weather["items"];
			for(var i = 2 ; i < weather["items"].length ; i++){
				weatherDetailTmp.push({
					"title":weather["items"][i]["title"],
					"description":"Desc: " + weather["items"][i]["desc"],
					"lblURLText":"URL: ",
					"link":weather["items"][i]["link"]
				});
			}
				frWeather.segWeather.setData(weatherDetailTmp);
				frWeather.show();
				popBlockingScreen.dismiss();
		}else{
        	alert("Please check network connection and try again.");    	
		}
	}
};

function activateUserService(){
	var userid = frProfileCreate.txtUserId.text;
	var secretcode = frProfileCreate.txtSecretCode.text;
	popBlockingScreen.show();
	var actUsr_inputparam = {};
    
    actUsr_inputparam["serviceID"] = "activateUser";
    actUsr_inputparam["httpconfig"] = {timeout:45};
    actUsr_inputparam["userid"] = userid;
    actUsr_inputparam["secretcode"] = secretcode;
	kony.print("Showing Blocking Screen");
	kony.print("Initiating Activate User Service Call.....");
  	callAsyncService(actUsr_inputparam, actUsrServiceCallback);
  	kony.print("Activate User Service Call Triggered.....");
};

function actUsrServiceCallback(status, actUsr) {
	kony.print(">>>>>Niranjan: actUsrServiceCallback " + status);
	kony.print("Activate User Service Response Content: " + actUsr);

	if (status == 400) {
		kony.print("Activate User Service Call Response fetched: " + status);
		var actUsrDetailTmp = [];
		if((actUsr != null || actUsr != undefined) && actUsr["opstatus"] == 0){
			var status = actUsr["response"];
			if(status){
				alert("Activation Successful.....");
				frLogin.show();
				popBlockingScreen.dismiss();
			}else{
				alert("Activation Failed. Please retry.....");
				popBlockingScreen.dismiss();
			}
		}else{
        	alert("Please check network connection and try again.");    	
		}
	}
};



function launchGmailApp(){
	kony.application.openURL("content://com.google.contacts")
}

function onBarcodeScan( a, b ){
	gScannedText = b;
	gtex=a;
	alert("scanned--> "+gScannedText);
	alert("gtext: "+gtex);
	//invokeSearchBarcode(gScannedText);
}

function scanBarcode(){
	//getscancode.getbarcode(onBarcodeScan);
	kony.print("Invoking scanbarcode().....");
	scanbarcodeAndroid();
}





function updateProfile(){
	kony.print("Update Profile Service is to be invoked now.....");
}

//===========================================================================================
/*function callNewsService() {
    var news_inputparam = {};
    
    news_inputparam["serviceID"] = "foxnews";
    news_inputparam["httpconfig"] = {timeout:30};
	
	kony.print("Initiating News Service Call.....");
  	callAsyncService(news_inputparam, newsServiceCallback);
  	kony.print("News Service Call Triggered.....");
};

function newsServiceCallback(status, foxnews) {
	kony.print(">>>>>Niranjan: newsServiceCallback " + status);
	kony.print("News Service Response Content: " + foxnews);

	if (status == 400) {
		kony.print("News Service Call Response fetched: " + status);
		var newsDetailTmp = [];
		var title = "";
		var description = "";
		var link = "";
		var author = "";
		var pubdate = "";
		var datetime = "";
		if((foxnews != null || foxnews != undefined) && foxnews["opstatus"] == 0){
			foxnewsResultTable = foxnews["list"];
			for(var i=0; i<foxnews["list"].length; i++){
				newsDetailTmp.push({
					"title":foxnews["list"][i]["title"],
					"description":"Desc: " + foxnews["list"][i]["description"],
					"lblURLText":"URL: ",
					"link":foxnews["list"][i]["link"],
					"author":"Author: " + foxnews["list"][i]["author"],
					"pubdate":"Published on: " + foxnews["list"][i]["pubdate"],
					"datetime":"Time: " + foxnews["list"][i]["datetime"]
				});
			}
				frmNewsHeadlines.segment2207222663165112.setData(newsDetailTmp);
				frmNewsHeadlines.show();
		}else{
        	alert("Please check network connection and try again.");    	
		}
	}
}*/