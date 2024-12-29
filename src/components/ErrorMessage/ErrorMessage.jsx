import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const ErrorMessage = () => {
  const hasToastShown = useRef(false); // Зберігаємо стан виклику toast

  useEffect(() => {
    if (!hasToastShown.current) {
      toast.error('Something went wrong 🤦‍♂️, try again...');
      hasToastShown.current = true; // Встановлюємо прапорець
    }
  }, []);

  return null; // Нічого не рендеримо
};

export default ErrorMessage;
