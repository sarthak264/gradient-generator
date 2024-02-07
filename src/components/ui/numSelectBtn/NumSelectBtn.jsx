import styles from './numSelectBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

const NumSelectBtn = ({ title, symbol, range, list }) => {
  const [value, setValue] = useState(0 + symbol);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const upperCaseTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const getNumValue = (v) => {
    let num;
    v.includes(symbol) ? (num = v.split(symbol)[0]) : (num = v);
    return num;
  };

  useEffect(() => {
    checkForSelectedOption();
  }, [value]);

  const handleInput = (e) => {
    const v = e.target.value;
    return setValue(v);
  };

  const handleKeyPress = (e) => {
    const keyPressed = e.key;
    const v = e.target.value;
    let num = parseInt(getNumValue(v));
    // console.log(num);
    if (keyPressed === 'Enter') {
      validateInput(e);
    } else if (keyPressed === 'ArrowUp') {
      num = num < range ? num + 1 : num;
    } else if (keyPressed === 'ArrowDown') {
      num = num > 0 ? num - 1 : num;
    }
    return setValue(num + symbol);
  };

  const validateInput = (e) => {
    const v = e.target.value;
    let num = getNumValue(v);
    num = num > range ? range : num;
    return setValue(num + symbol);
  };

  const optionClicked = (e, index) => {
    setSelectedOption(index);
    setValue(list[index]);
    setShowOptions(false);
  };

  const checkForSelectedOption = () => {
    if (list.includes(value)) {
      const index = list.indexOf(value);
      setSelectedOption(index);
    } else {
      setSelectedOption(null);
    }
  };

  return (
    <div className={styles.numSelectWrapper}>
      <label htmlFor={title}>{upperCaseTitle}</label>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          name={title}
          id={title}
          value={value}
          className={styles.input}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyPress(e)}
          onBlur={(e) => validateInput(e)}
        />
        <div
          className={styles.imgWrapper}
          onClick={() => setShowOptions((old) => (old === null ? true : !old))}
        >
        <FontAwesomeIcon icon={faChevronDown} className={styles.downImg} />
        </div>
      </div>
      <div
        className={`${styles.options} ${
          showOptions ? styles.optionsVisible : ''
        }`}
      >
        {list.map((item, index) => {
          return (
            <div
              className={`${styles.option} ${
                selectedOption === index ? styles.optionSelected : ''
              }`}
              key={index}
              onClick={(e) => optionClicked(e, index)}
            >
              <p>{item}</p>
              <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(NumSelectBtn);
