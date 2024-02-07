import styles from './button.module.css';

const Button = ({ title, theme }) => {
  return (
    <button className={`${theme == 'blue' ? styles.blueBtn : ''}`}>
      {title}
    </button>
  );
};

export default Button;
