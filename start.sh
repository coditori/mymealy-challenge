#!/bin/bash

docker-compose up &
sleep 30
mvn clean package
docker build . -t mymealy:latest
java -jar ./target/mymealy.jar
