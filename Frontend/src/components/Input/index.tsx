import React from 'react';
import * as S from './styled';

interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: string;
}

export const Input = ({
                        type, 
                        name, 
                        placeholder, 
                        id,
                        onChange, 
                        value }:InputProps) => {

  return (
    <>

      <S.Input 
        type={type} 
        name={name} 
        id={id} 
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  )
}
