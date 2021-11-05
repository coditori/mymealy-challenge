import { useState, useEffect } from 'react';
import CryptoList from '../components/CryptoList';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';

export const fetchData = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  return await res.json();
};

export default function Home({ filteredCryptos }) {
  const [search, setSearch] = useState('');
  const [prices, setPrices] = useState(filteredCryptos.sort(function (a, b) {
    return b.current_price - a.current_price;
  }));

  useEffect(() => {
    const interval = setInterval(async () => {
      //This will run every second!
      const result = await fetchData();
      setPrices(result);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const allCryptos = prices.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className='crypto_app'>
        <SearchBar type='text' placeholder='Search' onChange={handleChange} />
        <CryptoList filteredCryptos={allCryptos} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {

  const filteredCryptos = await fetchData();

  return {
    props: {
      filteredCryptos
    }
  };
};
