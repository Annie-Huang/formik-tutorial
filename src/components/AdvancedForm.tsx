import { Field, Form, Formik } from 'formik';

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ name: 'jared' }}>
      {(props) => (
        <Form>
          {/*<input*/}
          {/*  type='text'*/}
          {/*  onChange={props.handleChange}*/}
          {/*  onBlur={props.handleBlur}*/}
          {/*  value={props.values.name}*/}
          {/*  name='name'*/}
          {/*/>*/}
          <Field type='text' name='name' placeholder='Name' />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
