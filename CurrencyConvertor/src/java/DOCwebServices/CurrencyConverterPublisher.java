package DOCwebServices;

import javax.xml.ws.Endpoint;

public class CurrencyConverterPublisher {

	public static void main(String[] args) {
		
		String port = new String("8082");
		String addr = new String("http://localhost");
		
		System.out.println("Running Server on: " + addr + " on port: " + port );
		Endpoint.publish(addr + ":" + port + "/CurrencyConverter", new CurrencyConverterImpl());
	}
	
}
