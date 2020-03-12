from flask import Flask, request, send_from_directory
import stripe
import os

app = Flask(__name__)


proxy = 'http://172.19.7.119:8080'

os.environ['http_proxy'] = proxy 
os.environ['HTTP_PROXY'] = proxy
os.environ['https_proxy'] = proxy
os.environ['HTTPS_PROXY'] = proxy




@app.route('/<path:filename>')
def serve_index(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'stripe'), filename)


@app.route("/checkout", methods=["POST"])
def create_purchase():

    token = request.form['stripeToken'] 
    print(request.form)
    #ImmutableMultiDict([('stripeToken', 'tok_1EG7odJlQEZ71PXgtuSZjG9l'), ('stripeTokenType', 'card'), ('stripeEmail', 'dan@dan.dan')])


    if (request.form['noforward'] == "1"):
        return "not_forwarded"

    stripe.api_key = "sk_test_HuaxqBuYou1sasWTgV6cWTrz00AJfSbXzd"
    charge = stripe.Charge.create(
        amount=100,
        currency='usd',
        description='Test transaction',
        source=token,
    )

    return '{ "result": "transaction_complete" }'

@app.route("/checkout2", methods=["POST"])
def create_purchase2():

    token = request.form['stripeToken'] 
    print(request.form)
    #ImmutableMultiDict([('stripeToken', 'tok_1EG7odJlQEZ71PXgtuSZjG9l'), ('stripeTokenType', 'card'), ('stripeEmail', 'dan@dan.dan')])


    stripe.api_key = "sk_test_HuaxqBuYou1sasWTgV6cWTrz00AJfSbXzd"
    charge = stripe.Charge.create(
        amount=-100,
        currency='usd',
        description='Test transaction',
        source=token,
    )

    return '{ "result": "transaction_complete" }'

if __name__ == '__main__': 
	app.run(host='0.0.0.0', port=80)

