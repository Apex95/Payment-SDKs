import braintree
import os
from flask import Flask, request, send_from_directory

app = Flask(__name__)

proxy = 'http://172.19.7.119:8080'

os.environ['http_proxy'] = proxy 
os.environ['HTTP_PROXY'] = proxy
os.environ['https_proxy'] = proxy
os.environ['HTTPS_PROXY'] = proxy

gateway = braintree.BraintreeGateway(
  braintree.Configuration(
    environment=braintree.Environment.Sandbox,
    merchant_id='3mn86q9z86g7cpwc',
    public_key='8qq9zsw66tgc6fcv',
    private_key='e0e48c1b5125bc23b9c17a6ecf902427'
  )
)

#client_token = gateway.client_token.generate()
#print("client token: ", client_token)

@app.route('/<path:filename>')
def serve_index(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'braintree'), filename)


nonce = ''

@app.route("/checkout", methods=["POST"])
def create_purchase():
  nonce = request.form["payment_method_nonce"]
  print("nonce: ", nonce)

  print(request.form)
  # ImmutableMultiDict([('payment_method_nonce', 'tokencc_bf_bwm7tt_prb9c5_k4m6y7_qbzssz_jy6')])


  #return "no charge"

  result = gateway.transaction.sale({
	  'amount': '10.00',
	  'payment_method_nonce': nonce,
	  'options': {
	    'submit_for_settlement': True
    }
  })

  return '{ "result": "transaction_complete" }'


# client token must be requested on mobile apps

if __name__ == '__main__': 
	app.run(host='0.0.0.0', port=80)
