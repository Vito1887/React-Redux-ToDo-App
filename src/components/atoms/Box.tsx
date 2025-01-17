import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  onClick?: () => void;
};

export const Box: React.FC<Props> = ({
  children,
  className,
  visible = true,
  onClick,
}) =>
  visible ? (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  ) : null;
