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


@app.route('/<path:filename>')
def serve_index(filename):
    root_dir = os.path.dirname(os.getcwd())
    return send_from_directory(os.path.join(root_dir, 'cardinity'), filename)

@app.route('/transaction_complete', methods=['GET', 'POST'])
def checkout():
    return '{ "result": "transaction_complete" }'

if __name__ == '__main__': 
	app.run(host='0.0.0.0', port=80)

