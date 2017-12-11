package DOCwebServices;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;;

@WebService
public interface CurrencyConverter {
	@WebMethod public double convertCurrency(@WebParam(name="from") String from, @WebParam(name="to") String to,@WebParam(name="amount") double amount);
}