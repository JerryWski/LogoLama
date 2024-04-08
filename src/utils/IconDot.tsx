import type { SVGProps } from 'react';

const IconDot = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={32}
      height={32}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='#fc6e94'
        d='M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2'
      ></path>
    </svg>
  );
};

export default IconDot;
