import Cryptos from './Cryptos';

export default function CryptoList({ filteredCryptos }) {
  return (
    <>
      {filteredCryptos.map(crypto => {
        return (
          <Cryptos
            key={crypto.id}
            name={crypto.name}
            id={crypto.id}
            price={crypto.current_price}
            symbol={crypto.symbol}
            marketcap={crypto.total_volume}
            volume={crypto.market_cap}
            image={crypto.image}
            priceChange={crypto.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}
