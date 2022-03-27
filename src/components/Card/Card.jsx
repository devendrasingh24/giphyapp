import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({
  previewUrl,
  id,
  className,
}) => {
 
  const [loaded, setLoaded] = useState(false);

  const inlineImageStyles = {
    opacity: loaded ? 1 : 0
  };

  const onLoad = (e) => {
    setLoaded(true);
  };

  const loaderInlineStyles = {
    opacity: loaded ? 0 : 1
  }

  return (
    <Link
      className={[styles.root, className].join(' ')}
      to={`${process.env.PUBLIC_URL}/gif/${id}`}
    >
     <img
          src={previewUrl}
          style={inlineImageStyles}
          onLoad={onLoad}
          alt=''
          className={styles.imgGif}
        />
      <div className={styles.loader} style={loaderInlineStyles}>Loading</div>
    </Link>
  );
};

export { Card };