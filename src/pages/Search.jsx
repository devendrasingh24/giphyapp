import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getQuery } from '../utils';
import { searchRequest } from '../api/search';
import { Grid } from '../components/Grid';
import { LoadMoreButton } from '../components/LoadMoreButton';

export const Search = ({ location }) => {
  const [items, setItems] = useState(undefined);
  const [query, setQuery] = useState(location.search);
  const [offset, setOffset] = useState(0);
  const limit = 25;

  const search = async (value) => {
    const { data } = await searchRequest(value, limit, offset);
    setItems(items ? [...items, ...data] : data);
  };

  const loadMore = () => {
    setOffset(offset + limit);
  };

  useEffect(() => {
    const query = getQuery(location, 'q');
    setQuery(query);
  }, [location.search]);

  useEffect(() => {
    search(query);
  }, [query, offset]);

  return (
    <>
      <Helmet>
        <title>Giphy | Search</title>
      </Helmet>
      <div>
        {items ? <Grid items={items} /> : 'Loading'}{' '}
        <LoadMoreButton onClick={loadMore} />
      </div>
    </>
  );
};
