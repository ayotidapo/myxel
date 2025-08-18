interface Props {
  className?: string;
  onClick?: (e: React.MouseEvent<SVGSVGElement> | undefined) => void;
}

const Close: React.FC<Props> = (props) => {
  const { className = '', ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='25'
      fill='none'
      viewBox='0 0 24 25'
      className={className}
      {...rest}
    >
      <g clipPath='url(#clip0_18_1046)'>
        <path
          fill='#fff'
          d='m12 11.436 4.95-4.95L18.366 7.9l-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95L5.637 17.8l4.95-4.95-4.95-4.95L7.05 6.486z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_18_1046'>
          <path fill='#fff' d='M0 .85h24v24H0z'></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Close;
