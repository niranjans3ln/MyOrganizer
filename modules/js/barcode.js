	function scanbarcodeAndroid(){
		kony.print("barcode scanner is going to be invoked via FFI.....");
		barcode_android = new barcodeAndroid.barcodeAndroid();
		kony.print("Launching Scanner.....");
		androidScanBarcode();
	}
	
	function scanbarcode(){
		//#ifdef android
			barcode_android = new barcodeAndroid.barcodeAndroid();
			androidScanBarcode();	
		//#endif
		
		//#ifdef iphone
			iphoneScanBarcode();
		//#endif
		
		//#ifdef bb
			barcode_bb = new barcode4BB.barcodeBB();
			bbScanBarcode();
		//#endif	
	
	}
	
	function androidScanBarcode(){
			
		barcode_android.scanbarcodeAndroid(androidBarcodeResults);
		
	}
	
	function iphoneScanBarcode(){
		barcode.scanbarcode(otherBarcodeResults)
	}
	
	function bbScanBarcode(){

		barcode_bb.scanbarcodeBB(otherBarcodeResults);
	}
	
	
	function androidBarcodeResults(result,resultFormat){
		
		scannedText = result;
		if (scannedText == "" || scannedText == null ){
	    	alert("Scanning failed, please scan again.");
	    	return false;
	    	}
	    else
	    	frmBarcode.lblBarcode.text = "The text of the scanned barcode is: \n"+scannedText
	    
	}
	
	
	function otherBarcodeResults(result){
		scannedText = result
		if (scannedText == "" || scannedText == null )
		{
	    	alert("Scanning failed, please scan again.")
	    	return false;
	    }
	    else
	    {
	    //	frmBarcode.lblBarcode.text = "The text of the scanned barcode is: \n"+scannedText
	    	alert(scannedText);
	    }
	}
