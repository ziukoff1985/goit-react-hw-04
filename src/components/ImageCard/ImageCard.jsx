import styles from './ImageCard.module.css';

const ImageCard = ({ urls, alt_description, likes, description }) => {
  const { small } = urls;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={small} alt={alt_description} />
      </div>
      <p className={styles.imageDescription}>
        <span className={styles.descriptionText}>
          {description || 'No description available'}
        </span>
        <span className={styles.likesText}>Likes: {likes}</span>
      </p>
    </div>
  );
};

export default ImageCard;
