import 'src/styles/global.css';
import 'src/styles/theme.css';

import React, { ReactNode } from 'react';

import 'antd/dist/reset.css';

type Props = {
  children: ReactNode;
};

export const Provider: React.FC<Props> = ({ children }) => <>{children}</>;
