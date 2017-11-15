package org.stockbroker.ntu;

import javax.jws.WebService;

import companystock.CompanyStock;
import companystock.CompanyStockHistory;

import java.util.ArrayList;

import javax.jws.WebMethod;

@WebService
public interface StockBroker {
	@WebMethod public CompanyStock fetchCompanyStockDetails(String companyID, String granularity);
	@WebMethod public boolean addNewCompanyStockDetails(CompanyStock cs);
	@WebMethod public CompanyStockHistory fetchCompanyStockHistory(String companyID, String granularity);
	public ArrayList<String> HTTPGet(String url);

}
