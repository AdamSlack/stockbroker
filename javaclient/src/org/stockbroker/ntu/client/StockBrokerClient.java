package org.stockbroker.ntu.client;

import javax.xml.datatype.XMLGregorianCalendar;

import org.stockbroker.ntu.StockBroker;
import org.stockbroker.ntu.StockBrokerImplService;
import companystock.CompanyStock;
import companystock.CompanyStockHistory;
import companystock.TimeSeries;

public class StockBrokerClient {

	public static void main(String[] args) {
		StockBrokerImplService stockBrokerService = new StockBrokerImplService();
		StockBroker stockBroker = stockBrokerService.getStockBrokerImplPort();
		
		String companyID = new String("AMG");
		CompanyStock cs = stockBroker.fetchCompanyStockDetails("MSFT", "TIME_SERIES_WEEKLY");
		
		System.out.println("Fetching Company Stock Details: " + companyID);
		System.out.println("Company Name = " + cs.getCompanyName());
		System.out.println("Company Index Name = " + cs.getStockID());
		
		System.out.println("Adding New Company Stock Details");
		CompanyStock newCS = new CompanyStock();
		newCS.setCompanyName(companyID);
		newCS.setStockID(companyID);
		
		boolean res = stockBroker.addNewCompanyStockDetails(newCS);
		System.out.println("Result of adding stock: " + (res ? "WIN!" : "FAIL..."));
		
		newCS.setCompanyName("asd");
		newCS.setStockID("asd");
		
		res = stockBroker.addNewCompanyStockDetails(newCS);
		System.out.println("Result of adding stock: " + (res ? "WIN!" : "FAIL..."));
		
		
		CompanyStockHistory CSH = stockBroker.fetchCompanyStockHistory("MSFT","TIME_SERIES_WEEKLY");
		System.out.println("STOCK ID: " + CSH.getStockID());
		System.out.println("GRANULARITY: " + CSH.getGranularity());
		System.out.println("SIZE OF HISTORY: " + CSH.getDatapoints().size());
		TimeSeries ts = CSH.getDatapoints().get(0);
		System.out.println("LATEST CLOSE: " + ts.getClose() + " DATE: " );
		
		try {
			XMLGregorianCalendar time =  ts.getTimestamp();
			System.out.println(time.toString());
		}
		catch(NullPointerException e) {
			e.printStackTrace();
		}
		
		
	}

}
