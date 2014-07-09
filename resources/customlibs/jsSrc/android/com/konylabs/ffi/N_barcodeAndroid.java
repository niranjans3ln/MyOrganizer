package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.androidffi.Scanner;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_barcodeAndroid extends JSLibrary {

 
	String[] methods = { };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new barcodeAndroid();
 return libs;
 }



	public N_barcodeAndroid(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "barcodeAndroid";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 


class barcodeAndroid extends JSLibrary {

 
 
	public static final String scanbarcodeAndroid = "scanbarcodeAndroid";
 
	String[] methods = { scanbarcodeAndroid };

	public Object createInstance(final Object[] params) {
 return new com.kony.androidffi.Scanner(
 );
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.Function result0 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 result0 = (com.konylabs.vm.Function)params[0+inc];
 }
 ret = this.scanbarcodeAndroid(params[0]
 ,result0
 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "barcodeAndroid";
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] scanbarcodeAndroid( Object self ,com.konylabs.vm.Function inputKey0
 ){
 
		Object[] ret = null;
 ((com.kony.androidffi.Scanner)self).scanBarcode( (com.konylabs.vm.Function)inputKey0
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
}

};
