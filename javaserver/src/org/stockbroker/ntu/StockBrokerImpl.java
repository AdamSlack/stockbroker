package org.stockbroker.ntu;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import javax.jws.WebService;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import companystock.CompanyStock;
import companystock.CompanyStockHistory;
import companystock.TimeSeries;


@WebService(endpointInterface="org.stockbroker.ntu.StockBroker")
public class StockBrokerImpl implements StockBroker{

	public final static String APIKEY = "EN5TVUAQ24R3A67K";
	private final String USER_AGENT = "Mozilla/5.0";

	public CompanyStockHistory fetchCompanyStockHistory(String companyID, String granularity) {
		
		CompanyStockHistory CSH = new CompanyStockHistory();
	
		CSH.setStockID(companyID);
		CSH.setGranularity(granularity);
		
		String url = new String("https://www.alphavantage.co/query?function=" + granularity + "&symbol="+ companyID +"&apikey="+ APIKEY +"&datatype=csv");
		ArrayList<String> stockHistory = HTTPGet(url);

		// Remove CSV headers present in the Get request response...
		stockHistory.remove(0);
		
		for (String s : stockHistory) {
			TimeSeries ts = new TimeSeries();
			String[] elements = s.split(",");
			
			XMLGregorianCalendar XMLGC;
			try {
				XMLGC = DatatypeFactory.newInstance().newXMLGregorianCalendar(elements[0]);
				ts.setTimestamp(XMLGC);
				System.out.println(ts.getTimestamp().toString());

			} catch (DatatypeConfigurationException e) {
				e.printStackTrace();
			}
			
			ts.setOpen(new BigDecimal(elements[1]));
			ts.setHigh(new BigDecimal(elements[2]));
			ts.setLow(new BigDecimal(elements[3]));
			ts.setClose(new BigDecimal(elements[4]));
			
			ts.setVolume(new BigInteger(elements[5]));
			
			CSH.getDatapoints().add(ts);
		}
		
		return CSH;
		
	}
	
	public CompanyStock fetchCompanyStockDetails(String companyID, String granularity) {
				
		System.out.println("Stock Request Recieved: " + companyID);
		CompanyStock cs = new CompanyStock();
		cs.setStockID(companyID);
		cs.setCompanyName(companyID);
		return cs;
	}
	
	public boolean addNewCompanyStockDetails(CompanyStock cs) {
		
		System.out.println(cs.getCompanyName() + " Recieved.");
		
		if(cs.getStockID().equals("AMG")) {
			System.out.println(cs.getCompanyName() + " equals AMG");
			return true;
		}
		
		System.out.println(cs.getCompanyName() + " doesn't equal AMG");
		return false;
		
	}

	public ArrayList<String> HTTPGet(String url) {
		ArrayList<String> res = new ArrayList<String>();
		
		try {
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();

			// optional default is GET
			con.setRequestMethod("GET");

			//add request header
			con.setRequestProperty("User-Agent", USER_AGENT);

			int responseCode = con.getResponseCode();
			System.out.println("\nSending 'GET' request to URL : " + url);
			System.out.println("Response Code : " + responseCode);

			BufferedReader in = new BufferedReader(
			        new InputStreamReader(con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				//System.out.println(inputLine.toString());
				res.add(inputLine.toString());

			}
			in.close();

			//print result

		}
		catch(IOException e) {
			System.out.println(e);
		}
			 	
		return res;

	}
	
}
