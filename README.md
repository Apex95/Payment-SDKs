# Short Analysis of 11 SDKs Provided by different Online Payment Processors

Observations & short analysis below for SDKs used for web implementations (refer to `index.html`). Not very organized though as I was only looking for specific information - sorry for that. 
Similar API is used for applications.
Most client SDKs are obfuscated to a certain degree. Merchant SDKs are implemented as Python modules and exposed through Flask and usually perform certificate pinning.

Some accounts might not be valid anymore as these experiments were performed some time ago.

Detailed analysis of protocols design can be provided upon request.

### 2Checkout

Docs: https://knowledgecenter.2checkout.com/

#### Client SDK
The JavaScript file (2checkout.js)(client SDK) requests a public key (RSA 2048) from the following address:
```
https://sandbox.2checkout.com/checkout/api/script/publickey/
```

The result contains **exponent** and **modulus** (b64 encoded) - it seems the same public key is offered for every client:
```
publicKey={'e':'AQAB' , 'm': 'ntMq+FPcYsPoh9rvfrxdlwOHBZUL3xrvqQ7ERHNDXt/8cwenWBzTtQ2te6Daja1gMjGhzA/b0X17IL4uWZwBz2kMyGF+ViKnNVTJC17iaWmnQNcjxMNOXvpXlG+7DxTpcnocnZjnbkbvyOWa1V6IZjqlmxJIfv6DTYMPugppsRnHvNv1Za+5qoG6uevaYjxMZjo7xuyiJN0r1ML9cFX5w7B9TgZ8OZjEhjr7vXpA+/Dlnx5kpymWMUvybMFfhI7SPSMz0Kca5BGoD80h+hgZO3mOgIsy12G9vuzW0CBgI9nmHkwRRxuBjIR7nB5xNabX9UyOWedFgqU75PDcu1pVjQ==' };
```

Encryption is performed mostly for preToken, public API key and card details. The data below is encrypted before being sent through the network:
```
{sellerId: 901412262, publishableKey: "....", ccNo: "400000002", cvv: "123", "expMonth "12", ....}
```

An encoding mechanism is also implemented as `f()`; observation: high similarity to what is implemented here `https://secure.bankofamerica.com/login/rest/sas/sparta/iac`

```
f = function(a) {
            // a = public key (plain text), user agent (plain text), base64 of something encrypted?

            var b, c, d, e, f, h, i, j = "",
                k = 0;
            for (a = g(a); k < a.length;) 
                b = a.charCodeAt(k++), 
                c = a.charCodeAt(k++), 
                d = a.charCodeAt(k++), 
                e = b >> 2, 
                f = (3 & b) << 4 | c >> 4, 
                h = (15 & c) << 2 | d >> 6, 
                i = 63 & d, 
                isNaN(c) ? h = i = 64 : isNaN(d) && (i = 64), 
                j = j + n.charAt(e) + n.charAt(f) + n.charAt(h) + n.charAt(i);
            return j
        }
```

The public API key (`08ADB60D-740B-4ED0-82CF-3F395CD00AB6`) is usually sent in encoded format. 
```f("08ADB60D-740B-4ED0-82CF-3F395CD00AB6") = MDhBREI2MEQtNzQwQi00RUQwLTgyQ0YtM0YzOTVDRDAwQUI2```

The encoding mechanism is easily bruteforceable and the original API key can be fully recovered in reasonable time (see `bruteforcer.py` for PoC).

