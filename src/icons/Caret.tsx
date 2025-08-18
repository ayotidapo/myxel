interface Props {
  className?: string;
}

const Caret: React.FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='6' height='10' fill='none' viewBox='0 0 6 10' className={className}>
      <path fill='#4545FE' d='M3.879 5 .166 1.287l1.06-1.06L6 5 1.227 9.773.166 8.713z'></path>
    </svg>
  );
};

export default Caret;
