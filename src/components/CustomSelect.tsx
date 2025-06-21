import { useField } from 'formik';
import { FC } from 'react';

interface CustomSelectProps {
  label: string;
  name: string;
  placeholder: string;
}

const CustomSelect: FC<CustomSelectProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
};
export default CustomSelect;
