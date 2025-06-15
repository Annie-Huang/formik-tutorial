import React from 'react';
import { useFormik } from 'formik';

const BasicForm = () => {
  // const formik = useFormik({
  const { values, handleBlur, handleChange } = useFormik({
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

  // console.log(formik);
  console.log('values =', values);

  return (
    <form autoComplete='off'>
      <label htmlFor='email'>Email</label>
      {/*<input id='email' type='email' placeholder='Enter your email' />*/}
      <input
        id='email'
        type='email'
        placeholder='Enter your email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor='age'>Age</label>
      <input
        id='age'
        type='number'
        placeholder='Enter your age'
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        placeholder='Enter your password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm password'
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default BasicForm;