Responses are represented as callbacks using JSON-formatted parameters. E.g.: response for preToken request:
```
https://sandbox.2checkout.com/checkout/api/1/901412262/rs/preTokenService?payload=%7B%22sellerId%22%20:%20%22901412262%22,%20%22publicKey%22%20:%20%22MDhBREI2MEQtNzQwQi00RUQwLTgyQ0YtM0YzOTVDRDAwQUI2%22%20,%20%22userPref%22%20:%20%22VEYxOzAxNTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNb3ppbGxhO05ldHNjYXBlOzUuMCUyMCUyOFgxMSUzQiUyMExpbnV4JTIweDg2XzY0JTI5JTIwQXBwbGVXZWJLaXQvNTM3LjM2JTIwJTI4S0hUTUwlMkMlMjBsaWtlJTIwR2Vja28lMjklMjBDaHJvbWUvNzUuMC4zNzcwLjEwMCUyMFNhZmFyaS81MzcuMzY7MjAwMzAxMDc7dW5kZWZpbmVkO3RydWU7O3RydWU7TGludXglMjB4ODZfNjQ7dW5kZWZpbmVkO01vemlsbGEvNS4wJTIwJTI4WDExJTNCJTIwTGludXglMjB4ODZfNjQlMjklMjBBcHBsZVdlYktpdC81MzcuMzYlMjAlMjhLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyUyOSUyMENocm9tZS83NS4wLjM3NzAuMTAwJTIwU2FmYXJpLzUzNy4zNjtlbi1VUzt1bmRlZmluZWQ7MTI3LjAuMC4xO3VuZGVmaW5lZDt1bmRlZmluZWQ7dW5kZWZpbmVkO3VuZGVmaW5lZDt0cnVlO3RydWU7MTU2NTAxMDk0MTc4OTsyOzYvNy8yMDA1JTJDJTIwOSUzQTMzJTNBNDQlMjBQTTsxOTIwOzEwODA7Ozs7Ozs7MzstMTIwOy0xODA7OC81LzIwMTklMkMlMjA0JTNBMTUlM0E0MSUyMFBNOzI0OzE4NTM7MTA1Mzs2NzsyNzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsxOTs=%22%7D
```

the following response is received:
```
--jsonCallbackPreToken({"validationErrors":null,"exception":null,"response":{"type":"PreTokenResponse","preToken":"762ea7c2-e4b0-4ee3-8bce-48782e086875","errors":null}});--
```

#### Merchant SDK

Python-based (`2checkout-server.py`); Once a token is received from the client SDK, the merchant SDK creates a transaction request by forwarding the token and appending variables such as private API key, amount, currency, etc. No encryption seems to be performed.

### Adyen

Docs: https://docs.adyen.com/

#### Client SDK

Performs client-side encryption using both RSA and AES. Each input textbox is placed in an iframe hosted on Adyen's server.
Data from each textbox is encrypted once is becomes structurally valid (e.g.: CVV contains 3 digits).
Encrypted data is returned to the client via `dispatchEvent()` - the client SDK contains event listeners.

Encryption libraries referenced in the SDK:
- Stanford Javascript Crypto Library [1], RSA and ECC in JavaScript [2]

RSA public key format (`(exponent|modulus)`):
```(10001|A4D5CD85D7C66CF4AB1562CFD7608DE7A69480D4EC5AC3…)```


Encrypted data format (template):
```
adyenjs_library_version$b64(RSA_ENC(AES_key, RSA_public_key))$b64(AES_ENC(data, AES_key))
```

Example: 
```
adyenjs_0_1_18$Z2SAT7[...]RZTA==$H63PZK[...]TrXA==
```




[1]http://www-cs-students.stanford.edu/~tjw/jsbn/
[2]http://crypto.stanford.edu/sjcl/

#### Merchant SDK

Python implementation (`adyen-server.py`). Seems to just receive and forward information between client and Adyen.


### BlueSnap

Docs: https://developers.bluesnap.com/docs

#### Client SDK

The client receives, from the merchant, a form which contains a Hosted Payment Fields Token (hardcoded in `index.html`):
`6b400a64036835a301026137dd8c8f74ebe99c46830aa30a8c6754495c43b4c2_`. Once submitted the card information is forwarded to the payment processor.

#### Merchant SDK

This Hosted Payment Fields Token is to be requested by the merchant SDK (found no actual implementation, must be done manually) from `https://sandbox.bluesnap.com/services/2/payment-fields-tokens`. The request headers must follow the format:

```
Content-Type: application/json
Authorization: Basic QVBJXzE1NzI5NDk1OTAwMzgxNjc1NzM1NTc6UGFyb2xhbWVhMQ==
Accept: application/json
```

