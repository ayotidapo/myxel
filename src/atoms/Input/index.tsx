import './input.css';

interface Props {
  type?: 'text' | 'password';
  value: string;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<Props> = (props) => {
  const { className = '', type = 'text', ...rest } = props;
  return (
    <label className='input__container'>
      <input type={type} className={`input ${className}`} {...rest} />
    </label>
  );
};

export default Input;
