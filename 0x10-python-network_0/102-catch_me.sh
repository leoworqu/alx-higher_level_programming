#!/bin/bash
# Send a POST request to 0.0.0.0:5000/catch_me with a custom user agent header
curl -s -X PUT -H "User-Agent: I am a secret agent" -d "user_id=98" 0.0.0.0:5000/catch_me