Where `QVBJXzE1NzI5NDk1OTAwMzgxNjc1NzM1NTc6UGFyb2xhbWVhMQ==` is the result of `b64(api_username:api_pass)`. Enjoy free credentials :-)


### Braintree

https://developers.braintreepayments.com/

#### Client SDK

If Braintree is implemented into a webpage, the client-token is recommended to be hardcoded - otherwise (e.g.: if implemented into a smartphone app) it should be requested from the merchant each time (which requests it from Braintree).
The format of a token is:
```
eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIxZDQwYmNjZjA4ZTU3Njg2ZmExYzgzYWU0YmJlNmNkZDBlYzU4YTQwMTBjNzRiYzUzN2MwODRlZmYyMTI1ZTRifGNyZWF0ZWRfYXQ9MjAxOS0wMy0xM1QxMjo1ODoyNi42NjEwNTcxNjErMDAwMFx1MDAyNm1lcmNoYW50X2lkPTNtbjg2cTl6ODZnN2Nwd2NcdTAwMjZwdWJsaWNfa2V5PThxcTl6c3c2NnRnYzZmY3YiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvM21uODZxOXo4Nmc3Y3B3Yy9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJncmFwaFFMIjp7InVybCI6Imh0dHBzOi8vcGF5bWVudHMuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS9ncmFwaHFsIiwiZGF0ZSI6IjIwMTgtMDUtMDgifSwiY2hhbGxlbmdlcyI6W10sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy8zbW44NnE5ejg2ZzdjcHdjL2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL29yaWdpbi1hbmFseXRpY3Mtc2FuZC5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tLzNtbjg2cTl6ODZnN2Nwd2MifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiVVBCIiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsImVudmlyb25tZW50Ijoib2ZmbGluZSIsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJiaWxsaW5nQWdyZWVtZW50c0VuYWJsZWQiOnRydWUsIm1lcmNoYW50QWNjb3VudElkIjoidXBiIiwiY3VycmVuY3lJc29Db2RlIjoiRVVSIn0sIm1lcmNoYW50SWQiOiIzbW44NnE5ejg2ZzdjcHdjIiwidmVubW8iOiJvZmYifQ==
```

Which is b64 decoded to the following JSON:
```
{
   "version":2,
   "authorizationFingerprint":"1d40bccf08e57686fa1c83ae4bbe6cdd0ec58a4010c74bc537c084eff2125e4b|created_at=2019-03-13T12:58:26.661057161+0000\u0026merchant_id=3mn86q9z86g7cpwc\u0026public_key=8qq9zsw66tgc6fcv",
   "configUrl":"https://api.sandbox.braintreegateway.com:443/merchants/3mn86q9z86g7cpwc/client_api/v1/configuration",
   "graphQL":{
      "url":"https://payments.sandbox.braintree-api.com/graphql",
      "date":"2018-05-08"
   },
   "challenges":[

   ],
   "environment":"sandbox",
   "clientApiUrl":"https://api.sandbox.braintreegateway.com:443/merchants/3mn86q9z86g7cpwc/client_api",
   "assetsUrl":"https://assets.braintreegateway.com",
   "authUrl":"https://auth.venmo.sandbox.braintreegateway.com",
   "analytics":{
      "url":"https://origin-analytics-sand.sandbox.braintree-api.com/3mn86q9z86g7cpwc"
   },
   "threeDSecureEnabled":true,
   "paypalEnabled":true,
   "paypal":{
      "displayName":"UPB",
      "clientId":null,
      "privacyUrl":"http://example.com/pp",
      "userAgreementUrl":"http://example.com/tos",
      "baseUrl":"https://assets.braintreegateway.com",
      "assetsUrl":"https://checkout.paypal.com",
      "directBaseUrl":null,
      "allowHttp":true,
      "environmentNoNetwork":true,
      "environment":"offline",
      "unvettedMerchant":false,
      "braintreeClientId":"masterclient3",
      "billingAgreementsEnabled":true,
      "merchantAccountId":"upb",
      "currencyIsoCode":"EUR"
   },
   "merchantId":"3mn86q9z86g7cpwc",
   "venmo":"off"
}
```

