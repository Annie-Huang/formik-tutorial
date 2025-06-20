import React, { FC } from 'react';

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}
const CustomInput: FC<CustomInputProps> = ({ label, ...props }) => {
  return (
    <>
      <label>{label}</label>
      <input {...props} />
    </>
  );
};

export default CustomInput;
