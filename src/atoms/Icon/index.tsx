import React from 'react';

interface Props {
  id: string;

  className?: string;
  width?: number;
  height?: number;
  style?: Record<string, string>;
  onClick?: () => void;
}
const Icon: React.FC<Props> = (props) => {
  const { id, width, height, ...rest } = props;
  return (
    <svg id={id} width={width || 24} height={height || 24} {...rest}>
      <use xlinkHref={`/icon-sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
