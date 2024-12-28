import styles from './ImageCard.module.css';

const ImageCard = ({
  urls,
  alt_description,
  likes,
  description,
  onImageClick,
}) => {
  const { small, regular } = urls;

  const handleClick = () => onImageClick(regular);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          onClick={handleClick}
          className={styles.image}
          src={small}
          alt={alt_description}
        />
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
