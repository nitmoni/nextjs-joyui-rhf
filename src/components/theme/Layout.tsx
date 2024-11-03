'use client';

import { CssVarsProvider } from '@mui/joy/styles';
import { theme } from './theme';
import { ReactNode } from 'react';
import { Box, CssBaseline } from '@mui/joy';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <CssVarsProvider
      disableTransitionOnChange
      theme={theme}
    >
      <CssBaseline/>
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        {children}
      </Box>
    </CssVarsProvider>
  );
}