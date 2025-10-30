import styles from './button.module.css';

const Button = ({ title, theme = 'blue', onClick }) => {
  return (
    <button
      className={`${theme == 'blue' ? styles.blueBtn : ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
