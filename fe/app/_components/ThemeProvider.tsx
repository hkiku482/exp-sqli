'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  return <MuiThemeProvider theme={createTheme()}>{children}</MuiThemeProvider>;
};
