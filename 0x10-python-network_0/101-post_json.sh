#!/bin/bash
#Bash script that sends a JSON POST request to a URL passed as the first arg
curl -s -X POST -d @"$2" -H "Content-Type: application/json" "$1"
