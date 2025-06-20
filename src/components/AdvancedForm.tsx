import { Field, Form, Formik } from 'formik';
import CustomInput from './CustomInput';

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ username: 'jared' }} onSubmit={() => {}}>
      {(props) => (
        <Form>
          {/*<input*/}
          {/*  type='text'*/}
          {/*  onChange={props.handleChange}*/}
          {/*  onBlur={props.handleBlur}*/}
          {/*  value={props.values.name}*/}
          {/*  name='name'*/}
          {/*/>*/}
          {/*<Field type='text' name='name' placeholder='Name' />*/}

          <CustomInput
            label='Username'
            name='username'
            type='text'
            placeholder='Enter your username'
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
