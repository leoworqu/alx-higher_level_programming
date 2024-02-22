#!/usr/bin/python3
"""
takes in a URL and an email, sends a POST request to the passed URL
with the email as a parameter, and displays the body of the response
"""


import urllib.request
import urllib.parse
import sys

if __name__ == "__main__":
    url = sys.argv[1]
    email = sys.argv[2]

    data = urllib.parse.urlencode({'email': email}).encode()

    req = urllib.request.Request(url, data=data, method='POST')

    with urllib.request.urlopen(req) as response:
        html = response.read()
        decoded_html = html.decode('utf-8')

    print(decoded_html)
