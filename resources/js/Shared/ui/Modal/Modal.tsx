import cn from 'classnames';
import styles from './Modal.module.css';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean; // открыто ли модальное окно
  onClose?: () => void; // функция закрытия модального окна
}
const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen = false, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  //на каждый перерендер новые ссылки, поэтому используем useCallback, которая запоминает ссылку и возвращает ее если в массиве зависимостей ничего не изменилось
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <div className={cn(styles.modal, className, mods)}>
      <div
        className={styles.overlay}
        onClick={handleClose}
      >
        <div
          className={styles.content}
          onClick={handleContentClick}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
