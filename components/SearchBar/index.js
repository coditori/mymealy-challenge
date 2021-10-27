import styles from './Search.module.css';

const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.crypto_search}>
      <input className={styles.crypto_input} {...rest} />
    </div>
  );
};

export default SearchBar;
