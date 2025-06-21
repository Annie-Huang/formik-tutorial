import { useField } from 'formik';
import { FC } from 'react';

interface CustomCheckboxProps {
  name: string;
  type: string;
}

const CustomCheckbox: FC<CustomCheckboxProps> = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='checkbox'>
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? 'input-error' : ''}
        />
        <span>I accept the terms of service</span>
      </div>

      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
};
export default CustomCheckbox;
