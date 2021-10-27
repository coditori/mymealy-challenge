# mymealy-challenge
## Front-End Challenge:
Piter (Marketing guy) asked you to implement a cryptocurrency live pricing application, he needs two core features:
1. List of cryptos sorted by price
2. A search widget to search on the list of cryptos (searching BTC returns all cryptos with BTC inside their name, like BTCUSDT, BTCETH, ...)

Please use technology of your choice:
- ReactJS>Next.js

Data Source:
	Take a look at the Binance API documentation link for more information about your source
	https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-market-tickers-stream

## Getting Started

First, install:

```bash
yarn install
```


Then, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Doc

There is two component:
1. crypto: contain list of cryptos
2. search: for search in cryptos list
