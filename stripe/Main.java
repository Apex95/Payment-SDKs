import java.util.HashMap;
import java.util.Map;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;

/**
 * 
 * @author dan
 *
 * Stripe Test Payment Module
 * 
 * Charges the client's card, referenced using a token (hardcoded "tok_ca" for testing purposes); 
 * In real use cases, the token is generated on the client's device by providing card information.   
 * 	(Stripe.createToken() from the Stripe.js module)
 * 
 * Observations:
 * 	- this part should be (and usually is) implemented server-side as it requires the secret key
 *	- public key is used only to generate one-time tokens
 * 
 * Possible vulnerability:
 * 	- if any kind of application implements this charging procedure, the secret key can be leaked
 * 
 * @see https://stripe.com/docs/testing
 *
 */

public class Main 
{
	public static void main(String[] args)
	{
		
		// "This API call cannot be made with a publishable API key. Please use a secret API key." 
		Stripe.apiKey = "sk_test_qBelTianAXXaCfNycx8abgnV";

		
		Map<String, Object> chargeMap = new HashMap<String, Object>();
		
		chargeMap.put("amount", 100); // cents
		chargeMap.put("currency", "usd"); 
		
		// Genuine card information cannot be used in test mode
		chargeMap.put("source", "tok_ca"); 

		try 
		{
		    Charge charge = Charge.create(chargeMap);
		    System.out.println(charge);
		} 
		catch (StripeException e) 
		{
		    e.printStackTrace();
		}
	}
}
