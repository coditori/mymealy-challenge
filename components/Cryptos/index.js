import styles from './Cryptos.module.css';

const Cryptos = ({
  name,
  price,
  symbol,
  volume,
  priceChange,
}) => {
  return (
    <div className={styles.crypto_container}>
      <div className={styles.crypto_row}>
        <div className={styles.crypto}>
          <h1 className={styles.crypto_h1}>{name}</h1>
          <p className={styles.crypto_symbol}>{symbol}</p>
        </div>
        <div className={styles.crypto_data}>
          <p className={styles.crypto_price}>${price}</p>
          <p className={styles.crypto_volume}>${volume.toLocaleString()}</p>
          <p className={(styles.crypto_percent)}>{priceChange.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Cryptos;
