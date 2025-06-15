import React from 'react';
import { useFormik } from 'formik';

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik);

  return (
    <form autoComplete='off'>
      <label htmlFor='email'>Email</label>
      {/*<input id='email' type='email' placeholder='Enter your email' />*/}
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        id='email'
        type='email'
        placeholder='Enter your email'
      />
    </form>
  );
};

export default BasicForm;
