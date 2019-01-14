#!/bin/bash

bash -c "sudo apt-get install docker"

bash -c "sudo docker build -t node-server:8.0 ."

bash -c "sudo docker run -p 3000:3000 -d node-server:8.0"

#bash -c "firefox $PWD/index.html &"