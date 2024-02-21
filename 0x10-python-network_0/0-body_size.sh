#!/bin/bash
#Bash script that takes URL  sends a request and displays the size of the body
echo $(curl -s -o /dev/null -w "%{size_download}" "$1")
