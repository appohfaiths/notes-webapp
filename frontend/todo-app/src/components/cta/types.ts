import { JSX } from 'react';

export interface CTAProps {
    type: 'home' | 'view' | 'create';
    title?: string;
    customInput?: JSX.Element;
    buttonAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}