import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); // Додаємо елемент застосунку для доступності

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose} // Закриття при ESC або кліку поза модалкою
      className={styles.modalContent} // Стилізація модального контенту
      overlayClassName={styles.modalOverlay} // Стилізація бекдропу
    >
      {image && (
        <img src={image} alt="Large preview" className={styles.modalImage} />
      )}
    </Modal>
  );
};

export default ImageModal;
