interface Props {
  className?: string;
}

const Close: React.FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      fill='none'
      viewBox='0 0 14 14'
      className={className}
    >
      <g clipPath='url(#clip0_26_11697)'>
        <path
          fill='currentColor'
          d='M7 1.168a5.836 5.836 0 0 1 5.833 5.833 5.835 5.835 0 0 1-5.834 5.834A5.835 5.835 0 0 1 1.166 7a5.835 5.835 0 0 1 5.833-5.833m.583 5.833h1.75L6.999 4.668 4.666 7.001h1.75v2.334h1.167z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_26_11697'>
          <path fill='#fff' d='M0 0h14v14H0z'></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Close;
