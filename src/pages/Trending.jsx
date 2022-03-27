import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getTrending } from '../api/trending';
import { Grid } from '../components/Grid';
import { LoadMoreButton } from '../components/LoadMoreButton';

export const Trending = () => {
  const [items, setItems] = useState(undefined);
  const [offset, setOffset] = useState(0);
  const limit = 50;
  const fetchTrending = async () => {
    const { data } = await getTrending(limit, offset);
    setItems(items ? [...items, ...data] : data);
  };

  const loadMore = () => {
    setOffset(offset + limit);
  };

  useEffect(() => {
    fetchTrending();
  }, [offset]);

  return (
    <>
      <Helmet>
        <title>Giphy | Trending</title>
      </Helmet>
      <div>
        {items ? <Grid items={items} /> : 'Loading...'}
        <LoadMoreButton onClick={loadMore} />
      </div>
    </>
  );
};
