import { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); // Це важливо для доступності!

const ImageModal = ({ isOpen, onClose, imageUrl, altText }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        onClose(); // Закриваємо модальне вікно при натисканні Esc
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalWrapper} onClick={onClose}>
        <img src={imageUrl} alt={altText} className={styles.modalImage} />
      </div>
    </Modal>
  );
};

export default ImageModal;
