import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const ErrorNotification = () => {
  const hasToastShown = useRef(false); // Зберігаємо стан виклику toast

  useEffect(() => {
    if (!hasToastShown.current) {
      toast.error('No images found for your query 🤷‍♂️');
      hasToastShown.current = true; // Встановлюємо прапорець
    }
  }, []);

  return null; // Нічого не рендеримо
};

export default ErrorNotification;
