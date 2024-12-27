import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.galleryList}>
      {images.map(image => (
        <li key={image.id} className={styles.galleryItem}>
          <ImageCard {...image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