When a transaction starts, a nonce must be requested, from Braintree, by the client using GET:
```
sharedCustomerIdentifierType=undefined
&braintreeLibraryVersion=braintree/web/2.32.1
&authorizationFingerprint=1d40bccf08e57686fa1c83ae4bbe6cdd0ec58a4010c74bc537c084eff2125e4b|created_at=2019-03-13T12:58:26.661057161+0000
&merchant_id=3mn86q9z86g7cpwc
&public_key=8qq9zsw66tgc6fcv
&_meta[integration]=dropin
&_meta[source]=form
&_meta[sessionId]=fe3f897d-732f-4363-ac87-00c6b742089c
&share=false
&&creditCard[number]=5555 5555 5555 4444
&creditCard[expirationMonth]=12
&creditCard[expirationYear]=20
&creditCard[cvv]=
&_method=POST
&callback=callback_jsonc23787ffae434e498e6b779ac962ccf3
```

The response is as follows:
```
/**/callback_jsonc23787ffae434e498e6b779ac962ccf3({
   "creditCards":[
      {
         "type":"CreditCard",
         "nonce":"tokencc_bf_n4x65g_fv2pgf_77x6cr_q4w5zf_b74",
         "description":"ending in 44",
         "consumed":false,
         "threeDSecureInfo":null,
         "details":{
            "bin":"555555",
            "lastTwo":"44",
            "lastFour":"4444",
            "cardType":"MasterCard"
         },
         "binData":{
            "prepaid":"Unknown",
            "healthcare":"Unknown",
            "debit":"Unknown",
            "durbinRegulated":"Unknown",
            "commercial":"Unknown",
            "payroll":"Unknown",
            "issuingBank":"Unknown",
            "countryOfIssuance":"Unknown",
            "productId":"Unknown"
         }
      }
   ],
   "status":201
})
```


The client starts the transaction by sending the nonce to the merchant:
```
payment_method_nonce=tokencc_bf_n4x65g_fv2pgf_77x6cr_q4w5zf_b74
```


#### Merchant SDK

Receives the token and creates a request with the following headers & XML content to Braintree:
```
{
'Accept': 'application/xml', 
'Authorization': b'BasicOHFxOXpzdzY2dGdjNmZjdjplMGU0OGMxYjUxMjViYzIzYjljMTdhNmVjZjkwMjQyNw==',
'User-Agent': 'Braintree Python 3.51.0', 
'Accept-Encoding': 'gzip', 
'X-ApiVersion': '5', 
'Content-type': 'application/xml'
}

<transaction>
<amount>10.00</amount>
<payment_method_nonce>tokencc_bf_xxh8k9_8brwqz_qdwb37_yrp788_dh2</payment_method_nonce>
<options>
<submit_for_settlement type="boolean">true</submit_for_settlement>
</options>
<type>sale</type>
</transaction>
```

Where `OHFxOXpzdzY2dGdjNmZjdjplMGU0OGMxYjUxMjViYzIzYjljMTdhNmVjZjkwMjQyNw==` is `b64(public_api_key:private_api_key)`.


### Cardinity

Docs: https://developers.cardinity.com/api/v1/

#### Client SDK

Not much here. The client receives from the merchant a form which includes transaction details & identifiers as input hidden fields and a signature added by the merchant to prevent tampering.

#### Merchant SDK

Now, Cardinity exposes 2 payment methods. One is performed by the Client SDK forwarding information to the payment processor and the other implies that the merchant can charge the client by knowing his card details.

The former implies generating a signature (HmacSHA256), which is implemented as `checkout()` in `Main.java`. The signature must be forwarded by the client.
The latter is implemented in the same file as `performClientPayment()`.

### Cloudpayments.ru

Docs: https://developers.cloudpayments.ru/en/#general

#### Client SDK

JavaScript-based, performs RSA encryption of the following tuple:
```
card_number@expMonth+expYear@CVV@merchant_public_api_key
```
Example:
```
5555555555554444@2411@123@test_api_00000000000000000000001
```

