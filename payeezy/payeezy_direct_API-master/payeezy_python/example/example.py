import payeezy 
import os
import json

proxy = 'http://172.19.7.119:8080'

os.environ['http_proxy'] = proxy 
os.environ['HTTP_PROXY'] = proxy
os.environ['https_proxy'] = proxy
os.environ['HTTPS_PROXY'] = proxy

# test credentials

payeezy.apikey = "y6pWAJNyJyjGv66IsVuWnklkKUPFbb0a"

payeezy.apisecret = "86fbae7030253af3cd15faef2a1f4b67353e41fb6799f576b5093ae52901e6f7"

payeezy.token = "fdoa-a480ce8951daa73262734cf102641994c1e55e7cdf4c02b6"


# environment - sandbox

payeezy.url = "https://api-cert.payeezy.com/v1/transactions"

payeezy.tokenurl = "https://api-cert.payeezy.com/v1/securitytokens"

print(" Calling Payeezy API: Credit Card Authorize ");
# environment - live

# payeezy.url = "https://api.payeezy.com/v1/transactions"
# payeezy.tokenurl = "https://api.payeezy.com/v1/securitytokens"



responseAuthorize =  payeezy.transactions.purchase( amount=1299,
	                                                 currency_code='USD',
	                                                 card_type='visa',
	                                                 cardholder_name='John Smith',
	                                                 card_number=4788250000028291,
	                                                 card_expiry=1020,
	                                                 card_cvv=123
                                                    );


print(responseAuthorize);


print ("************---------- Authorize Response ---------------*****************" );

print (" ** " + json.dumps(responseAuthorize.json(), indent=3) );

print ("************---------- Authorize Response:End ---------------*****************" );














