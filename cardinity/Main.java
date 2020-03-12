import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.net.MalformedURLException;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import com.cardinity.CardinityClient;
import com.cardinity.model.Card;
import com.cardinity.model.Payment;
import com.cardinity.model.Result;



public class Main {
	
	public static void checkout()
	{
		String projectId = "test_pr_76bdlum8oh4igm8ryymzqkpkuotvx9";
		String returnUrl = "http://172.19.7.119/transaction_complete";
		String projectSecret = "vxuaa87urbnrwzpqvinxw1rmlqlcpmtimqfb2e5xsjqfmeqg0k";
		
		try {
		    Map<String, String> attributes = new HashMap<>();

		    attributes.put("amount", "10.00");
		    attributes.put("currency", "EUR");
		    attributes.put("country", "LT");
		    attributes.put("order_id", "99999");
		    attributes.put("project_id", projectId);
		    attributes.put("return_url", returnUrl);
		    attributes.put("cancel_url", "http://172.19.7.119/cancel_payment");
		    attributes.put("description", "abcdef");
		    
		    
		    
		    String message = attributes.entrySet().stream()
		        .sorted(Map.Entry.comparingByKey())
		        .map(e -> e.getKey() + e.getValue())
		        .collect(Collectors.joining(""));

		    Mac hasher = Mac.getInstance("HmacSHA256");
		    hasher.init(new SecretKeySpec(projectSecret.getBytes(), "HmacSHA256"));

		    byte[] hash = hasher.doFinal(message.getBytes());

		    String signature = DatatypeConverter.printHexBinary(hash).toLowerCase();
		    System.out.println(signature);
		} catch (NoSuchAlgorithmException e) {
		} catch (InvalidKeyException e) {
		}
	}
	
	private static void debugSetProxy()
	{
		System.setProperty("http.proxyHost", "127.0.0.1");
        System.setProperty("http.proxyPort", "8080");
        System.setProperty("https.proxyHost", "127.0.0.1");
        System.setProperty("https.proxyPort", "8080");
	}
	
	public static void performClientPayment()
	{
		/** 
		 * oauth_signature = encrypt(request_method + url + parameters, consumerSecret)
		 * 
		 * HMAC-SHA1
		 * 
		 * consumerKey = "Identifier string provided by Cardinity for use in OAuth 1.0 handshake. Equivalent to a username."
		 * consumerSecret = encryption key
		 * 
		 */
		
		debugSetProxy();
		
		String consumerKey = "test_xwtk3yqf1xfjw4o0yi3gc45bccfuoa";
		String consumerSecret = "hntcg2mri0a9ghvaigtoyplm8acjbnd1hkyoudhbs0pdtd6qch";
		
		CardinityClient client = new CardinityClient(consumerKey, consumerSecret);
		
		Payment payment = new Payment();
		payment.setAmount(new BigDecimal(10));
		payment.setCurrency("EUR");
		payment.setCountry("LT");
		payment.setPaymentMethod(Payment.Method.CARD);
		Card card = new Card();
		card.setPan("4111111111111111"); //4111111111111111 - -approved / 4200000000000000 - pending
		card.setCvc(123);
		card.setExpYear(2021);
		card.setExpMonth(1);
		card.setHolder("John Doe");
		payment.setPaymentInstrument(card);

		Result<Payment> result = client.createPayment(payment);

		
		if (result.isValid() && result.getItem().getStatus() == Payment.Status.APPROVED) 
		{
		    UUID paymentId = result.getItem().getId();
		    	System.out.println("done");
		    	
		}
		else
			System.out.println("nope");
	}
	
	
	public static void main(String[] args)
	{
		
		performClientPayment();
		//checkout();
		
		
	}

}
