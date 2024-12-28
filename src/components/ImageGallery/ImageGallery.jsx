import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.galleryList}>
      {images.map(image => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard {...image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
