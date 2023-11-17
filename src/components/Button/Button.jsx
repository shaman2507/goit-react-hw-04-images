import PropTypes from 'prop-types';
import css from './Button.module.css';

function LoadMore({ loadMore }) {

  return (
    <button type="button" className={css.Button} onClick={loadMore}>
      Load More
    </button>
  );
}

export default LoadMore;