interface Props {
  className?: string;
}

const CNavigate: React.FC<Props> = (props) => {
  const { className = '' } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      fill='none'
      viewBox='0 0 18 18'
      className={className}
    >
      <circle cx='9' cy='9' r='9' fill='#F5F5F5' transform='rotate(180 9 9)'></circle>
      <path fill='#919191' d='m6.75 9 3.375-3.375v6.75z'></path>
    </svg>
  );
};

export default CNavigate;
