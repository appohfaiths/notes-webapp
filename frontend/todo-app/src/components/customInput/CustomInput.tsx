import React from 'react'
import { CustomInputProps } from './types'

export const CustomInput: React.FC<CustomInputProps> = ({ variant, value, onChange, disabled, placeholder, name, rows }) => {

    const renderInput = () => {

        switch (variant) {
            case 'textarea':
                return (<textarea placeholder={placeholder} name={name} disabled={disabled} value={value} onChange={onChange} rows={rows} className='w-full outline-none'/>)
            default:
                return (<input type="text" placeholder={placeholder} name={name} disabled={disabled} value={value} onChange={onChange} className='p-2 text-display-title outline-none'/>)
        }
    }
  return (
    <>{renderInput()}</>
  )
}
