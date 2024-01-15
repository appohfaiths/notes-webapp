export interface CustomInputProps {
    variant: 'text' | 'textarea';
    value: string;
    disabled?: boolean;
    placeholder: string;
    name: string;
    rows?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}