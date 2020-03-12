from flask import Flask, request, send_from_directory
import os
import requests
import json

app = Flask(__name__)

proxy = 'http://172.19.7.119:8080'

os.environ['http_proxy'] = proxy 
os.environ['HTTP_PROXY'] = proxy
os.environ['https_proxy'] = proxy
os.environ['HTTPS_PROXY'] = proxy


private_key = "sk_test_a451da48fc838c75bb038dc0"

@app.route('/<path:filename>')
def serve_index(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'payjp'), filename)


@app.route("/checkout")
def create_purchase():

    # TODO:aici simuleaza curl https://api.pay.jp/v1/charges -u sk_test_a451da48fc838c75bb038dc0: -d "amount=500" -d "currency=jpy" -d "card=tok_fcf957b5b4b2efef694d2a559df2"

    token = request.args['token']

    data = { "amount": "500", "currency": "jpy", "card": token }


    response = requests.post('https://api.pay.jp/v1/charges', data=data, verify=False, auth=(private_key, ''))

    #return response.content
    return '{ "result": "transaction_complete" }'


if __name__ == '__main__': 
	app.run(host='0.0.0.0', port=80, ssl_context=('/home/dan/work/payment_hacking/analyzer/certs/mitmproxy-ca-cert.pem', '/home/dan/work/payment_hacking/analyzer/certs/key.pem'))

