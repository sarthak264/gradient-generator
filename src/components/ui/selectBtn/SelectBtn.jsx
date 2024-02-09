import { useState } from 'react';
import styles from './selectBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useStore from '../../../store';
import capitalizeWord from '../../../utils/capitalizeWord';

const SelectBtn = ({ title, values, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const [showOptions, setShowOptions] = useState(false);
  const { setType } = useStore();

  const upperCaseTitle = capitalizeWord(title);

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
                  setType(item);
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
