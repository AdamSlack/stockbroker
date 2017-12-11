package DOCwebServices;

import java.io.BufferedReader;
import java.io.Console;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import javax.jws.WebService;
import javax.jws.WebParam;

@WebService(endpointInterface="DOCwebServices.CurrencyConverter")
public class CurrencyConverterImpl implements CurrencyConverter{

    public double convertCurrency(@WebParam(name="from") String from, @WebParam(name="to") String to,@WebParam(name="amount") double amount) {
        System.out.println("Base Currency: " + from);
        System.out.println("Goal Currency: " + to);
        System.out.println("Amount: " + amount);
        CurrencyConversionWS conveter = new CurrencyConversionWS();
        double rate = conveter.GetConversionRate(from, to);
        System.out.println("Rate: " + rate);
        double newAmount = amount*rate;
        System.out.println(from + ": " + amount + " = " + to + ": " + newAmount);
        return newAmount;
    }
    
}