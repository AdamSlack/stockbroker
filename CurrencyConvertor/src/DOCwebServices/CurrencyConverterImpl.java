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

@WebService(endpointInterface="DOCwebServices.CurrencyConverter")
public class CurrencyConverterImpl implements CurrencyConverter{
    public float convertCurrency(String from, String to, Float amount) {
        System.out.println("Base Currency: " + from);
        System.out.println("Goal Currency: " + to);
        System.out.println("Amount: " + amount.toString());
        CurrencyConversionWS conveter = new CurrencyConversionWS();
        
        return 0.00f;
    }
    
}