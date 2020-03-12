from flask import Flask, request, send_from_directory
import os
import requests
import json

app = Flask(__name__)


#proxy = 'http://172.19.7.119:8080'

#os.environ['http_proxy'] = proxy 
#os.environ['HTTP_PROXY'] = proxy
#os.environ['https_proxy'] = proxy
#os.environ['HTTPS_PROXY'] = proxy

@app.route('/')
def validatepayload():
    print(request.args)
    
    payload = request.args['payload']


    headers = {
        'Content-Type' : 'application/json',
        'X-API-Key' : 'AQEmhmfuXNWTK0Qc+iSAnXQ9tOeOWopJGLGeBADu3MQNa4mFfHCfiG0QwV1bDb7kfNy1WIxIIkxgBw==-kzaWtTH3jeZqEZ4U0pX0fTQ0shUUnsqbvJXqX3hUe78=-AwBz47Xry3HnBNbr'
    }

    data = '{ "payload": "' + payload +'" }'

    response = requests.post('https://checkout-test.adyen.com/v46/payments/result', headers=headers, data=data,  verify=False)
    return response.content


@app.route('/getsession')
def getSession():
    headers = {
        'Content-Type' : 'application/json',
        'X-API-Key' : 'AQEmhmfuXNWTK0Qc+iSAnXQ9tOeOWopJGLGeBADu3MQNa4mFfHCfiG0QwV1bDb7kfNy1WIxIIkxgBw==-kzaWtTH3jeZqEZ4U0pX0fTQ0shUUnsqbvJXqX3hUe78=-AwBz47Xry3HnBNbr'
    }

    data = '{ \
       "merchantAccount": "PopescuraduRO", \
       "sdkVersion": "1.9.9", \
       "channel": "Web", \
       "amount": { \
          "currency": "EUR", \
          "value": 1 \
       }, \
       "reference": "Your order number", \
       "countryCode": "US", \
       "shopperLocale": "en_US", \
       "origin": "http://172.19.7.119", \
       "returnUrl": "http://172.19.7.119" \
    }'

    response = requests.post('https://checkout-test.adyen.com/v46/paymentSession', headers=headers, data=data, verify=False)
    return response.content
    

@app.route('/<path:filename>')
def serve_index(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'adyen'), filename)


@app.route("/checkout", methods=["POST"])
def create_purchase():

    

    return '{ "result": "transaction_complete" }'


if __name__ == '__main__': 
	app.run(host='0.0.0.0', port=80)

