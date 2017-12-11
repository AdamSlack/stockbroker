package DOCwebServices;

import javax.jws.WebService;
import javax.jws.WebMethod;

@WebService
public interface CurrencyConverter {
	@WebMethod public float convertCurrency(String from, String to, Float amount);
}