from flask import Flask, request, send_from_directory
import os
import requests
import json
import twocheckout

app = Flask(__name__)

proxy = 'http://172.19.7.119:8080'

os.environ['http_proxy'] = proxy 
os.environ['HTTP_PROXY'] = proxy
os.environ['https_proxy'] = proxy
os.environ['HTTPS_PROXY'] = proxy

# card: 4000000000000002






@app.route('/<path:filename>')
def serve_index(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, '2checkout'), filename)


@app.route("/checkout", methods=['GET', 'POST'])
def create_purchase():

    print(request.form["token"])

    twocheckout.Api.auth_credentials({
    'private_key': 'A7D25018-833C-4A94-B3D9-01F3CC7D0707',
    'seller_id': '901412262',
    'mode': 'sandbox'
    })

    token = request.form["token"]

    params = {
    'merchantOrderId': '123',
    'token': token,
    'currency': 'USD',
    'total': '1.00',
    'billingAddr': {
        'name': 'Testing Tester',
        'addrLine1': '123 Test St',
        'city': 'Columbus',
        'state': 'OH',
        'zipCode': '43123',
        'country': 'USA',
        'email': 'cchristenson@2co.com',
        'phoneNumber': '555-555-5555'
        }
    }

    try:
        result = twocheckout.Charge.authorize(params)
        print(result.responseCode)
    except twocheckout.TwocheckoutError as error:
        print(error.msg)

    #return response.content
    return '{ "result": "transaction_complete" }'


if __name__ == '__main__': 
	app.run(host='0.0.0.0', port=80)

