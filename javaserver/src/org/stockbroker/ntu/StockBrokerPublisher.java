package org.stockbroker.ntu;

import javax.xml.ws.Endpoint;

public class StockBrokerPublisher {

	public static void main(String[] args) {
		
		String port = new String("8080");
		String addr = new String("http://localhost");
		
		System.out.println("Running Server on: " + addr + " on port: " + port );
		Endpoint.publish(addr + ":" + port + "/stockbroker", new StockBrokerImpl());
	}
	
}
