import { useEffect } from 'react';
import './modal.css';

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  bodyClose?: boolean;
  iconClose?: boolean;
}

const Modal: React.FC<Props> = (props) => {
  const { children, open, onClose, bodyClose } = props;

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  const onBodyClose = () => {
    if (!bodyClose) return;
    props.onClose();
  };

  return (
    <div className={`modal ${open ? 'open' : ''}`} onClick={onBodyClose}>
      <section className={`modal_content ${open ? 'open' : ''}`}>{children}</section>
    </div>
  );
};

export default Modal;
