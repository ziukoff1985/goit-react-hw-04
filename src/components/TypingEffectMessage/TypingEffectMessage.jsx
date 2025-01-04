import styles from './TypingEffectMessage.module.css';
import TypingEffect from 'react-typing-effect';

const TypingEffectMessage = () => {
  return (
    <div className={styles.typingTextWrap}>
      <TypingEffect
        text={[
          'Find the Perfect Image in a Snap...',
          'Discover. Explore. Inspire.',
          'Endless Possibilities, One Click Away!',
        ]} // Текст для друкування
        cursor="|" // Знак курсора
        speed={100} // Швидкість друкування (в мс)
        eraseSpeed={100} // Швидкість стирання (в мс), якщо потрібно
        typingDelay={0} // Затримка перед друкуванням
        className={styles.typingEffect}
        displayTextRenderer={text => (
          <h1 className={styles.h1}>
            {text.split('').map((char, index) => (
              <span
                key={index}
                style={
                  index % 2 === 0 ? { color: 'white' } : { color: 'white' }
                }
              >
                {char}
              </span>
            ))}
          </h1>
        )}
      />
    </div>
  );
};

export default TypingEffectMessage;
