import { useState } from 'react';
import styles from './selectBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SelectBtn = ({ title, values }) => {
  const [value, setValue] = useState('Linear');
  const [showOptions, setShowOptions] = useState(false);

  const upperCaseTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={title}>{upperCaseTitle}</label>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          name={title}
          id={title}
          readOnly
          className={`${styles.selectInput} ${
            showOptions ? styles.optionsVisibleInput : ''
          }`}
          value={value}
          onClick={() => setShowOptions((old) => (old === null ? true : !old))}
        />
        <FontAwesomeIcon icon={faChevronDown} className={styles.downImg} />
        <div
          className={`${styles.options} ${
            showOptions ? styles.optionsVisible : ''
          }`}
        >
          {values.map((item, index) => {
            return (
              <div
                className={`${styles.option} ${
                  value === item ? styles.optionSelected : ''
                }`}
                onClick={() => {
                  setValue(item);
                  setShowOptions(false);
                }}
                key={index}
              >
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectBtn;
