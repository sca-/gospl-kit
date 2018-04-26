import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

const Button = ({ children, className, onClick = () => {} }) => (
  <div className={cn(styles.button, className)} onClick={onClick}>
    {children}
  </div>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
