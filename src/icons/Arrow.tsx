interface Props {
  className?: string;
}

const Arrow: React.FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='24'
      fill='none'
      viewBox='0 0 25 24'
      className={className}
    >
      <path
        stroke='#fff'
        strokeLinecap='square'
        strokeWidth='1.8'
        d='M5.846 12h14.4M11.297 5.974l-6.05 6.024 6.05 6.025'
      ></path>
    </svg>
  );
};

export default Arrow;
