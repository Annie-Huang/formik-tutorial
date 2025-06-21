import React, { FC } from 'react';
import { useField } from 'formik';

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}
const CustomInput: FC<CustomInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  console.log('field=', field); // name, onBlur, onChange, value,
  console.log('meta=', meta); // error, initialError, initialTouched, initialValue, touched, value,

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
};

export default CustomInput;
