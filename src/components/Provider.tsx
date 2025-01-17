import 'src/styles/global.css';
import 'src/styles/theme.css';

import 'antd/dist/reset.css';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Provider: React.FC<Props> = ({ children }) => <>{children}</>;
