import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
    return <>
        <h1>The Layout</h1>
        {children}
    </>;
}