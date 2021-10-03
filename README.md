# mymealy-challenge
## Front-End Challenge:
Piter (Marketing guy) asked you to implement a cryptocurrency live pricing application, he needs two core features:
1- List of cryptos sorted by price
2- A search widget to search on the list of cryptos (searching BTC returns all cryptos with BTC inside their name, like BTCUSDT, BTCETH, ...)

Please use technology of your choice:
	- If you are a web developer you can use: ReactJS/AngularJS/VueJS
	- And for mobile you can use Android/iOS/Flutter/ReactNative

Data Source:
	Take a look at the below Binance API documentation link for more information about your source
	https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-market-tickers-stream

## Back-End Challenge:
We need to provide a RESTful API for front-ends to:
- Get bitcoin-usd rate periodically (based on the config, as an example BTCETH) then show the rate in the response of "rates" endpoint.
- Return the history of specified coin (as an example BTCETH). It also needs to have "startTime", "endTime" as two filtered params.

Data Source:
	Take a look at the below Binance API documentation link for more information about your source
	https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md

## Tips:
	- There is no rush to finish the project you have 1 week to finish it (you can ask for an extend if needed)
	- The project should work and deliver the core features and we also consider clean code
  - Please provide a good documentation
  - We appreciate TDD

## How to deliver the project?
	Please fork this repo and send a pull request whenever you are done
  
