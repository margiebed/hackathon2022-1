import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './input.module.scss';

export const Input = ({ placeholder, className, type, value, setValue }) => {
  const inputStyle = clsx(styles.input, className);
  const handleChange = ({ target: { value } }) => setValue && setValue(value);

  return <input placeholder={placeholder} className={inputStyle} type={type} value={value} onChange={handleChange} />;
};

Input.PropTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
