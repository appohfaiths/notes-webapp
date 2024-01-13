import React, { ReactNode } from 'react';
import { Navbar } from '../components';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
    return (
        <>
        <Navbar />
        {children}
        </>
    )
}