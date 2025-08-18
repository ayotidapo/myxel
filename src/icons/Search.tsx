interface Props {
  className?: string;
}

const Search: React.FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      className={`${className}`}
    >
      <path
        stroke='#3D3D3D'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11.767 20.755a8.989 8.989 0 1 0 0-17.978 8.989 8.989 0 0 0 0 17.978M18.019 18.484 21.543 22'
      ></path>
    </svg>
  );
};

export default Search;
