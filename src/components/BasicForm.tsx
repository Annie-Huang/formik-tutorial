import React from 'react';
import { useFormik } from 'formik';

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
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
        id='email'
        type='email'
        placeholder='Enter your email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label htmlFor='age'>Age</label>
      <input
        id='age'
        type='number'
        placeholder='Enter your age'
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        placeholder='Enter your password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm password'
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default BasicForm;
