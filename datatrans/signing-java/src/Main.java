import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

public class Main {
	public static void main(String[] args) throws InvalidKeyException, IllegalArgumentException, NoSuchAlgorithmException
	{
		String sig = SignGenerator.getHexaSHA256Signature("", 
				"7d899390f62fe945b6350b2554150a37a1b66fee19dc8ddc0ea83ea0b9b3b0bf2f5ba3dd0ddea0a2a9826c88a7dfbe33156f594aced03e50a867314bce66a989", 
				"1100020006", "850", "CHF", "91827364");
		System.out.println("Original Sig: " + sig);
		
		
		String sig2 = SignGenerator.getHexaSHA256Signature("", 
				"dec490894d423af4cfd8d5840bdc7780ed82dbd859e2c3a57ec06958e42d0ceb4d873a736983a6750b1c391dd9a6494e490e5d79f3d31b74923c1ea300534607", 
				"1100020160", "850", "CHF", "91827364");
		
		System.out.println("Adversary Sig: " + sig2);
	}

}


