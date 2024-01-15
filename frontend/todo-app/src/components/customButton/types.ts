export interface CustomButtonProps {
    variant: string;
    disabled?: boolean;
    buttonAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}