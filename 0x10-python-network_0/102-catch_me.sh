#!/bin/bash
# Send a POST request to 0.0.0.0:5000/catch_me with a custom user agent header
curl -sL 0.0.0.0:5000/catch_me_3 -X PUT -H "Origin:HolbertonSchool"
