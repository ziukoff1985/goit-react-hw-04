import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.buttonWrap}>
      <button onClick={onClick} className={styles.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
