import propTypes from 'prop-types';
import loadBtnCSS from './Button.module.css';

export const Button = ({ changePage }) => {
  return (
    <div className={loadBtnCSS.WrapperBtn}>
      <button className={loadBtnCSS.Button} type="button" onClick={changePage}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  changePage: propTypes.func.isRequired,
};