The public key is directly hardcoded into the script:
```
pem: "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjU/bq6YZD2H0DUhbtEBg\r\nJIyiurM8eX3aH02/ZWr6VZ27WF93ylWC4cGAe50sSgiA8NCW0G/UL77kAkebJQrJ\r\njVdt7SvDypSPk1mXNK0i9cI9DrdmAHLGLlYJx7eeY6h4JShLhOBnKRghi0S4uL5N\r\nL7W4OUgCeUlGWcmz8ssNEQ5w17rfUF9TxYEFVKFMGN/SSaYNUr4znGt2r97YPsPy\r\n0Sk4dGHhMXr1QGR05UQeVuU43OuRAFxA71YbuCRUYg5ENwKM/1RnNcu8v7kXFA4L\r\nqGV9AncHLIZEOqWgY+4balVXlKIcMVN6W+PXKJpowOyB9QIq1Ec3OMaJ3sGpOppx\r\nKQIDAQAB\r\n-----END PUBLIC KEY-----"
```

The cryptogram is sent directly to the payment processor.


#### Merchant SDK

Found no implementation; must only provide the form presented in `index.html` which includes the public API key of the merchant.


### Datatrans

Docs: https://docs.datatrans.ch/docs/getting-started-home

#### Client SDK

A form is presented to the client by the merchant which contains transaction details and a signature. Not much going on here.

#### Merchant SDK

Has to create the signature (HMAC-SHA256) and provide the aforementioned form. Implementation is provided in `signing-java/Main.java` with additional classes (`DatatypeConverter `) for compatibility reasons (as it has been removed in java 11). 

```
getHexaSHA256Signature("", "merchant-hmac-key", "merchant-id", "amount", "currency", "transaction-reference");
```

Example:
```
getHexaSHA256Signature("", "7d899390f62fe945b6350b2554150a37a1b66fee19dc8ddc0ea83ea0b9b3b0bf2f5ba3dd0ddea0a2a9826c88a7dfbe33156f594aced03e50a867314bce66a989",  "1100020006", "850", "CHF", "91827364");
```


### Payeezy

Docs: https://developer.payeezy.com/

#### Client SDK

Not much going on here. The client has to send card details to the merchant.

#### Merchant SDK

See `payeezy_direct_API-master\payeezy_python\example\example.py`. A HMAC-SHA256 is computed as follows:
```
HMAC-SHA256(payload, api_secret)
```

where
```
payload =  apikey + nonce + timestamp + token + card_number + card_exp_y + card_exp_m + CVV + amount + merchant_ref
```

### Pay.jp

Identical to Stripe. 

### Stripe

Docs: https://stripe.com/docs

#### Client SDK

Exchanges client card data for a token (without encryption or signing) by contacting Stripe. Then sends the token to the merchant. (see `index.html`).
The merchant is identified by the public API key included in the form: `pk_test_SsZvcqc6yk0yAjEEQi1kB4wr00uSbrC6T8`

Example request:
```
email=dan%40d.d
&validation_type=card
&payment_user_agent=Stripe+Checkout+v3+(stripe.js%2F9dc17ab)
&user_agent=Mozilla%2F5.0+(iPhone%3B+CPU+iPhone+OS+10_1_1+like+Mac+OS+X)+AppleWebKit%2F602.2.14+(KHTML%2C+like+Gecko)+Version%2F10.0+Mobile%2F14B100+Safari%2F602.1
&device_id=ae9e197d-e952-407b-8417-745bc5ced2c9
&referrer=http%3A%2F%2F10.42.0.1%2Findex.html
&time_checkout_opened=1553854069
&time_checkout_loaded=1553854068
&card[number]=4242+4242+4242+4242
&card[cvc]=123
&card[exp_month]=12
&card[exp_year]=2020
&card[name]=dan%40d.d
&time_on_page=26508
&guid=6e4842ce-8177-443f-b856-e619885b5ff9
&muid=04e93e45-cbfd-4e43-b74e-27f71e610209
&sid=85f6e640-3ec5-49d7-ad82-b61ee3bfed0f
&key=pk_test_WNKtNVnIDOChiP7KIwYe9g7m
```

