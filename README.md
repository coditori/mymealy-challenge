# MyMealy Challenge

### Start project

In order to run project
```> start.sh```

### Reference Doc

This project deployed as a response to the user story and the techs which are included:

* Spring Webflux
* Apache Camel
* Lombok
* Docker and docker-compose
* Mysql
* mapstruct

Base on user story we have 2 main apis which are:

localhost:8888
* GET /api/rates/history

```curl --location --request GET 'localhost:8888/api/rates'```

* GET /api/rates/history

```curl --location --request GET 'localhost:8888/api/rates/history?startTime=0&endTime=9999999999999'```

For detail and curls of api see http://localhost:8888/swagger-ui.html

#### Debug
* If project not started correctly because of database with error like this ```Could not create connection to database server. Attempted reconnect 3 times. Giving up.``` first start db docker-compose or run it manually then start project.
* Because of Binance filtering it's necessary to run your anti filter.
### Next step

It is better to add CircuitBreaker (Spring Resilience4J) in order to better results and Prometheus to check health of apis. 




  