Response:

```
{
  "id": "tok_1EJHdEJlQEZ71PXgswUgEXBG",
  "object": "token",
  "card": {
	"id": "card_1EJHdEJlQEZ71PXgxvmih5mP",
	"object": "card",
	"address_city": null,
	"address_country": null,
	"address_line1": null,
	"address_line1_check": null,
	"address_line2": null,
	"address_state": null,
	"address_zip": null,
	"address_zip_check": null,
	"brand": "Visa",
	"country": "US",
	"cvc_check": "pass",
	"dynamic_last4": null,
	"exp_month": 12,
	"exp_year": 2020,
	"funding": "credit",
	"last4": "4242",
	"metadata": {
	},
	"name": "dan@d.d",
	"tokenization_method": null
  }
  ,
  "client_ip": "141.85.233.147",
  "created": 1553854096,
  "email": "dan@d.d",
  "livemode": false,
  "type": "card",
  "used": false
}
```



#### Merchant SDK

Implemented in `stripe-server.py`.
Performs no validation whatsoever - simply forwards data between client and Stripe.
The merchant receives the token (`tok_1EJHdEJlQEZ71PXgswUgEXBG`) from the client. Request contents:

```
stripeToken=tok_1EJHdEJlQEZ71PXgswUgEXBG
&stripeTokenType=card
&stripeEmail=dan%40d.d
```

And issues a transaction request with the following headers and content to `https://api.stripe.com/v1/charges`:
```
{
'X-Stripe-Client-User-Agent': 
'{
"bindings_version": "2.23.0", 
"lang": "python", 
"publisher": "stripe", 
"httplib": "requests", 
"lang_version": "3.6.7", 
"platform": "Linux-4.15.0-47-generic-x86_64-with-Ubuntu-18.04-bionic", 
"uname": "Linux lasher 4.15.0-47-generic #50-Ubuntu SMP Wed Mar 13 10:44:52 UTC 2019 x86_64 x86_64"
}',
'User-Agent': 'Stripe/v1 PythonBindings/2.23.0', 
'Authorization': 'Bearer sk_test_qBelTianAXXaCfNycx8abgnV', 
'Content-Type': 'application/x-www-form-urlencoded', 
'Idempotency-Key': '221bd0b0-6a16-40ff-b9d9-a34c1cc28066'   // randomly generated each time with uuid.uuid4()
}

amount=100
&currency=usd
&description=Test+transaction
&source=tok_1EJHdEJlQEZ71PXgswUgEXBG
```


### SecurionPay

Docs: https://securionpay.com/docs/api

Not completely implemented.

#### Client SDK

It's presented as a form which contains the merchant's public API key (`pk_test_Yrd69OY5calrDAOOVT2o4fww`) and a set of b64 encoded transaction details:

```
NjZmNTM0ZmExN2RmOGI5ODQyMmViN2EwZGM0OGZlMThiNDI3YTYyYWZkOTQ1ZGUyY2EwZmE1MjJkOTA2YTQ2NXx7ImNoYXJnZSI6eyJhbW91bnQiOjI0OTksImN1cnJlbmN5IjoiRVVSIn0sInRocmVlRFNlY3VyZSI6eyJlbmFibGUiOmZhbHNlfX0=
```

Which are decoded as:
```
66f534fa17df8b98422eb7a0dc48fe18b427a62afd945de2ca0fa522d906a465|{"charge":{"amount":2499,"currency":"EUR"},"threeDSecure":{"enable":false}}
```

The first part represents a HMAC-SHA256 signature of the content, performed by the merchant to prevent tampering. The form spawns an iframe to SecurionPay's server which contains inputs for providing card details.

#### Merchant SDK

Is responsible of providing the form with transaction details and signature. The signature can be generated as follows:
```
export checkout_request='{"charge":{"amount":499,"currency":"EUR"}}'
export signature=`echo -n "$checkout_request" | openssl dgst -sha256 -hmac 'pr_test_tXHm9qV9qV9bjIRHcQr9PLPa' | sed 's/^.* //'`
echo -n "$signature|$checkout_request" | base64
```